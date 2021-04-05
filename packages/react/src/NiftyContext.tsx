import React, { createContext, ReactElement, ReactNode } from 'react';
import Nifty, { NiftyTheme } from '@niftycss/core';

type Context = {
    nifty: Nifty<any>,
    theme: NiftyTheme<any>,
    setTheme: (theme: NiftyTheme<any>) => void,
};

export const NiftyContext = createContext<Context>({ } as Context);

interface Props<T> {

    theme: NiftyTheme<T>;
    children: ReactNode;
}

export const NiftyProvider = function<T>({ theme, children }: Props<T>): ReactElement {

    const nifty = Nifty.create(theme);
    const setTheme = (theme: NiftyTheme<T>) => nifty.setTheme(theme);

    return (
        <NiftyContext.Provider value={{ nifty, theme: nifty.theme, setTheme }}>
            { children }
        </NiftyContext.Provider>
    );
}
