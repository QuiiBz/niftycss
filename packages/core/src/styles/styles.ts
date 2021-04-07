import {
    NiftyTheme,
    CSSProperties,
    CustomCSSProperty,
    Style,
    StyleProvider,
    Features,
    CSSValues,
    CustomCSSPropertyName,
} from '../types';
import { DEV } from '../utils/constants';

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
    customProperties: CustomCSSProperty<B>[],
} => {

    let cssProperties = '';
    const customProperties: CustomCSSProperty<B>[] = [];

    Object.entries(properties).forEach(([property, propertyValue]) => {

        if(isCustomProperty(property)) {

            const name = property as CustomCSSPropertyName;
            const properties = propertyValue as CSSProperties<B>;

            customProperties.push({
                name,
                properties,
            });

        } else {

            const kebabProperty = pascalToKebabCase(property);

            let features: Features = {
                value: propertyValue as CSSValues,
                important: false,
            };

            if(typeof propertyValue === 'object')
                features = propertyValue as Features;

            const { value, important } = features;

            if(DEV)
                cssProperties += `  ${kebabProperty}: ${value}${important ? ' !important' : ''};\n`;
            else
                cssProperties += `${kebabProperty}:${value}${important ? '!important' : ''};`;
        }
    });

    return {
        cssProperties,
        customProperties,
    };
}

const buildCss = <B>(
    breakpoints: NiftyTheme<B>,
    className: string,
    properties: CSSProperties<B>,
    context?: CustomCSSPropertyName,
): string => {

    let css = '';
    const { cssProperties, customProperties } = buildCssProperties(properties);

    if(context) {

        if(context.startsWith('@')) {

            const customProperties = context.split(' ');
            const customProperty = customProperties[0];

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const width = breakpoints[customProperty];

            if(!width)
                console.warn(`No breakpoint found for ${customProperty}. Availables breakpoints: ${Object.keys(breakpoints)}`);

            const cssProperty = customProperties.splice(1).join('');

            if(DEV)
                css += `@media (min-width: ${width}) {\n  .${className}${cssProperty} {\n  ${cssProperties}  }\n}\n`;
            else
                css += `@media(min-width:${width}){.${className}${cssProperty}{${cssProperties}}}`;

        } else {

            if(DEV)
                css += `.${className}${context} {\n${cssProperties}}\n`;
            else
                css += `.${className}${context}{${cssProperties}}`;
        }

    } else {

        if(DEV)
            css += `.${className} {\n${cssProperties}}\n`;
        else
            css += `.${className}{${cssProperties}}`;
    }

    customProperties.forEach(({ name, properties }) => {

        const nextContext = context ? `${context} ${name}` : name;
        const customPropertiesCss = buildCss(breakpoints, className, properties, nextContext);

        css += customPropertiesCss;
    });

    return css;
}

const buildCssStyles = <T, B>(
    breakpoints: NiftyTheme<B>,
    styles: Style<T, B>[],
    theme: NiftyTheme<T>,
): string => {

    let css = '';

    styles.forEach(({ className, styleProvider }) => {

        const properties = getStyleFromProvider(styleProvider, theme);
        css += buildCss(breakpoints, className, properties);
    });

    return css;
}

export default buildCssStyles;
