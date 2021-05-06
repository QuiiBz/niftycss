// eslint-disable-next-line import/prefer-default-export
export const minify = (css: string[]): string[] => {
    // Only minify in production
    if (process.env.NODE_ENV === 'development') {
        return css;
    }

    return css.map((current) => current.replace(/[\r\n\t\f\v]|(^ *)+/g, ''));
};
