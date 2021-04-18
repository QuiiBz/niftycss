import * as CSS from 'csstype';
import { HTMLTag, OptionalHTMLTag } from './html';

declare module 'csstype' {
    // Add css  rules not shipped into csstype
    interface Properties {
        // From https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
        '::-webkit-scrollbar'?: any;
        '::-webkit-scrollbar-button'?: any;
        '::-webkit-scrollbar-thumb'?: any;
        '::-webkit-scrollbar-track'?: any;
        '::-webkit-scrollbar-track-piece'?: any;
        '::-webkit-scrollbar-corner'?: any;
        '::-webkit-resizer'?: any;
    }
}

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
export type CSSProperties<T extends NiftyTheme, B extends Breakpoints> =
    // Pseudo properties
    {
        [P in CSS.Pseudos]?: CSSProperties<T, B>
    } &
    // Normal properties
    {
        [P in CSSKeys]?:
        `$${string & keyof T}` |
        // Key-value properties
        CSSValues |
        // Key-array of values properties
        CSSValues[] |
        // Key-features properties
        Features
    } &
    // Directives properties
    {
        [P in keyof B]?: CSSProperties<T, B>
    } &
    // HTML Tags selectors
    {
        [P in `*${HTMLTag}${OptionalHTMLTag}`]?: CSSProperties<T, B>
    };

// A type representing the name of the directives.
export type DirectiveName = CSS.Pseudos | string;

/**
 * A type representing a directive with its name and the css properties.
 */
export type Directive<T extends NiftyTheme, B extends Breakpoints> = {
    name: DirectiveName,
    properties: CSSProperties<T, B>,
};

/**
 * A type representing a Nifty theme.
 */
export type NiftyTheme = Record<string, string>;

/**
 * A type representing the breakpoints.
 */
export type Breakpoints = Record<string, string>;

/**
 * A type representing a style, which is composed of a class name, the classes and a style provider.
 */
export type Style<T extends NiftyTheme, B extends Breakpoints> = {
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
export type StyleProvider<T extends NiftyTheme, B extends Breakpoints> = CSSProperties<T, B>;

/**
 * A type representing a function with provides a new theme given the old theme, or the new
 * theme directly.
 */
export type ThemeProvider<T extends NiftyTheme> = ((theme: T) => T) | T;
