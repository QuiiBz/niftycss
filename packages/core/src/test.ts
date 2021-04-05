import Nifty from '.';

export const theme = {
    fg: 'blue',
    bg: 'red',
};

const style = Nifty.create(theme);

const p = style.style(t => ({
    color: t.fg,
}));

console.log(p, style.buildCss());
