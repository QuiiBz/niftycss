import {
    Breakpoints, ClassProvider, CSSProperties, NiftyTheme, Style, StyleProvider,
} from '../types';

/**
 * Check if two styles are equals.
 *
 * @param first - The first style to check
 * @param second - The second style to check
 * @returns True if the styles are equals, false else
 */
const areStyleEquals = <T extends NiftyTheme, B extends Breakpoints >(
    [first, second]: [first: CSSProperties<T, B>, second: CSSProperties<T, B>],
) => JSON.stringify(first) === JSON.stringify(second);

/**
 * Find if the given style provider has already been loaded in the given style.
 *
 * @param styleProvider - The style provider to check if exist
 * @param classProvider - The classes to use
 * @param styles - The current app styles
 * @param theme - The current app theme
 * @returns An object of if the style already exist and the found classes
 */
const findExistingStyle = <T extends NiftyTheme, B extends Breakpoints>(
    styleProvider: StyleProvider<T, B>,
    classProvider: ClassProvider,
    styles: Style<T, B>[],
): {
    exist: boolean,
    foundClasses: string,
} => {
    const prevStyle = styleProvider;
    const style = styles.find(({ classes, styleProvider: currentStyleProvider }) => {
        const currentStyle = currentStyleProvider;

        return areStyleEquals([prevStyle, currentStyle]) && classes === classProvider.join(' ');
    });

    return {
        exist: style !== undefined,
        foundClasses: style?.classes || '',
    };
};

export default findExistingStyle;
