import { CSSProperties, NiftyTheme, Style, StyleProvider } from '../index';
import { getStyleFromProvider } from './styles';

const areStyleEquals = <T, B>(
    [first, second]: [first: CSSProperties<B>, second: CSSProperties<B>],
) => {

    return JSON.stringify(first) === JSON.stringify(second);
}

const findExistingStyle = <T, B>(
    styleProvider: StyleProvider<T, B> | undefined,
    styles: Style<T, B>[],
    theme: NiftyTheme<T>,
): Style<T, B> | undefined => {

    if(!styleProvider)
        return undefined;

    const prevStyle = getStyleFromProvider(styleProvider, theme);

    return styles.find(({ styleProvider }) => {

        const currentStyle = getStyleFromProvider(styleProvider, theme);

        return areStyleEquals([prevStyle, currentStyle]);
    });
}

export default findExistingStyle;
