import {
    Breakpoints,
    ClassProvider,
    createNifty,
    DEFAULT_BREAKPOINTS,
    HTMLTag,
    NiftyOptions,
    NiftyProps,
    NiftyTheme,
    StyleProvider,
} from '@niftycss/core';
import React, {
    AllHTMLAttributes,
    FC, ReactElement, useEffect, useRef,
} from 'react';

type StyledCSS<
    T extends NiftyTheme,
    B extends Breakpoints,
    P extends NiftyProps> = {
        css?: StyleProvider<T, B, P>
    };

const createStyled = <
    T extends NiftyTheme,
    B extends Breakpoints = typeof DEFAULT_BREAKPOINTS,
>(options: NiftyOptions<T, B>) => {
    const {
        update,
        css,
        cssWithProps,
        getSSR,
        getCSS,
        getTheme,
        setTheme,
    } = createNifty(options);

    const styled = <P extends NiftyProps>(
        tag: HTMLTag,
        styleProvider: StyleProvider<T, B, P>,
        ...classProvider: ClassProvider
    ): FC<P & AllHTMLAttributes<HTMLElement> & StyledCSS<T, B, P>> => (
        props: P & StyledCSS<T, B, P>,
    ): ReactElement => {
        let className = cssWithProps(styleProvider, ...classProvider)(props);
        const rendered = useRef(false);

        const { css: cssProp } = props;

        if (cssProp) {
            className += ` ${cssWithProps(cssProp)(props)}`;
        }

        useEffect(() => {
            if (rendered.current) {
                update(true);
            } else {
                rendered.current = true;
            }
        }, [className]);

        return React.createElement(tag, { className, ...props });
    };

    return {
        update,
        css,
        cssWithProps,
        styled,
        getSSR,
        getCSS,
        getTheme,
        setTheme,
    };
};

export default createStyled;
