import { FC, ReactElement } from 'react';
import fs from 'fs';
import Layout from '../components/Layout';
import Grid from '../components/Grid/Grid';
import Brand from '../components/Brand/Brand';
import Feature from '../components/Feature/Feature';
import CodePreview from '../components/CodePreview/CodePreview';
import FEATURES from '../lib/features';
import DocType from '../types/docs';
import { getAllDocs } from '../lib/api';

type Props = {
    docs: DocType[];
    types: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Index: FC<Props> = ({ docs, types }: Props): ReactElement => (
    <Layout docs={docs}>
        <Grid>
            <Brand />
            <CodePreview />
            {
                FEATURES.map(({
                    area, title, description, link, icon,
                }) => (
                    <Feature
                        key={title}
                        area={area}
                        title={title}
                        description={description}
                        link={link}
                        icon={icon}
                    />
                ))
            }
        </Grid>
    </Layout>
);

export async function getStaticProps() {
    const docs = getAllDocs([
        'title',
        'slug',
        'category',
        'order',
        'content',
    ]);

    // Get the content of the types, remove the export and import statements and
    // send them as static props to the page.
    const types = [
        fs.readFileSync('../node_modules/@niftycss/css/dist/declarations/src/css/helpers/methods.d.ts').toString(),
        fs.readFileSync('../node_modules/@niftycss/css/dist/declarations/src/css/layout/flex.d.ts').toString(),
        fs.readFileSync('../node_modules/@niftycss/css/dist/declarations/src/css/layout/grid.d.ts').toString(),
        fs.readFileSync('../node_modules/@niftycss/css/dist/declarations/src/css/spacing/margin.d.ts').toString(),
        fs.readFileSync('../node_modules/@niftycss/css/dist/declarations/src/css/spacing/padding.d.ts').toString(),
        fs.readFileSync('../node_modules/@niftycss/core/dist/declarations/src/nifty.d.ts').toString(),
        fs.readFileSync('../node_modules/@niftycss/plugin-autoprefixer/dist/declarations/src/index.d.ts').toString(),
        fs.readFileSync('../node_modules/@niftycss/core/dist/declarations/src/types.d.ts').toString(),
    ]
        .join('')
        .replace(/export declare/g, 'declare')
        .replace(/(import|export).*/g, '')
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${');

    return {
        props: { docs, types },
    };
}

export default Index;
