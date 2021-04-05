import { NiftyTheme, Style, StyleProvider } from './index';
import injectCss from './inject/inject';
import buildCssStyles from './styles/styles';

export default class Nifty<T> {

    private _theme: NiftyTheme<T>;
    private readonly _styles: Style<T>[];

    private constructor(
        theme: NiftyTheme<T>,
    ) {

        this._theme = theme;
        this._styles = [];
    }

    public get theme(): NiftyTheme<T> {

        return this._theme!;
    }

    public setTheme(theme: NiftyTheme<T>) {

        this._theme = theme;
        this.update();
    }

    public get styles(): Style<T>[] {

        return this._styles;
    }

    public buildCss(): string {

        return buildCssStyles(this._styles, this._theme);
    }

    public nift(styleProvider: StyleProvider<T>): string {

        const className = `nifty-${this._styles.length.toString()}`;

        this._styles.push({ className, styleProvider });
        this.update();

        return className;
    }

    private update() {

        const css = this.buildCss();

        injectCss(css);
    }

    public static create<T>(
        theme: NiftyTheme<T>,
    ): Nifty<T> {

        return new Nifty<T>(theme);
    }
}
