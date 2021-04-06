import { useContext } from 'react';
import { NiftyContext } from './NiftyContext';
import { ClassProvider, defaultBreakpoints, NiftyTheme, StyleProvider, ThemeProvider } from '@niftycss/core';

export const useNifty = <
    T extends NiftyTheme<T>,
    B extends NiftyTheme<B> = typeof defaultBreakpoints
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
