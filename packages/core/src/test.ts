import Nifty from '.';

const nifty = Nifty.create({
    bg: '#010101',
    hover: '#FBFBFB',
});

const div = nifty.css(t => ({
    backgroundColor: t.bg,
    fontSize: '12px',
    padding: '4px 8px',
    ':hover': {
        backgroundColor: t.hover,
    },
}));

console.log(nifty.styles, nifty.currentCss);
