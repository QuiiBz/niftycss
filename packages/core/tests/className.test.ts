import { CSSProperties } from '../src';
import getClasses, { getClassName } from '../src/utils/className';
import { DEFAULT_BREAKPOINTS, CLASS_PREFIX } from '../src/utils/constants';

type Theme = {
    bg: string,
};

type Breakpoints = typeof DEFAULT_BREAKPOINTS;

type Props = {};

const styles: CSSProperties<Theme, Breakpoints> = {
    background: 'red',
};

const props = {};

jest.mock('murmurhash', () => ({
    __esModule: true,
    default: jest.fn(() => 475557099),
}));

describe('Get class name', () => {
    it('should hash styles', () => {
        const hash = '7v4u7f';

        const className = getClassName<Theme, Breakpoints, Props>(styles, props);
        const expected = `${CLASS_PREFIX}-${hash}`;

        expect(className).toEqual(expected);
    });

    it('should give the same hash', () => {
        const className = getClassName<Theme, Breakpoints, Props>(styles, props);
        const expected = getClassName<Theme, Breakpoints, Props>(styles, props);

        expect(className).toEqual(expected);
    });
});

describe('Get classes', () => {
    it('should return a single class name', () => {
        const hash = '7v4u7f';

        const classes = getClasses<Theme, Breakpoints, Props>([], styles, props);
        const className = `${CLASS_PREFIX}-${hash}`;
        const expected = {
            className,
            classes: className,
        };

        expect(classes).toEqual(expected);
    });

    it('should return concatenated classes', () => {
        const hash = '7v4u7f';
        const initialClasses = 'rounded border-b';

        const classes = getClasses<Theme, Breakpoints, Props>(initialClasses.split(' '), styles, props);
        const className = `${CLASS_PREFIX}-${hash}`;
        const expected = {
            className,
            classes: `${initialClasses} ${className}`,
        };

        expect(classes).toEqual(expected);
    });
});
