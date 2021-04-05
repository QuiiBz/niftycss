import { useContext } from 'react';
import { NiftyContext } from './NiftyContext';
import { NiftyTheme, StyleProvider } from '@niftycss/core';

export const nift = <T>(
    styleProvider: StyleProvider<T>,
): string => {

    const { nifty } = useContext(NiftyContext);

    return nifty.nift(styleProvider);
}

export const useNifty = <T>(): { theme: NiftyTheme<T>, setTheme: <T>(theme: NiftyTheme<T>) => void } => {

    const { theme, setTheme } = useContext(NiftyContext);

    return {
        theme,
        setTheme,
    };
}
