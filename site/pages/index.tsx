import { FC, ReactElement } from 'react';
import fs from 'fs';
import Layout from '../components/Layout';
import Grid from '../components/new/Grid/Grid';
import Brand from '../components/new/Brand/Brand';
import Feature from '../components/new/Feature/Feature';
import CodePreview from '../components/new/CodePreview/CodePreview';
import FEATURES from '../lib/features';

type Props = {
    types: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Index: FC<Props> = ({ types }: Props): ReactElement => (
    <Layout>
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
        props: { types },
    };
}

export default Index;
