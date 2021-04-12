import { FC, ReactElement } from 'react';
import Layout from '../components/layout';
import homeStyle from '../components/styles/home';

const Index: FC = (): ReactElement => {
    const code = `const style = css(t => ({
    ...flexCenter,
    ...paddingX\`1rem\`,
    color: t.text,
    ':hover': {
        color: t.accent,
    },
    $sm: {
        fontSize: t.fontSmall,
    },
})`;

    const result = `.nifty-29byuu {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #010101;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
.nifty-29byuu:hover {
  color: blue;
}
@media (min-width: 640px) {
  .nifty-29byuu {
    font-size: 0.8rem;
  }
}`;

    /* const nifty = Nifty.create({
        text: '#010101',
        accent: 'blue',
        fontSmall: '0.8rem',
    });

    const style = nifty.css((t) => ({
        ...flexCenter,
        ...paddingX`1rem`,
        color: t.text,
        ':hover': {
            color: t.accent,
        },
        $sm: {
            fontSize: t.fontSmall,
        },
    })); */

    return (
        <Layout>
            <div className={homeStyle}>
                <pre style={{ marginRight: '4rem' }}>
                    <code>
                        { code }
                    </code>
                </pre>
                <pre style={{ marginLeft: '4rem' }}>
                    <code>
                        { result }
                    </code>
                </pre>
            </div>
        </Layout>
    );
};

export default Index;
