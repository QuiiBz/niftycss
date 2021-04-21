import { CSSProperties } from '../../src';
import getClasses, { getClassName } from '../../src/utils/className';
import { DEFAULT_BREAKPOINTS, CLASS_PREFIX } from '../../src/utils/constants';

type Theme = {
    bg: string,
};

type Breakpoints = typeof DEFAULT_BREAKPOINTS;

const styles: CSSProperties<Theme, Breakpoints> = {
    background: 'red',
};

describe('Get class name', () => {
    it('should hash styles', () => {
        const hash = 'hash';
        const spy = jest.spyOn(Number.prototype, 'toString').mockImplementationOnce(() => hash);

        const className = getClassName<Theme, Breakpoints>(styles);
        const expected = `${CLASS_PREFIX}-${hash}`;

        expect(spy).toHaveBeenCalled();
        expect(className).toEqual(expected);

        spy.mockRestore();
    });

    it('should give the same hash', () => {
        const className = getClassName<Theme, Breakpoints>(styles);
        const expected = getClassName<Theme, Breakpoints>(styles);

        expect(className).toEqual(expected);
    });
});

describe('Get classes', () => {
    it('should return a single class name', () => {
        const hash = 'hash';
        const spy = jest.spyOn(Number.prototype, 'toString').mockImplementationOnce(() => hash);

        const classes = getClasses<Theme, Breakpoints>([], styles);
        const className = `${CLASS_PREFIX}-${hash}`;
        const expected = {
            className,
            classes: className,
        };

        expect(classes).toEqual(expected);

        spy.mockRestore();
    });

    it('should return concatenated classes', () => {
        const hash = 'hash';
        const initialClasses = 'rounded border-b';
        const spy = jest.spyOn(Number.prototype, 'toString').mockImplementationOnce(() => hash);

        const classes = getClasses<Theme, Breakpoints>(initialClasses.split(' '), styles);
        const className = `${CLASS_PREFIX}-${hash}`;
        const expected = {
            className,
            classes: `${initialClasses} ${className}`,
        };

        expect(classes).toEqual(expected);

        spy.mockRestore();
    });
});
