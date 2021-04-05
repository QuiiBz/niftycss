import Nifty from '.';

export const theme = {
    fg: 'blue',
    bg: 'red',
};

const style = Nifty.create(theme);

const p = style.nift(t => ({
    color: t.fg,
}));

console.log(p, style.buildCss());

const { nift } = Nifty.create({
    bg: '#010101',
    hover: '#FBFBFB',
});

const div = nift(t => ({
    backgroundColor: t.bg,
    fontSize: '12px',
    padding: '4px 8px',
    ':hover': {
        backgroundColor: t.hover,
    },
}));
