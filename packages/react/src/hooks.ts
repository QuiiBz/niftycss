import { useContext } from 'react';
import { CascadingContext } from './CascadingContext';
import { CascadeTheme, StyleProvider } from '@cascading/core';

export const style = <T>(
    makeStyle: StyleProvider<T>,
): string => {

    const { cascade } = useContext(CascadingContext);

    return cascade.style(makeStyle);
}

export const useCascade = <T>(): { theme: CascadeTheme<T>, setTheme: <T>(theme: CascadeTheme<T>) => void } => {

    const { theme, setTheme } = useContext(CascadingContext);

    return {
        theme,
        setTheme,
    };
}
