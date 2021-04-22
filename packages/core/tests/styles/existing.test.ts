import { CSSProperties } from '../../src';
import { DEFAULT_BREAKPOINTS } from '../../src/utils/constants';
import { areStyleEquals } from '../../src/styles/existing';

type Theme = {
    bg: string,
};

type Breakpoints = typeof DEFAULT_BREAKPOINTS;

describe('Are style equals', () => {
    it('should return true is styles are the same', () => {
        const firstStyle: CSSProperties<Theme, Breakpoints> = {
            borderBottom: '1px solid black',
        };

        const secondStyle: CSSProperties<Theme, Breakpoints> = {
            borderBottom: '1px solid black',
        };

        expect(areStyleEquals([firstStyle, secondStyle])).toBe(true);
    });

    it('should return true is styles are the same (spread)', () => {
        const firstStyle: CSSProperties<Theme, Breakpoints> = {
            borderBottom: '1px solid black',
        };

        const secondStyle = { ...firstStyle };

        expect(areStyleEquals([firstStyle, secondStyle])).toBe(true);
    });

    it('should return true is styles are the same (json)', () => {
        const firstStyle: CSSProperties<Theme, Breakpoints> = {
            borderBottom: '1px solid black',
        };

        const secondStyle = JSON.parse(JSON.stringify(firstStyle));

        expect(areStyleEquals([firstStyle, secondStyle])).toBe(true);
    });
});
