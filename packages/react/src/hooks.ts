import { useContext } from 'react';
import { NiftyContext } from './NiftyContext';
import { ClassProvider, NiftyTheme, StyleProvider } from '@niftycss/core';

export const css = <T>(
    classProvider: ClassProvider,
    styleProvider: StyleProvider<T>,
): string => {

    const { nifty } = useContext(NiftyContext);

    return nifty.css(classProvider, styleProvider);
}

export const useNifty = <T>(): {
    setTheme: <T>(theme: NiftyTheme<T>) => void,
} => {

    const { setTheme } = useContext(NiftyContext);

    return {
        setTheme,
    };
}
