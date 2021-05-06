import { getFullThemeVar } from '@niftycss/dom';
import { triggerHook } from '@niftycss/plugins';
import {
    NiftyTheme,
    CSSProperties,
    Directive,
    Style,
    CSSValues,
    DirectiveName,
    Breakpoints,
    NiftyConfig,
    NiftyProps,
    StyleProvider,
} from '../types';

export const getStyleFromProvider = <
    T extends NiftyTheme,
    B extends Breakpoints,
    P extends NiftyProps,
>(styleProvider: StyleProvider<T, B, P>, props: P): CSSProperties<T, B> => {
    if (typeof styleProvider === 'function') {
        return styleProvider(props);
    }

    return styleProvider;
};

const pascalToKebabCase = (property: string): string => property
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();

const isCustomProperty = (propertyName: string): boolean => propertyName.startsWith(':')
    || propertyName.startsWith('$')
    || propertyName.startsWith('.')
    || propertyName.startsWith('#')
    || propertyName.startsWith('*')
    || propertyName.startsWith('[')
    || propertyName.startsWith('+')
    || propertyName.startsWith('>');

const buildCssProperties = <T extends NiftyTheme, B extends Breakpoints>(
    properties: CSSProperties<T, B>,
    config: NiftyConfig<T, B>,
): {
    cssProperties: string,
    directives: Directive<T, B>[],
} => {
    let cssProperties = '';
    const directives: Directive<T, B>[] = [];

    Object.entries(properties).forEach(([propertyKey, propertyValue]) => {
        if (isCustomProperty(propertyKey)) {
            const name = propertyKey as DirectiveName;
            const property = propertyValue as CSSProperties<T, B>;

            directives.push({
                name,
                properties: property,
            });
        } else {
            const kebabProperty = pascalToKebabCase(propertyKey);
            const cssValues: CSSValues[] = [];

            if (Array.isArray(propertyValue)) {
                (propertyValue as Array<CSSValues>).forEach((value) => {
                    cssValues.push(value);
                });
            } else {
                cssValues.push(propertyValue as CSSValues);
            }

            cssValues.forEach((value) => {
                const stringValue = String(value);
                const hookedValue = triggerHook(config.plugins, 'hookCssValue', stringValue);

                cssProperties += `  ${kebabProperty}: ${hookedValue};\n`;
            });
        }
    });

    return {
        cssProperties,
        directives,
    };
};

const buildRules = <T extends NiftyTheme, B extends Breakpoints>(
    config: NiftyConfig<T, B>,
    className: string,
    properties: CSSProperties<T, B>,
    context?: DirectiveName,
): string[] => {
    const css: string[] = [];
    const { theme, breakpoints } = config;
    // eslint-disable-next-line prefer-const
    let { cssProperties, directives } = buildCssProperties(properties, config);

    Object
        .keys(theme)
        .sort((a, b) => (a.length > b.length ? -1 : 1))
        .forEach((themeKey) => {
            const themeKeyRegex = `\\@${themeKey}`;
            const regex = new RegExp(themeKeyRegex, 'g');

            cssProperties = cssProperties.replace(regex, getFullThemeVar(themeKey));
        });

    // TODO need refactor
    if (context) {
        if (context.startsWith('$')) {
            const customProperties = context.split(' ');
            const customProperty = customProperties[0];

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const width = breakpoints[customProperty];

            if (!width) console.warn(`No breakpoint found for ${customProperty}. Available breakpoints: ${Object.keys(breakpoints)}`);

            const cssProperty = customProperties.splice(1).join('');

            css.push(`@media (min-width: ${width}) {\n  .${className}${cssProperty} {\n  ${cssProperties}  }\n}\n`);
        } else {
            // Don't add a space to pseudo-classes/elements and attributes
            const hasSpace = !context.startsWith(':') && !context.startsWith('[');
            const cleanContext = context.replace('*', '');

            css.push(`.${className}${hasSpace ? ' ' : ''}${cleanContext.replace('*', '')} {\n${cssProperties}}\n`);
        }
    } else {
        css.push(`.${className} {\n${cssProperties}}\n`);
    }

    directives.forEach(({ name, properties: theProperties }) => {
        const nextContext = context ? `${context}${name.startsWith(':') ? name : ` ${name}`}` : name;
        const customPropertiesCss = buildRules(config, className, theProperties, nextContext);

        css.push(...customPropertiesCss);
    });

    return css;
};

const buildCssRules = <T extends NiftyTheme, B extends Breakpoints>(
    styles: Style<T, B>[],
    config: NiftyConfig<T, B>,
): string[] => {
    const css: string[] = [];
    const hookedStyles = triggerHook(config.plugins, 'hookStyles', styles);

    hookedStyles.forEach(({ className, cssProperties }) => {
        css.push(...buildRules(config, className, cssProperties));
    });

    return css;
};

export default buildCssRules;
