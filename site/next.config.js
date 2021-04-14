const withTM = require('next-transpile-modules')([
    '@niftycss/core',
    '@niftycss/dom',
]);

module.exports = withTM({
    future: {
        webpack5: true,
    },
});
