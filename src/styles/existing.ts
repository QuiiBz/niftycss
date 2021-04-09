import { ClassProvider, CSSProperties, NiftyTheme, Style, StyleProvider } from '../types';
import { getStyleFromProvider } from './styles';

/**
 * Check if two styles are equals.
 *
 * @param first - The first style to check
 * @param second - The second style to check
 * @returns True if the styles are equals, false else
 */
const areStyleEquals = <B>(
    [first, second]: [first: CSSProperties<B>, second: CSSProperties<B>],
) => {

    return JSON.stringify(first) === JSON.stringify(second);
}

/**
 * Find if the given style provider has already been loaded in the given style.
 *
 * @param styleProvider - The style provider to check if exist
 * @param classProvider - The classes to use
 * @param styles - The current app styles
 * @param theme - The current app theme
 * @returns An object of if the style already exist and the found classes
 */
const findExistingStyle = <T, B>(
    styleProvider: StyleProvider<T, B>,
    classProvider: ClassProvider,
    styles: Style<T, B>[],
    theme: NiftyTheme<T>,
): {
    exist: boolean,
    foundClasses: string,
} => {

    const prevStyle = getStyleFromProvider(styleProvider, theme);
    const style = styles.find(({ classes, styleProvider }) => {

        const currentStyle = getStyleFromProvider(styleProvider, theme);

        return areStyleEquals([prevStyle, currentStyle]) && classes === classProvider.join(' ');
    });

    return {
        exist: style !== undefined,
        foundClasses: style?.classes || '',
    };
}

export default findExistingStyle;
