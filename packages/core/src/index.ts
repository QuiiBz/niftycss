import * as CSS from 'csstype';
import Nifty from './Nifty';

/**
 * A type representing all available css properties.
 */
export type CSSProperties = CSS.Properties & { [P in CSS.SimplePseudos]?: CSS.Properties };

/**
 * A type representing a pseudo css property, with a pseudo element and an object of
 * properties.
 */
export type PseudoCSSProperty = {
    pseudo: CSS.SimplePseudos,
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
 * A type representing a function which provides css properties with a callback or an object
 * of css properties.
 */
export type StyleProvider<T> = ((theme: NiftyTheme<T>) => CSSProperties) | CSSProperties;

export default Nifty;
