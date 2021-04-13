import { prefix } from 'inline-style-prefixer';
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

export const getStyleFromProvider = <T extends NiftyTheme, B extends Breakpoints>(
    styleProvider: StyleProvider<T, B>,
    theme: T,
): CSSProperties<B> => {
    if (typeof styleProvider === 'function') return styleProvider(theme);

    return styleProvider;
};

const pascalToKebabCase = (property: string): string => property
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();

const isCustomProperty = (propertyName: string): boolean => propertyName.startsWith(':') || propertyName.startsWith('$') || propertyName.startsWith('.') || propertyName.startsWith('*');

const buildCssProperties = <B extends Breakpoints>(properties: CSSProperties<B>): {
    cssProperties: string,
    directives: Directive<B>[],
} => {
    let cssProperties = '';
    const directives: Directive<B>[] = [];

    Object.entries(properties).forEach(([propertyKey, propertyValue]) => {
        if (isCustomProperty(propertyKey)) {
            const name = propertyKey as DirectiveName;
            const property = propertyValue as CSSProperties<B>;

            directives.push({
                name,
                properties: property,
            });
        } else {
            const kebabProperty = pascalToKebabCase(propertyKey);
            const features: Features[] = [];

            if (Array.isArray(propertyValue)) {
                (propertyValue as Array<CSSValues>).forEach((value) => {
                    features.push({ value, important: false });
                });
            } else if (typeof propertyValue === 'object') {
                features.push(propertyValue as Features);
            } else {
                features.push({
                    value: propertyValue as CSSValues,
                    important: false,
                });
            }

            features.forEach(({ value, important }) => {
                if (DEV) cssProperties += `  ${kebabProperty}: ${value}${important ? ' !important' : ''};\n`;
                else cssProperties += `${kebabProperty}:${value}${important ? '!important' : ''};`;
            });
        }
    });

    return {
        cssProperties,
        directives,
    };
};

const buildRules = <B extends Breakpoints>(
    breakpoints: B,
    className: string,
    properties: CSSProperties<B>,
    context?: DirectiveName,
): string[] => {
    const css: string[] = [];
    const { cssProperties, directives } = buildCssProperties(properties);

    // TODO need refactor
    if (context) {
        if (context.startsWith('$')) {
            const customProperties = context.split(' ');
            const customProperty = customProperties[0];

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const width = breakpoints[customProperty];

            if (!width) console.warn(`No breakpoint found for ${customProperty}. Available breakpoints: ${Object.keys(breakpoints)}`);

            const cssProperty = customProperties.splice(1).join('');

            if (DEV) css.push(`@media (min-width: ${width}) {\n  .${className}${cssProperty} {\n  ${cssProperties}  }\n}\n`);
            else css.push(`@media(min-width:${width}){.${className}${cssProperty}{${cssProperties}}}`);
        } else if (context.startsWith('.')) {
            css.push(`.${className} ${context} {\n${cssProperties}}\n`);
        } else if (context.startsWith('*')) {
            css.push(`.${className} ${context.replace('*', '')} {\n${cssProperties}}\n`);
        } else if (DEV) css.push(`.${className}${context} {\n${cssProperties}}\n`);
        else css.push(`.${className}${context}{${cssProperties}}`);
    } else if (DEV) css.push(`.${className} {\n${cssProperties}}\n`);
    else css.push(`.${className}{${cssProperties}}`);

    directives.forEach(({ name, properties: theProperties }) => {
        const nextContext = context ? `${context}${name.startsWith(':') ? name : ` ${name}`}` : name;
        const customPropertiesCss = buildRules(breakpoints, className, theProperties, nextContext);

        css.push(...customPropertiesCss);
    });

    return css;
};

const buildCssRules = <T extends NiftyTheme, B extends Breakpoints>(
    styles: Style<T, B>[],
    theme: T,
    breakpoints: B,
): string[] => {
    const css: string[] = [];

    styles.forEach(({ className, styleProvider }) => {
        const properties = prefix(getStyleFromProvider(styleProvider, theme));
        css.push(...buildRules(breakpoints, className, properties));
    });

    return css;
};

export default buildCssRules;
