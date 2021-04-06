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

/**
 * A type representing all available css properties.
 */
export type CSSProperties =
    // Pseudo properties
    {
        [P in CSS.Pseudos]?: CSS.Properties
    } &
    // Normal properties
    {
        [P in CSSKeys]?:
            // Key-value properties
            CSSValues |
            // Key-features properties
            Features
    };

/**
 * A type representing a pseudo css property, with a pseudo element and an object of
 * properties.
 */
export type PseudoCSSProperty = {
    pseudo: CSS.Pseudos,
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
