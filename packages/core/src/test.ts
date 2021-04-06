import { Nifty } from '.';

const nifty = Nifty.create({
    bg: '#010101',
    hover: '#FBFBFB',
});

const div = nifty.css(["p-2"], t => ({
    backgroundColor: t.bg,
    fontSize: '12px',
    padding: '4px 8px',
    paddingBlock: {
        value: 'test',
        important: true,
    }
}));

console.log(div);
console.log(nifty.styles, nifty.currentCss);
