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
export type CSSProperties<B> =
    // Pseudo properties
    {
        [P in CSS.Pseudos]?: CSSProperties<B>
    } &
    // Normal properties
    {
        [P in CSSKeys]?:
        // Key-value properties
        CSSValues |
        // Key-array of values properties
        CSSValues[] |
        // Key-features properties
        Features
    } &
    // Directives properties
    {
        [P in keyof B]?: CSSProperties<B>
    };

// A type representing the name of the directives.
export type DirectiveName = CSS.Pseudos | string;

/**
 * A type representing a directive with its name and the css properties.
 */
export type Directive<B> = {
    name: DirectiveName,
    properties: CSSProperties<B>,
}

/**
 * A type representing a Nifty theme.
 */
export type NiftyTheme<T> = Record<keyof T, string>;

/**
 * A type representing the breakpoints.
 */
export type Breakpoints<B> = NiftyTheme<B>;

/**
 * A type representing a style, which is composed of a class name, the classes and a style provider.
 */
export type Style<T, B> = {
    className: string,
    classes: string,
    styleProvider: StyleProvider<T, B>,
};

/**
 * A type representing a list of class names.
 */
export type ClassProvider = string[];

/**
 * A type representing a function which provides css properties with a callback or an
 * object of css properties.
 */
export type StyleProvider<T, B> = ((theme: NiftyTheme<T>) => CSSProperties<B>) | CSSProperties<B>;

/**
 * A type representing a function with provides a new theme given the old theme, or the new
 * theme directly.
 */
export type ThemeProvider<T> = ((theme: NiftyTheme<T>) => NiftyTheme<T>) | NiftyTheme<T>;

/**
 * The CSS injection mode.
 */
export type InjectMode = 'insertRule' | 'textContent';
