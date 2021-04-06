import { ClassProvider, defaultBreakpoints, NiftyTheme, Style, StyleProvider, ThemeProvider } from './index';
import injectCss from './inject/inject';
import buildCssStyles from './styles/styles';
import findExistingStyle from './styles/existing';

export default class Nifty<T, B> {

    private _theme: NiftyTheme<T>;
    private readonly _breakpoints: NiftyTheme<B>;
    private readonly _styles: Style<T, B>[];
    private _css: string;

    private constructor(theme: NiftyTheme<T>, breakpoints: NiftyTheme<B>) {

        this._theme = theme;
        this._breakpoints = breakpoints;
        this._styles = [];
        this._css = '';
    }

    public css(classProvider: ClassProvider, styleProvider?: StyleProvider<T, B>): string {

        const existingStyle = findExistingStyle(styleProvider, this.styles, this._theme)

        if(styleProvider && existingStyle)
            return existingStyle.className;

        const className = `nifty-${this._styles.length.toString()}`;
        let classes = classProvider.join(' ');

        if(classProvider.length > 0)
            classes += ' ';

        classes += `nifty-${this._styles.length.toString()}`;

        if(styleProvider) {

            this._styles.push({ className, styleProvider });
            this.update();
        }

        return classes;
    }

    private update() {

        const css = buildCssStyles(this._breakpoints, this._styles, this._theme);
        this._css = css;

        injectCss(css);
    }

    public get theme(): NiftyTheme<T> {

        return this._theme!;
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

    public static create<
        T extends NiftyTheme<T>,
        B extends NiftyTheme<B> = typeof defaultBreakpoints,
        >(theme: T, breakpoints: B = defaultBreakpoints as unknown as B): Nifty<T, B> {

        return new Nifty<T, B>(theme, breakpoints);
    }
}
