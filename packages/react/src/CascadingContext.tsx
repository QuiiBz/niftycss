import React, { createContext, ReactElement, ReactNode, } from 'react';
import Cascade, { CascadeTheme } from '@cascading/core/src';

type Context = {
    cascade: Cascade<any>,
    theme: CascadeTheme<any>,
    setTheme: (theme: CascadeTheme<any>) => void,
};

export const CascadingContext = createContext<Context>({
    cascade: Cascade.create({ }),
    theme: { },
    setTheme: () => null,
});

interface Props<T> {

    theme: CascadeTheme<T>;
    children: ReactNode;
}

const CascadingProvider = function<T>({ theme, children }: Props<T>): ReactElement {

    const cascade = Cascade.create(theme);
    const setTheme = (theme: CascadeTheme<T>) => cascade.setTheme(theme);

    return (
        <CascadingContext.Provider value={{ cascade, theme: cascade.theme, setTheme }}>
            { children }
        </CascadingContext.Provider>
    );
}

export default CascadingProvider;
