import { FC, ReactElement } from 'react';
import Layout from '../components/layout';
import homeStyle from '../components/styles/home';
import Code from '../components/code/code';
import CODE_SNIPPETS from '../lib/code';
import Button from '../components/button/button';

const Index: FC = (): ReactElement => (
    <Layout>
        <div className={homeStyle.main}>
            <div className={homeStyle.container}>
                <Button
                    title="Documentation"
                    icon={(
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    )}
                    href="/docs/welcome"
                />
                <Button
                    title="GitHub"
                    icon={(
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                        </svg>
                    )}
                    href="https://github.com/QuiiBz/niftycss"
                />
            </div>
            <div className={homeStyle.container}>
                {
                    CODE_SNIPPETS.map(({ title, language, code }) => (
                        <Code
                            key={title}
                            title={title}
                            language={language}
                            code={code}
                        />
                    ))
                }
            </div>
        </div>
    </Layout>
);

export default Index;
