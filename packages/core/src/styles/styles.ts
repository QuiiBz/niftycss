import {
    NiftyTheme,
    CSSProperties,
    PseudoCSSProperty,
    Style,
    StyleProvider,
    Features,
    CSSValues,
} from '../index';
import * as CSS from 'csstype';

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

const buildCssProperties = (properties: CSSProperties): {
    cssProperties: string,
    pseudoProperties: PseudoCSSProperty[],
} => {

    let cssProperties = '';
    const pseudoProperties: PseudoCSSProperty[] = [];

    Object.entries(properties).forEach(([property, propertyValue]) => {

        if(property.startsWith(':')) {

            const pseudo = property as CSS.SimplePseudos;
            const properties = propertyValue as CSSProperties;

            pseudoProperties.push({
                pseudo,
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

            cssProperties += `${kebabProperty}: ${value}${important ? ' !important' : ''};`;
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
