import React, { createContext, ReactElement, ReactNode } from 'react';
import { Nifty, NiftyTheme, ThemeProvider } from '@niftycss/core';

type Context = {
    nifty: Nifty<any>,
    setTheme: (themeProvider: ThemeProvider<any>) => void,
};

export const NiftyContext = createContext<Context>({ } as Context);

interface Props<T> {

    theme: NiftyTheme<T>;
    children: ReactNode;
}

export const NiftyProvider = function<T>({ theme, children }: Props<T>): ReactElement {

    const nifty = Nifty.create(theme);
    const setTheme = (themeProvider: ThemeProvider<T>) => nifty.setTheme(themeProvider);

    return (
        <NiftyContext.Provider value={{ nifty, setTheme }}>
            { children }
        </NiftyContext.Provider>
    );
}
