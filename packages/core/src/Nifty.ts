import { ClassProvider, NiftyTheme, Style, StyleProvider, ThemeProvider } from './index';
import injectCss from './inject/inject';
import buildCssStyles from './styles/styles';

export default class Nifty<T> {

    private _theme: NiftyTheme<T>;
    private readonly _styles: Style<T>[];
    private _css: string;

    private constructor(theme: NiftyTheme<T>) {

        this._theme = theme;
        this._styles = [];
        this._css = '';
    }

    public css(classProvider: ClassProvider, styleProvider?: StyleProvider<T>): string {

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

        const css = buildCssStyles(this._styles, this._theme);
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

    public get styles(): Style<T>[] {

        return this._styles;
    }

    public get currentCss(): string {

        return this._css;
    }

    public static create<T>(theme: NiftyTheme<T>): Nifty<T> {

        return new Nifty<T>(theme);
    }
}
