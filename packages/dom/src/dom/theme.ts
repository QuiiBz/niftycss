import { NiftyTheme } from '@niftycss/core';

export const getThemeVar = (key: string): string => `--nifty-${key}`;
export const getFullThemeVar = (key: string): string => `var(${getThemeVar(key)})`;

export const updateTheme = (theme: NiftyTheme) => {
    if (typeof window === 'undefined') return;

    const rootNode = document.documentElement;

    if (rootNode) {
        Object.entries(theme).forEach(([key, value]) => {
            const themeVar = getThemeVar(key);

            rootNode.style.setProperty(themeVar, value);
        });
    }
};
