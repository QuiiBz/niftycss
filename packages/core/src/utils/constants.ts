/**
 * The default breakpoints of the `css` method. Can be overrided to use custom
 * breakpoints.
 */
export const DEFAULT_BREAKPOINTS = {
    $sm: '640px',
    $md: '768px',
    $lg: '1024px',
    $xl: '1280px',
    $xxl: '1536px',
};

export const DEV = process.env.NODE_ENV === 'development';

export const CLASS_PREFIX = 'nifty';
