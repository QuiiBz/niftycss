import { CSSProperties } from '../index';

export const flexCenter: CSSProperties<unknown> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const calc = (values: TemplateStringsArray, ...props: string[]): string => {

    let str = '';

    values.forEach((string, i) => {

        str += string + (props[i] || '');
    });

    return `calc(${str})`;
}
