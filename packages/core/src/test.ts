import Cascade from '.';

export const theme = {
    fg: 'blue',
    bg: 'red',
};

const cascade = Cascade.create(theme);

const p = cascade.style(t => ({
    color: t.fg,
}));

console.log(p, cascade.builtCss);
