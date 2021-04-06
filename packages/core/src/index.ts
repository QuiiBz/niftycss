import * as CSS from 'csstype';

// The type of all CSS keys
export type CSSKeys = keyof CSS.Properties;

// The type of all CSS values
export type CSSValues = CSS.Properties[CSSKeys];

/**
 * A type representing additional CSS features. For example, the `important` field represent
 * the `!important` in CSS.
 */
export type Features = {
    value: CSSValues,
    important: boolean,
};

export type MediaProperties = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type CustomProperties = `@${MediaProperties}`;

/**
 * A type representing all available css properties.
 */
export type CSSProperties =
    // Pseudo properties
    {
        [P in CSS.Pseudos]?: CSSProperties
    } &
    // Normal properties
    {
        [P in CSSKeys]?:
            // Key-value properties
            CSSValues |
            // Key-features properties
            Features
    } &
    // Custom properties
    {
        [P in CustomProperties]?: CSSProperties
    };

export type CustomCSSPropertyName = CSS.Pseudos | CustomProperties;

/**
 * A type representing a custom css property, which can be a pseudo property or any custom
 * property.
 */
export type CustomCSSProperty = {
    name: CustomCSSPropertyName,
    properties: CSSProperties,
}

/**
 * A type representing a Nifty theme.
 */
export type NiftyTheme<T> = Record<keyof T, string>;

/**
 * A type representing a style, which is composed of a class name, and a style provider.
 */
export type Style<T> = {
    className: string,
    styleProvider: StyleProvider<T>,
};

/**
 * A type representing a list of class names.
 */
export type ClassProvider = string[];

/**
 * A type representing a function which provides css properties with a callback or an
 * object of css properties.
 */
export type StyleProvider<T> = ((theme: NiftyTheme<T>) => CSSProperties) | CSSProperties;

/**
 * A type reprensing a function with provides a new theme given the old theme, or the new
 * theme directly.
 */
export type ThemeProvider<T> = ((theme: NiftyTheme<T>) => NiftyTheme<T>) | NiftyTheme<T>;

export { default as Nifty } from './Nifty';
export * from './utils/cssUtils';
