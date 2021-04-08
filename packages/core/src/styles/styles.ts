import {
    NiftyTheme,
    CSSProperties,
    Directive,
    Style,
    StyleProvider,
    Features,
    CSSValues,
    DirectiveName,
    Breakpoints,
} from '../types';
import { DEV } from '../utils/constants';
import { prefix } from 'inline-style-prefixer';

export const getStyleFromProvider = <T, B>(
    styleProvider: StyleProvider<T, B>,
    theme: NiftyTheme<T>,
): CSSProperties<B> => {

    if(typeof styleProvider === 'function')
        return styleProvider(theme);

    return styleProvider;
}

const pascalToKebabCase = (property: string): string => {

    return property
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .toLowerCase();
}

const isCustomProperty = (propertyName: string): boolean => {

    return propertyName.startsWith(':') || propertyName.startsWith('@');
}

const buildCssProperties = <B>(properties: CSSProperties<B>): {
    cssProperties: string,
    directives: Directive<B>[],
} => {

    let cssProperties = '';
    const directives: Directive<B>[] = [];

    Object.entries(properties).forEach(([property, propertyValue]) => {

        if(isCustomProperty(property)) {

            const name = property as DirectiveName;
            const properties = propertyValue as CSSProperties<B>;

            directives.push({
                name,
                properties,
            });

        } else {

            const kebabProperty = pascalToKebabCase(property);
            const features: Features[] = [];

            if(Array.isArray(propertyValue)) {

                for(const propertyValueKey of propertyValue) {
                    features.push({ value: propertyValueKey, important: false });
                }

            } else {

                if(typeof propertyValue === 'object') {
                    features.push(propertyValue as Features);
                } else {
                    features.push({
                        value: propertyValue as CSSValues,
                        important: false,
                    });
                }
            }

            features.forEach(({ value, important }) => {

                if(DEV)
                    cssProperties += `  ${kebabProperty}: ${value}${important ? ' !important' : ''};\n`;
                else
                    cssProperties += `${kebabProperty}:${value}${important ? '!important' : ''};`;
            });
        }
    });

    return {
        cssProperties,
        directives,
    };
}

const buildRules = <B>(
    breakpoints: Breakpoints<B>,
    className: string,
    properties: CSSProperties<B>,
    context?: DirectiveName,
): string[] => {

    const css: string[] = [];
    const { cssProperties, directives } = buildCssProperties(properties);

    if(context) {

        if(context.startsWith('@')) {

            const customProperties = context.split(' ');
            const customProperty = customProperties[0];

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const width = breakpoints[customProperty];

            if(!width)
                console.warn(`No breakpoint found for ${customProperty}. Available breakpoints: ${Object.keys(breakpoints)}`);

            const cssProperty = customProperties.splice(1).join('');

            if(DEV)
                css.push(`@media (min-width: ${width}) {\n  .${className}${cssProperty} {\n  ${cssProperties}  }\n}\n`);
            else
                css.push(`@media(min-width:${width}){.${className}${cssProperty}{${cssProperties}}}`);

        } else {

            if(DEV)
                css.push(`.${className}${context} {\n${cssProperties}}\n`);
            else
                css.push(`.${className}${context}{${cssProperties}}`);
        }

    } else {

        if(DEV)
            css.push(`.${className} {\n${cssProperties}}\n`);
        else
            css.push(`.${className}{${cssProperties}}`);
    }

    directives.forEach(({ name, properties }) => {

        const nextContext = context ? `${context} ${name}` : name;
        const customPropertiesCss = buildRules(breakpoints, className, properties, nextContext);

        css.push(...customPropertiesCss);
    });

    return css;
}

const buildCssRules = <T, B>(
    breakpoints: Breakpoints<B>,
    styles: Style<T, B>[],
    theme: NiftyTheme<T>,
): string[] => {

    const css: string[] = [];

    styles.forEach(({ className, styleProvider }) => {

        const properties = prefix(getStyleFromProvider(styleProvider, theme));
        css.push(...buildRules(breakpoints, className, properties));
    });

    return css;
}

export default buildCssRules;
