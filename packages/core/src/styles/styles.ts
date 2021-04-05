import { CascadeTheme, CSSProperties, Style, StyleProvider } from '../index';

const getStyleFromProvider = <T>(
    styleProvider: StyleProvider<T>,
    theme: CascadeTheme<T>,
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

const buildCssProperties = (properties: CSSProperties): string => {

    let cssProperties = '';

    Object.entries(properties).forEach(([property, value]) => {

        const kebabProperty = pascalToKebabCase(property);

        cssProperties += `${kebabProperty}: ${value};`;
    });

    return cssProperties;
}

const buildCssStyles = <T>(
    styles: Style<T>[],
    theme: CascadeTheme<T>,
): string => {

    let css = '';

    styles.forEach(({ className, styleProvider }) => {

        const properties = getStyleFromProvider(styleProvider, theme);
        const cssProperties = buildCssProperties(properties);

        css += `.${className} {${cssProperties}} `;
    });

    return css;
}

export default buildCssStyles;
