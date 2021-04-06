import { useContext } from 'react';
import { NiftyContext } from './NiftyContext';
import { ClassProvider, NiftyTheme, StyleProvider } from '@niftycss/core';

export const useNifty = <T>(): {
    css: (classProvider: ClassProvider,
          styleProvider: StyleProvider<T>,
    ) => string,
    setTheme: <T>(theme: NiftyTheme<T>) => void,
} => {

    const { nifty, setTheme } = useContext(NiftyContext);

    const css = (classProvider: ClassProvider,
                 styleProvider: StyleProvider<T>,
                 ) => nifty.css(classProvider, styleProvider);

    return {
        css,
        setTheme,
    };
}
