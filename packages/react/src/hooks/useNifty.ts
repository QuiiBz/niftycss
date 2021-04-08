import { useContext } from 'react';
import { NiftyContext } from '../components/NiftyContext';
import { ClassProvider, DEFAULT_BREAKPOINTS, NiftyTheme, StyleProvider, ThemeProvider } from '@niftycss/core';

export const useNifty = <
    T extends NiftyTheme<T>,
    B extends NiftyTheme<B> = typeof DEFAULT_BREAKPOINTS
    >(): {
    css: (
        styleProvider: StyleProvider<T, B>,
        classProvider?: ClassProvider,
    ) => string,
    setTheme: (theme: ThemeProvider<T>) => void,
} => {

    const { nifty, setTheme } = useContext(NiftyContext);

    const css = (styleProvider: StyleProvider<T, B>,
                 classProvider?: ClassProvider,
    ) => nifty.css(styleProvider, classProvider);

    return {
        css,
        setTheme,
    };
}
