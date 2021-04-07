import { CSSProperties } from '../../types';

export const paddingX = (value: TemplateStringsArray): CSSProperties<unknown> => {

    const padding = value.raw.join('');

    return {
        paddingLeft: padding,
        paddingRight: padding,
    };
}

export const paddingY = (value: TemplateStringsArray): CSSProperties<unknown> => {

    const padding = value.raw.join('');

    return {
        paddingTop: padding,
        paddingBottom: padding,
    };
}
