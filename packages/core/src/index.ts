import * as CSS from 'csstype';
import Cascade from './Cascade';

export type CSSProperties = CSS.Properties;
export type Properties = CSSProperties & { [P in CSS.SimplePseudos]?: CSSProperties };

export type CascadeTheme<T> = Record<keyof T, string>;

export type Style<T> = {
    className: string,
    styleProvider: StyleProvider<T>,
};

export type StyleProvider<T> = ((theme: CascadeTheme<T>) => Properties) | CSSProperties;

export default Cascade;
