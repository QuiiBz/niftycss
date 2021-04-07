import { ClassProvider, StyleProvider } from '../types';
import murmurhash from 'murmurhash';
import { CLASS_PREFIX } from './constants';

const getClassName = <T, B>(styleProvider: StyleProvider<T, B>): string => {

    let encoded: string | Uint8Array;

    if(typeof styleProvider === 'function')
        encoded = styleProvider.toString();
    else
        encoded = new TextEncoder().encode(JSON.stringify(styleProvider));

    const hash = murmurhash(encoded).toString(36);

    return `${CLASS_PREFIX}-${hash}`;
}

const getClasses = <T, B>(
    classProvider: ClassProvider,
    styleProvider: StyleProvider<T, B>,
): {
    className: string,
    classes: string,
} => {

    const className = getClassName(styleProvider);
    let classes = classProvider.join(' ');

    if(classProvider.length > 0)
        classes += ' ';

    classes += className;

    return {
        className,
        classes,
    };
}

export default getClasses;
