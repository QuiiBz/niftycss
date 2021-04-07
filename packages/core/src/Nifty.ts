import {
    Breakpoints,
    ClassProvider,
    NiftyTheme,
    Style,
    StyleProvider,
    ThemeProvider,
} from './types';
import injectCss from './inject/inject';
import buildCssStyles from './styles/styles';
import findExistingStyle from './styles/existing';
import { DEFAULT_BREAKPOINTS } from './utils/constants';
import getClasses from './utils/className';

export default class Nifty<T, B> {

    private _theme: NiftyTheme<T>;
    private readonly _breakpoints: Breakpoints<B>;
    private readonly _styles: Style<T, B>[];
    private _css: string;

    private constructor(theme: NiftyTheme<T>, breakpoints: Breakpoints<B>) {

        this._theme = theme;
        this._breakpoints = breakpoints;
        this._styles = [];
        this._css = '';
    }

    /**
     * Get the classes for the given class and style providers.
     *
     * @param classProvider - The aditionnal classes to use
     * @param styleProvider - The style provider to generated styles from
     * @returns The generated class name along with the classes from the class provider
     */
    public css(classProvider: ClassProvider, styleProvider: StyleProvider<T, B>): string {

        const { exist, foundClasses } = findExistingStyle(styleProvider, this._styles, this._theme)

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
     *
     * @private
     */
    private update() {

        const css = buildCssStyles(this._breakpoints, this._styles, this._theme);
        this._css = css;

        injectCss(css);
    }

    public get theme(): NiftyTheme<T> {

        return this._theme;
    }

    public setTheme(theme: ThemeProvider<T>) {

        if(typeof theme === 'function')
            this._theme = theme(this._theme);
        else
            this._theme = theme;

        this.update();
    }

    public get styles(): Style<T, B>[] {

        return this._styles;
    }

    public get currentCss(): string {

        return this._css;
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
