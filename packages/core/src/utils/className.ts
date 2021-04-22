import murmurhash from 'murmurhash';
import {
    Breakpoints, ClassProvider, NiftyTheme, StyleProvider,
} from '../types';
import { CLASS_PREFIX } from './constants';

/**
 * Get the class name of the given style provider. The class name is unique and
 * is generated from the style provider. This avoid any naming conflicts.
 *
 * @param styleProvider - The style provider to get the class name from
 * @param theme - The current theme
 * @returns The class name for this style provider
 */
export const getClassName = <T extends NiftyTheme, B extends Breakpoints>(
    styleProvider: StyleProvider<T, B>,
): string => {
    const style = styleProvider;
    const hash = murmurhash(JSON.stringify(style)).toString(36);

    return `${CLASS_PREFIX}-${hash}`;
};

/**
 * Get the class name and the classes of the given class and style providers.
 *
 * @param classProvider - The list of aditionnal classes to use
 * @param styleProvider - The style provider to get the class name from
 * @param theme - The current theme
 * @returns An object containing the class name and the classes
 */
const getClasses = <T extends NiftyTheme, B extends Breakpoints>(
    classProvider: ClassProvider,
    styleProvider: StyleProvider<T, B>,
): {
    className: string,
    classes: string,
} => {
    const className = getClassName(styleProvider);
    let classes = classProvider.join(' ');

    // Add a space before the list of classes if the class provider
    // is not empty.
    if (classProvider.length > 0) classes += ' ';

    classes += className;

    return {
        className,
        classes,
    };
};

export default getClasses;
