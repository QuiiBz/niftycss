import { ClassProvider, StyleProvider } from '../types';
import murmurhash from 'murmurhash';
import { CLASS_PREFIX } from './constants';

/**
 * Get the class name of the given style provider. The class name is unique and
 * is generated from the style provider. This avoid any naming conflicts.
 *
 * @param styleProvider - The style provider to get the class name from
 * @returns The class name for this style provider
 */
const getClassName = <T, B>(styleProvider: StyleProvider<T, B>): string => {

    let encoded: string | Uint8Array;

    // murmurhash throws an error with object strings so we encode it ourselve
    if(typeof styleProvider !== 'function')
        encoded = new TextEncoder().encode(JSON.stringify(styleProvider));
    else
        encoded = styleProvider
            .toString()
            .replaceAll(/[ \n;"']/g, '')
            .replaceAll(/(function\(.*\))|(.*=>)/g, '')
            .replaceAll(/return/g, '')
            .replaceAll('(', '{')
            .replaceAll(')', '}')
            .replaceAll(/.\./g, 't.');

    const hash = murmurhash(encoded).toString(36);

    return `${CLASS_PREFIX}-${hash}`;
}

/**
 * Get the class name and the classes of the given class and style providers.
 *
 * @param classProvider - The list of aditionnal classes to use
 * @param styleProvider - The style provider to get the class name from
 * @returns An object containing the class name and the classes
 */
const getClasses = <T, B>(
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
    if(classProvider.length > 0)
        classes += ' ';

    classes += className;

    return {
        className,
        classes,
    };
}

export default getClasses;
