import { calc, flexCenter } from '@niftycss/core';
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
        ...flexCenter,
        flexDirection: 'column',
        fontSize: calc`10px + ${t.fontSize}`,
        color: t.fg,
        ':hover': {
            backgroundColor: 'red'
        },
        '@sm': {
            marginTop: '10px',
            ':hover': {
                backgroundColor: 'blue'
            }
        }
    }));

    const appLink = css([], t => ({
        color:  t.link,
        ':hover': {
            color: t.fg,
        },
        border: {
            value: '1px solid #000',
            important: true,
        },
    }));

    return {
        app,
        appLogo,
        appHeader,
        appLink,
    };
}

export default useAppStyle;
