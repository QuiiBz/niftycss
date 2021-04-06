import React, { createContext, ReactElement, ReactNode } from 'react';
import { Nifty, NiftyTheme, ThemeProvider } from '@niftycss/core';

type Context = {
    nifty: Nifty<any, any>,
    setTheme: (themeProvider: ThemeProvider<any>) => void,
};

export const NiftyContext = createContext<Context>({ } as Context);

interface Props<T, B> {

    theme: NiftyTheme<T>;
    breakpoints?: NiftyTheme<B>,
    children: ReactNode;
}

export const NiftyProvider = function<T, B>({ theme, breakpoints, children }: Props<T, B>): ReactElement {

    const nifty = Nifty.create(theme, breakpoints);
    const setTheme = (themeProvider: ThemeProvider<T>) => nifty.setTheme(themeProvider);

    return (
        <NiftyContext.Provider value={{ nifty, setTheme }}>
            { children }
        </NiftyContext.Provider>
    );
}
