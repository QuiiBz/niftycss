import {
    NiftyTheme,
    CSSProperties,
    CustomCSSProperty,
    Style,
    StyleProvider,
    Features,
    CSSValues, CustomCSSPropertyName, MediaProperties,
} from '../index';

const dev = true;

export const getStyleFromProvider = <T>(
    styleProvider: StyleProvider<T>,
    theme: NiftyTheme<T>,
): CSSProperties => {

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

const buildCssProperties = (properties: CSSProperties): {
    cssProperties: string,
    customProperties: CustomCSSProperty[],
} => {

    let cssProperties = '';
    const customProperties: CustomCSSProperty[] = [];

    Object.entries(properties).forEach(([property, propertyValue]) => {

        if(isCustomProperty(property)) {

            const name = property as CustomCSSPropertyName;
            const properties = propertyValue as CSSProperties;

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

const buildCssStyles = <T>(
    styles: Style<T>[],
    theme: NiftyTheme<T>,
): string => {

    let css = '';

    styles.forEach(({ className, styleProvider }) => {

        const properties = getStyleFromProvider(styleProvider, theme);
        const { cssProperties, customProperties } = buildCssProperties(properties);

        if(dev)
            css += `.${className} {\n${cssProperties}}\n`;
        else
            css += `.${className}{${cssProperties}}`;

        if(customProperties.length > 0) {

            customProperties.forEach(({ name, properties }) => {

                const { cssProperties } = buildCssProperties(properties);

                if(name.startsWith('@')) {

                    let width = '';

                    switch(name.replace('@', '') as MediaProperties) {

                        case 'sm':
                            width = '640';
                            break;
                        case 'md':
                            width = '768';
                            break;
                        case 'lg':
                            width = '1024';
                            break;
                        case 'xl':
                            width = '1280';
                            break;
                        case 'xxl':
                            width = '1536';
                            break;
                    }

                    if(dev)
                        css += `@media (min-width: ${width}px) {\n  .${className} {\n  ${cssProperties}  }\n}\n`;
                    else
                        css += `@media(min-width:${width}px){.${className}{${cssProperties}}}`;

                } else {

                    if(dev)
                        css += `.${className}${name} {\n${cssProperties}}\n`;
                    else
                        css += `.${className}${name}{${cssProperties}}`;
                }
            });
        }
    });

    return css;
}

export default buildCssStyles;
