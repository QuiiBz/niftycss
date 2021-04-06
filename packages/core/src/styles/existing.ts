import { CSSProperties, NiftyTheme, Style, StyleProvider } from '../index';
import { getStyleFromProvider } from './styles';

const areStyleEquals = <T>(
    [first, second]: [first: CSSProperties, second: CSSProperties],
) => {

    return JSON.stringify(first) === JSON.stringify(second);
}

const findExistingStyle = <T>(
    styleProvider: StyleProvider<T> | undefined,
    styles: Style<T>[],
    theme: NiftyTheme<T>,
): Style<T> | undefined => {

    if(!styleProvider)
        return undefined;

    const prevStyle = getStyleFromProvider(styleProvider, theme);

    return styles.find(({ styleProvider }) => {

        const currentStyle = getStyleFromProvider(styleProvider, theme);

        return areStyleEquals([prevStyle, currentStyle]);
    });
}

export default findExistingStyle;
