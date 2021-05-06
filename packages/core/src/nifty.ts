import { injectCss, minify, updateTheme } from '@niftycss/dom';
import findExistingStyle from './styles/existing';
import buildCssRules, { getStyleFromProvider } from './styles/styles';
import {
    StyleProvider, ClassProvider, Style, ThemeProvider,
    NiftyOptions, NiftyConfig, NiftyTheme, Breakpoints, NiftyProps, CSSProperties,
} from './types';
import getClasses from './utils/className';
import { DEFAULT_BREAKPOINTS } from './utils/constants';

// Reset this file to prevent duplicating styles while developing.
// See https://nextjs.org/docs/basic-features/fast-refresh#tips
// @refresh reset

const createNifty = <
    T extends NiftyTheme,
    B extends Breakpoints = typeof DEFAULT_BREAKPOINTS,
>(options: NiftyOptions<T, B>) => {
    const config: NiftyConfig<T, B> = {
        theme: {} as T,
        breakpoints: DEFAULT_BREAKPOINTS as unknown as B,
        ssr: false,
        plugins: [],
        debug: false,
        ...options,
    };

    let { theme } = config;
    const {
        ssr,
        debug,
    } = config;

    const styles: Style<T, B>[] = [];
    let cssRules: string[] = [];

    // let timeout: NodeJS.Timeout;

    updateTheme(theme);

    const update = (force: boolean) => {
        const css = buildCssRules(styles, config);
        cssRules = css;

        if (!force && ssr) return;

        // clearTimeout(timeout);

        // timeout = setTimeout(() => injectCss(css, debug));
        injectCss(css, debug);
    };

    const cssWithProps = <P extends NiftyProps>(
        styleProvider: StyleProvider<T, B, P>,
        ...classProvider: ClassProvider
    ) => (props: P): string => {
        const {
            exist,
            foundClasses,
        } = findExistingStyle(styleProvider, classProvider, styles, props);

        // Return the found classes if the style already exist
        if (exist) return foundClasses;

        const {
            className,
            classes,
        } = getClasses(classProvider, styleProvider, props);

        styles.push({
            className,
            classes,
            cssProperties: getStyleFromProvider(styleProvider, props),
        });

        update(false);

        return classes;
    };

    // eslint-disable-next-line max-len
    function css(styleProvider: CSSProperties<T, B>, ...classProvider: ClassProvider): string;
    // eslint-disable-next-line max-len
    function css<P extends NiftyProps>(styleProvider: (props: P) => CSSProperties<T, B>, ...classProvider: ClassProvider): (props: P) => string;
    // eslint-disable-next-line max-len
    function css<P extends NiftyProps>(styleProvider: StyleProvider<T, B, P>, ...classProvider: ClassProvider): string | ((props: P) => string) {
        if (typeof styleProvider === 'function') {
            return cssWithProps(styleProvider, ...classProvider);
        }

        return cssWithProps(styleProvider, ...classProvider)({});
    }

    const getSSR = (): string => {
        if (ssr) {
            return minify(cssRules).join('');
        }

        console.warn('CSS requested but not using SSR.');
        return '';
    };

    const getCSS = (): string[] => cssRules;
    const getTheme = (): T => theme;

    const setTheme = (themeProvider: ThemeProvider<T>) => {
        if (typeof themeProvider === 'function') {
            theme = themeProvider(theme);
        } else {
            theme = themeProvider;
        }

        config.theme = theme;
        updateTheme(theme);
    };

    return {
        update,
        css,
        cssWithProps,
        getSSR,
        getCSS,
        getTheme,
        setTheme,
    };
};

export default createNifty;
