import * as CSS from 'csstype';
import { NiftyPlugin } from '@niftycss/plugins';
import { HTMLTag, OptionalHTMLTag } from './html';

// From https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
type WebkitScrollbar =
    '::-webkit-scrollbar' |
    '::-webkit-scrollbar-button' |
    '::-webkit-scrollbar-thumb' |
    '::-webkit-scrollbar-track' |
    '::-webkit-scrollbar-track-piece' |
    '::-webkit-scrollbar-corner' |
    '::-webkit-resizer';

// The type of all CSS keys
export type CSSKeys = keyof CSS.Properties;

// The type of all CSS values
export type CSSValues = CSS.Properties[CSSKeys];

/**
 * A type representing all available css properties.
 */
export type CSSProperties<T extends NiftyTheme, B extends Breakpoints> =
    // Pseudo properties
    {
        [P in CSS.Pseudos | WebkitScrollbar]?: CSSProperties<T, B>
    } &
    // Normal properties
    {
        [P in CSSKeys]?:
        // Theme
        `@${string & keyof T}` |
        // Key-value properties
        CSS.Properties[P] |
        // Key-array of values properties
        CSS.Properties[P][]
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

export type NiftyProps = Record<string, unknown>;

/**
 * A type representing a style, which is composed of a class name, the classes and a style provider.
 */
export type Style<T extends NiftyTheme, B extends Breakpoints> = {
    className: string,
    classes: string,
    cssProperties: CSSProperties<T, B>,
};

/**
 * A type representing a list of class names.
 */
export type ClassProvider = string[];

/**
 * A type representing a function which provides css properties with a callback or an
 * object of css properties.
 */
export type StyleProvider<
    T extends NiftyTheme,
    B extends Breakpoints,
    P extends NiftyProps,
> = CSSProperties<T, B> | ((props: P) => CSSProperties<T, B>);

/**
 * A type representing a function with provides a new theme given the old theme, or the new
 * theme directly.
 */
export type ThemeProvider<T extends NiftyTheme> = ((theme: T) => T) | T;

/**
 * A type representing the options to create the nifty instance.
 */
export type NiftyOptions<T extends NiftyTheme, B extends Breakpoints> = {
    theme?: T;
    breakpoints?: B;
    ssr?: boolean;
    plugins?: NiftyPlugin[];
    debug?: boolean;
};

/**
 * The nifty config is the same as the nifty options, expect that each field is required.
 */
export type NiftyConfig<T extends NiftyTheme, B extends Breakpoints> = Required<NiftyOptions<T, B>>;
