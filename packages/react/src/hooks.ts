import { useContext, useMemo } from 'react';
import { CascadingContext } from './CascadingContext';
import { CascadeTheme, CSSProperties, Properties } from '@cascading/core/src';

export const style = <T>(
    makeStyle: ((theme: CascadeTheme<T>) => Properties) | CSSProperties,
): string => {

    const { cascade } = useContext(CascadingContext);

    return useMemo(() => cascade.style(makeStyle), []);
}

export const useCascade = <T>(): { theme: CascadeTheme<T>, setTheme: <T>(theme: CascadeTheme<T>) => void } => {

    const { theme, setTheme } = useContext(CascadingContext);

    return {
        theme,
        setTheme,
    };
}
