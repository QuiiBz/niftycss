import {
    NiftyTheme,
    CSSProperties,
    CustomCSSProperty,
    Style,
    StyleProvider,
    Features,
    CSSValues,
    CustomCSSPropertyName,
    CustomProperties,
} from '../index';

const dev = true;

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

            if(dev)
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
    context?: string
): string => {

    let css = '';
    const { cssProperties, customProperties } = buildCssProperties(properties);

    if(context) {

        if(context.startsWith('@')) {

            const customProperties = context.split(' ') as CustomProperties[];
            const customProperty = customProperties[0];

            // @ts-ignore
            const width = breakpoints[customProperty];

            if(!width)
                console.warn(`No breakpoint found for ${customProperty}. Availables breakpoints: ${Object.keys(breakpoints)}`);

            const cssProperty = customProperties.splice(1).join('');

            if(dev)
                css += `@media (min-width: ${width}) {\n  .${className}${cssProperty} {\n  ${cssProperties}  }\n}\n`;
            else
                css += `@media(min-width:${width}){.${className}${cssProperty}{${cssProperties}}}`;

        } else {

            if(dev)
                css += `.${className}${context} {\n${cssProperties}}\n`;
            else
                css += `.${className}${context}{${cssProperties}}`;
        }

    } else {

        if(dev)
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
