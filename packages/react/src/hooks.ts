import { useContext } from 'react';
import { NiftyContext } from './NiftyContext';
import { ClassProvider, DEFAULT_BREAKPOINTS, NiftyTheme, StyleProvider, ThemeProvider } from '@niftycss/core';

export const useNifty = <
    T extends NiftyTheme<T>,
    B extends NiftyTheme<B> = typeof DEFAULT_BREAKPOINTS
    >(): {
    css: (classProvider: ClassProvider,
          styleProvider: StyleProvider<T, B>,
    ) => string,
    setTheme: (theme: ThemeProvider<T>) => void,
} => {

    const { nifty, setTheme } = useContext(NiftyContext);

    const css = (classProvider: ClassProvider,
                 styleProvider: StyleProvider<T, B>,
    ) => nifty.css(classProvider, styleProvider);

    return {
        css,
        setTheme,
    };
}
