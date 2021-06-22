import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import { getSSR } from '../lib/nifty';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

    static async getInitialProps(ctx: DocumentContext) {
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {/* eslint-disable-next-line react/no-danger */}
                    <style
                        id="nifty-styles"
                        dangerouslySetInnerHTML={{ __html: getSSR() }}
                    />
                </>
            ),
        };
    }
}
