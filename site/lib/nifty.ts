// import { createNifty } from '@niftycss/core';
import autoprefixer from '@niftycss/plugin-autoprefixer';
import important from '@niftycss/plugin-important';
import { createStyled } from '@niftycss/react';

type Theme = {
    bg: string;
    primary700: string;
    primary600: string;
    primary500: string;
    gray600: string;
    gray500: string;
    gray400: string;
    white: string;
    codeBg: string;
    codeText: string;
};

export const whiteTheme: Theme = {
    bg: '#FFFFFF',
    primary700: '#92550F',
    primary600: '#C07014',
    primary500: '#F8B943',
    gray600: '#222222',
    gray500: '#939393',
    gray400: '#E2E2E2',
    white: '#FFFFFF',
    codeBg: '#111827',
    codeText: '#DCDCDC',
};

export const darkTheme: Theme = {
    bg: '#000000',
    primary700: '#F8B943',
    primary600: '#C07014',
    primary500: '#92550F',
    gray600: '#E2E2E2',
    gray500: '#939393',
    gray400: '#222222',
    white: '#000000',
    codeBg: '#111827',
    codeText: '#DCDCDC',
};

const darkMode = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const {
    css, styled, setTheme, getTheme, getSSR, getCSS,
} = createStyled({
    theme: darkMode ? whiteTheme : whiteTheme,
    debug: true,
    plugins: [autoprefixer, important],
    ssr: false,
});
