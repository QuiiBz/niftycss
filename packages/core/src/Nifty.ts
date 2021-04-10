import {
    Breakpoints,
    ClassProvider,
    NiftyTheme,
    Style,
    StyleProvider,
    ThemeProvider,
} from './types';
import { injectCss, InjectMode } from '@niftycss/dom';
import buildCssRules from './styles/styles';
import findExistingStyle from './styles/existing';
import { DEFAULT_BREAKPOINTS, DEV } from './utils/constants';
import getClasses from './utils/className';

export default class Nifty<T, B> {

    private _theme: NiftyTheme<T>;
    private readonly _breakpoints: Breakpoints<B>;
    private readonly _styles: Style<T, B>[];
    private _css: string[];
    private _injectMode: InjectMode;
    private _debug: boolean;

    private constructor(theme: NiftyTheme<T>, breakpoints: Breakpoints<B>) {

        this._theme = theme;
        this._breakpoints = breakpoints;
        this._styles = [];
        this._css = [];
        this._injectMode = DEV ? 'insertRule' : 'textContent';
        this._debug = false;
    }

    /**
     * Get the classes for the given class and style providers.
     *
     * @param styleProvider - The style provider to generated styles from
     * @param classProvider - The aditionnal classes to use
     * @returns The generated class name along with the classes from the class provider
     */
    css = (styleProvider: StyleProvider<T, B>, ...classProvider: ClassProvider): string => {

        const { exist, foundClasses } = findExistingStyle(styleProvider, classProvider, this._styles, this._theme)

        // Return the found classes if the style already exist
        if(exist)
            return foundClasses;

        const { className, classes } = getClasses(classProvider, styleProvider);

        this._styles.push({ className, classes, styleProvider });
        this.update();

        return classes;
    }

    /**
     * Update the styles by rebuilding them and injecting them in the DOM.
     */
    private update() {

        const css = buildCssRules(this._breakpoints, this._styles, this._theme);
        this._css = css;

        injectCss(css, this._injectMode, this._debug);
    }

    public get theme(): NiftyTheme<T> {

        return this._theme;
    }

    setTheme = (theme: ThemeProvider<T>) => {

        if(typeof theme === 'function')
            this._theme = theme(this._theme);
        else
            this._theme = theme;

        this.update();
    }

    public get styles(): Style<T, B>[] {

        return this._styles;
    }

    public get currentCss(): string[] {

        return this._css;
    }

    public get injectMode(): InjectMode {

        return this._injectMode;
    }

    setInjectMode = (injectMode: InjectMode) => {

        this._injectMode = injectMode;
    }

    setDebug = (debug: boolean) => {

        this._debug = debug;
    }

    /**
     * Create a new Nifty instance with the given theme, and optionnaly custom breakpoints.
     *
     * @param theme - The theme to use
     * @param breakpoints - Optionnal custom breakpoints
     */
    public static create<
        T extends NiftyTheme<T>,
        B extends Breakpoints<B> = typeof DEFAULT_BREAKPOINTS,
        >(theme: T, breakpoints: B = DEFAULT_BREAKPOINTS as unknown as B): Nifty<T, B> {

        return new Nifty<T, B>(theme, breakpoints);
    }
}
