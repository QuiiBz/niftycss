import { Nifty } from '@niftycss/core';

type Theme = {
    bg: string,
    border: string,
    accent: string,
    accentDark: string,
    textLight: string,
    textDark: string,
    code: string,
};

export const whiteTheme: Theme = {
    bg: '#FFFFFF',
    border: '#E5E7EB',
    accent: '#06B6D4',
    accentDark: '#0891B2',
    textLight: '#6B7280',
    textDark: '#111827',
    code: '#DCDCDC',
};

export const darkTheme: Theme = {
    bg: '#000000',
    border: '#374151',
    accent: '#06B6D4',
    accentDark: '#0891B2',
    textLight: '#9CA3AF',
    textDark: '#F9FAFB',
    code: '#DCDCDC',
};

export const nifty = Nifty.create(whiteTheme);
nifty.setInjectMode('textContent');
nifty.setDebug(true);
nifty.setSSR(true);

export const { css, setTheme, getTheme } = nifty;
