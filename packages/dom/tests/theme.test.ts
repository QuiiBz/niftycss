/**
 * @jest-environment jsdom
 */

import { getFullThemeVar, getThemeVar, updateTheme } from '../src/dom/theme';

describe('Get theme var', () => {
    it('should return the theme variable name', () => {
        expect(getThemeVar('bg')).toEqual('--nifty-bg');
        expect(getThemeVar('primary500')).toEqual('--nifty-primary500');
    });

    it('should return the full theme variable name', () => {
        expect(getFullThemeVar('bg')).toEqual('var(--nifty-bg)');
        expect(getFullThemeVar('primary500')).toEqual('var(--nifty-primary500)');
    });
});

describe('Update theme', () => {
    const theme = {
        bg: 'red',
        accent: '#FFFFFF',
    };

    beforeEach(() => {
        Object.keys(theme).forEach((key) => {
            document.documentElement.style.removeProperty(key);
        });
    });

    it('should update the theme', () => {
        updateTheme(theme);

        const { style } = document.documentElement;

        Object.keys(theme).forEach((key) => {
            expect(Object.values(style)).toContain(getThemeVar(key));
        });
    });
});
