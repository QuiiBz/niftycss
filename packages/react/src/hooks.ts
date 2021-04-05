import { useContext } from 'react';
import { NiftyContext } from './NiftyContext';
import { NiftyTheme, StyleProvider } from '@niftycss/core';

export const style = <T>(
    styleProvider: StyleProvider<T>,
): string => {

    const { style } = useContext(NiftyContext);

    return style.style(styleProvider);
}

export const useNifty = <T>(): { theme: NiftyTheme<T>, setTheme: <T>(theme: NiftyTheme<T>) => void } => {

    const { theme, setTheme } = useContext(NiftyContext);

    return {
        theme,
        setTheme,
    };
}
