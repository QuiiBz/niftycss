import { Nifty } from '@niftycss/core';

type Theme = {
    black: string,
    white: string,
    accent1: string,
    accent2: string,
};

export const whiteTheme: Theme = {
    black: '#000000',
    white: '#FFFFFF',
    accent1: 'rgba(250, 250, 250)',
    accent2: 'rgba(234, 234, 234)',
};

export const darkTheme: Theme = {
    black: '#FFFFFF',
    white: '#000000',
    accent1: 'rgba(5, 5, 5)',
    accent2: 'rgba(21, 21, 21)',
};

export const nifty = Nifty.create(whiteTheme);
nifty.setInjectMode('textContent');
nifty.setDebug(true);
nifty.setSSR(true);

export const { css, setTheme } = nifty;
