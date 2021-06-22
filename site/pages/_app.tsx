/* eslint-disable react/jsx-props-no-spreading */

import { AppProps } from 'next/app';
import Script from 'next/script';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                src="http://134.209.248.49/js/plausible.js"
                data-domain="niftycss.com"
            />
            <Component {...pageProps} />
        </>
    );
}
