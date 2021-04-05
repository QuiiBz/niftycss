import { NiftyTheme, CSSProperties, PseudoCSSProperty, Style, StyleProvider } from '../index';
import * as CSS from 'csstype';

const getStyleFromProvider = <T>(
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

const buildCssProperties = (properties: CSSProperties): {
    cssProperties: string,
    pseudoProperties: PseudoCSSProperty[],
} => {

    let cssProperties = '';
    const pseudoProperties: PseudoCSSProperty[] = [];

    Object.entries(properties).forEach(([property, value]) => {

        if(property.startsWith(':')) {

            const pseudo = property as CSS.SimplePseudos;

            pseudoProperties.push({
                pseudo,
                properties: value,
            });

        } else {

            const kebabProperty = pascalToKebabCase(property);

            cssProperties += `${kebabProperty}: ${value};`;
        }
    });

    return {
        cssProperties,
        pseudoProperties,
    };
}

const buildCssStyles = <T>(
    styles: Style<T>[],
    theme: NiftyTheme<T>,
): string => {

    let css = '';

    styles.forEach(({ className, styleProvider }) => {

        const properties = getStyleFromProvider(styleProvider, theme);
        const { cssProperties, pseudoProperties } = buildCssProperties(properties);

        css += `.${className} {${cssProperties}} `;

        if(pseudoProperties.length > 0) {

            pseudoProperties.forEach(({ pseudo, properties }) => {

                const { cssProperties } = buildCssProperties(properties);

                css += `.${className}${pseudo} {${cssProperties}} `;
            });
        }
    });

    return css;
}

export default buildCssStyles;
