import { Nifty } from '../index';

const theme = {
    bg: '#010101',
    hover: '#FBFBFB',
};

const breakpoints = {
    '@phone': '500px',
};

const { css, styles, currentCss } = Nifty.create(theme, breakpoints);

const div = css(['p-2'], t => ({
    backgroundColor: t.bg,
    fontSize: '12px',
    padding: '4px 8px',
    paddingBlock: {
        value: 'test',
        important: true,
    },
    '@phone': {

    }
}));

console.log(div);
console.log(styles, currentCss);
