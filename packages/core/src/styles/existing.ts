import {
    Breakpoints, ClassProvider, CSSProperties, NiftyProps, NiftyTheme, Style, StyleProvider,
} from '../types';
import getClasses from '../utils/className';
import { getStyleFromProvider } from './styles';

export const areStyleEquals = <T extends NiftyTheme, B extends Breakpoints >(
    [first, second]: [first: CSSProperties<T, B>, second: CSSProperties<T, B>],
) => JSON.stringify(first) === JSON.stringify(second);

const findExistingStyle = <T extends NiftyTheme, B extends Breakpoints, P extends NiftyProps>(
    styleProvider: StyleProvider<T, B, P>,
    classProvider: ClassProvider,
    styles: Style<T, B>[],
    props: P,
): {
    exist: boolean,
    foundClasses: string,
} => {
    const style = styles.find(({
        classes,
        cssProperties: currentStyleProvider,
    }) => areStyleEquals([
        getStyleFromProvider(styleProvider, props),
        getStyleFromProvider(currentStyleProvider, props),
    ]) && classes === getClasses(classProvider, styleProvider, props).classes);

    return {
        exist: style !== undefined,
        foundClasses: style?.classes || '',
    };
};

export default findExistingStyle;
