import murmurhash from 'murmurhash';
import { getStyleFromProvider } from '../styles/styles';
import {
    Breakpoints, ClassProvider, NiftyProps, NiftyTheme, StyleProvider,
} from '../types';
import { CLASS_PREFIX } from './constants';

export const getClassName = <T extends NiftyTheme, B extends Breakpoints, P extends NiftyProps>(
    styleProvider: StyleProvider<T, B, P>,
    props: P,
): string => {
    const style = getStyleFromProvider(styleProvider, props);
    const hash = murmurhash(JSON.stringify(style)).toString(36);

    return `${CLASS_PREFIX}-${hash}`;
};

const getClasses = <T extends NiftyTheme, B extends Breakpoints, P extends NiftyProps>(
    classProvider: ClassProvider,
    styleProvider: StyleProvider<T, B, P>,
    props: P,
): {
    className: string,
    classes: string,
} => {
    const className = getClassName(styleProvider, props);
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
