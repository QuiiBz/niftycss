import { useNifty } from '@niftycss/react';
import { Theme } from '../theme';

const useAppStyle = () => {

    const { css } = useNifty<Theme>();

    const app = css([], {
        textAlign: 'center',
    });

    const appLogo = css([], {
        height: '40vmin',
        pointerEvents: 'none',
    });

    const appHeader = css([], t => ({
        backgroundColor: t.bg,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: t.fg,
    }));

    const appLink = css([], t => ({
        color:  t.link,
    }));

    return {
        app,
        appLogo,
        appHeader,
        appLink,
    };
}

export default useAppStyle;
