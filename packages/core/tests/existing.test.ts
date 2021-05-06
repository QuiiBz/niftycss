import {
    ClassProvider, CSSProperties, StyleProvider, Style,
} from '../src';
import { DEFAULT_BREAKPOINTS } from '../src/utils/constants';
import findExistingStyle, { areStyleEquals } from '../src/styles/existing';

type Theme = {
    bg: string,
};

type Breakpoints = typeof DEFAULT_BREAKPOINTS;

type Props = {};

const props = {};

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

describe('Find existing styles', () => {
    it('should return the found existing style without classes', () => {
        const className = 'nifty-7v4u7f';

        const styleProvider: StyleProvider<Theme, Breakpoints, Props> = {
            background: 'red',
        };
        const classProvider: ClassProvider = [];
        const styles: Style<Theme, Breakpoints>[] = [{
            className,
            classes: className,
            cssProperties: styleProvider,
        }];

        const {
            exist,
            foundClasses,
        } = findExistingStyle(styleProvider, classProvider, styles, props);

        expect(exist).toBe(true);
        expect(foundClasses).toBe(className);
    });

    it('should return the found existing style with classes', () => {
        const className = 'nifty-7v4u7f';
        const baseClasses = 'flex rounded-full';
        const classes = `${baseClasses} ${className}`;

        const styleProvider: StyleProvider<Theme, Breakpoints, Props> = {
            background: 'red',
        };
        const classProvider: ClassProvider = [baseClasses];
        const styles: Style<Theme, Breakpoints>[] = [{
            className,
            classes,
            cssProperties: styleProvider,
        }];

        const {
            exist,
            foundClasses,
        } = findExistingStyle(styleProvider, classProvider, styles, props);

        expect(exist).toBe(true);
        expect(foundClasses).toBe(classes);
    });
});
