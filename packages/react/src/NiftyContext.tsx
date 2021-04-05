import React, { createContext, ReactElement, ReactNode } from 'react';
import Style, { NiftyTheme } from '@niftycss/core';

type Context = {
    style: Style<any>,
    theme: NiftyTheme<any>,
    setTheme: (theme: NiftyTheme<any>) => void,
};

export const NiftyContext = createContext<Context>({ } as Context);

interface Props<T> {

    theme: NiftyTheme<T>;
    children: ReactNode;
}

const CascadingProvider = function<T>({ theme, children }: Props<T>): ReactElement {

    const style = Style.create(theme);
    const setTheme = (theme: NiftyTheme<T>) => style.setTheme(theme);

    return (
        <NiftyContext.Provider value={{ style: style, theme: style.theme, setTheme }}>
            { children }
        </NiftyContext.Provider>
    );
}

export default CascadingProvider;
