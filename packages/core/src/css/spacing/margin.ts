import { CSSProperties } from '../../types';

export const marginX = (value: TemplateStringsArray): CSSProperties<unknown> => {

    const padding = value.raw.join('');

    return {
        marginLeft: padding,
        marginRight: padding,
    };
}

export const marginY = (value: TemplateStringsArray): CSSProperties<unknown> => {

    const padding = value.raw.join('');

    return {
        marginTop: padding,
        marginBottom: padding,
    };
}
