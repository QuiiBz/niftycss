import { Nifty } from '../index';

const theme = {
    bg: '#010101',
    hover: '#FBFBFB',
};

const breakpoints = {
    '@phone': '500px',
};

const nifty = Nifty.create(theme, breakpoints);

const div = nifty.css(['p-2'], t => ({
    backgroundColor: t.bg,
    fontSize: '12px',
    padding: '4px 8px',
    paddingBlock: {
        value: 'test',
        important: true,
    },
    '@phone': {
        transition: '200ms all linear',
    },
    boxSizing: 'border-box',
    display: 'flex',
    color: 'blue'
}));

console.log(div);
console.log(nifty.currentCss);
