import { createPlugin } from '@niftycss/plugins';

const important = createPlugin({
    hookCssValue: (value) => `${value.replace(/!$/, '')}${value.endsWith('!') ? ' !important' : ''}`,
});

export default important;
