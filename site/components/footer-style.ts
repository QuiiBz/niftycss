import { css } from '../lib/nifty';

const useFooterStyle = () => {
    const footer = css((t) => ({
        backgroundColor: t.accent1,
        borderColor: t.accent2,
    }), 'border-t');

    const title = css((t) => ({
        color: t.black,
    }), 'text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2');

    const button = css((t) => ({
        color: t.white,
        backgroundColor: t.black,
        ':hover': {
            color: t.black,
            backgroundColor: t.white,
        },
    }), 'mx-3 border border-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0');

    const simpleButton = css((t) => ({
        color: t.black,
    }), 'mx-3 font-bold hover:underline');

    return {
        footer,
        title,
        button,
        simpleButton,
    };
};

export default useFooterStyle;
