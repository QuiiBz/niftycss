import { CascadeTheme, Style, StyleProvider } from './index';
import injectCss from './inject/inject';
import buildCssStyles from './styles/styles';

export default class Cascade<T> {

    private _theme: CascadeTheme<T>;
    private readonly _styles: Style<T>[];

    private constructor(
        theme: CascadeTheme<T>,
    ) {

        this._theme = theme;
        this._styles = [];
    }

    public get theme(): CascadeTheme<T> {

        return this._theme!;
    }

    public setTheme(theme: CascadeTheme<T>) {

        this._theme = theme;
        this.update();
    }

    public style(styleProvider: StyleProvider<T>): string {

        const className = `cascade-${this._styles.length.toString()}`;

        this._styles.push({ className, styleProvider });
        this.update();

        return className;
    }

    private update() {

        const css = buildCssStyles(this._styles, this._theme);

        injectCss(css);
    }

    public static create<T>(
        theme: CascadeTheme<T>,
    ): Cascade<T> {

        return new Cascade<T>(theme);
    }
}
