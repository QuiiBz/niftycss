import { prefix } from 'inline-style-prefixer';
import { createPlugin } from '@niftycss/plugins';

const autoprefixer = createPlugin({
    hookStyles: (styles) => styles.map((style) => ({
        ...style,
        cssProperties: prefix(style.cssProperties),
    })),
});

export default autoprefixer;
