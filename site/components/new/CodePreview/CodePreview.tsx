import {
    box, flexColumn, flexCenter, flexRow, paddingX, paddingY,
} from '@niftycss/css';
import {
    FC, ReactElement, useEffect, useState,
} from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import vs from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';
import TABS from '../../../lib/code';
import { css, styled } from '../../../lib/nifty';

SyntaxHighlighter.registerLanguage('typescript', typescript);

const Container = styled('div', {
    ...flexColumn,
    background: '@codeBg',
    borderRadius: '16px',
    gridArea: '1 / 3 / 2 / 5',
    width: '100%',
    maxWidth: '500px',
    height: '374px',
    position: 'relative',
    marginBottom: '80px',
    $lg: {
        width: '60%',
        justifySelf: 'flex-end',
        alignSelf: 'flex-end',
        marginBottom: 0,
    },
    ':before': {
        ...box`100%`,
        content: '""',
        display: 'block',
        position: 'absolute',
        background: 'rgba(248, 185, 67, 0.2)',
        zIndex: -1,
        transform: 'translateX(-20px) translateY(-20px)',
        borderRadius: '16px',
    },
    ':after': {
        ...box`100%`,
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        background: 'rgba(192, 112, 20, 0.2)',
        zIndex: -1,
        transform: 'translateX(20px) translateY(20px)',
        borderRadius: '16px',
    },
});

const Tabs = styled('div', {
    ...flexRow,
    ...paddingY`6px`,
    ...paddingX`16px`,
    borderBottom: '1px solid @gray500',
});

type TabProps = {
    selected: boolean;
};
css({
    ...flexCenter,
    ...paddingX`1rem`,
    color: '@text',
    ':hover': {
        color: '@accent',
    },
    $sm: {
        fontSize: '@fontSmall',
    },
});
const Tab = styled<TabProps>('button', ({ selected }) => ({
    fontSize: '12px',
    color: selected ? '@primary500!' : '@gray500',
    marginRight: '20px',
    ':hover': {
        color: '@gray400',
    },
    ':focus': {
        outline: 'none',
    },
}), 'transition');

const code = css({
    background: 'transparent!',
    padding: '20px!',
    height: '100%',
    '::-webkit-scrollbar': {
        ...box`10px`,
        background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
        background: '@gray500',
        borderRadius: '16px',
    },
});

const CodePreview: FC = (): ReactElement => {
    const [tab, setTab] = useState(TABS[0].id);
    const selectedTab = TABS.find(({ id }) => id === tab)!;
    const [stopped, setStopped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!stopped) {
                setTab(tab === TABS.length - 1 ? 0 : tab + 1);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [tab, stopped]);

    const onClick = (id: number) => {
        setStopped(true);
        setTab(id);
    };

    return (
        <Container>
            <Tabs>
                {
                    TABS.map(({ id, title }) => (
                        <Tab
                            selected={id === tab}
                            onClick={() => onClick(id)}
                        >
                            { title }
                        </Tab>
                    ))
                }
            </Tabs>
            <SyntaxHighlighter
                className={code}
                language={selectedTab.language}
                style={vs}
            >
                { selectedTab.content }
            </SyntaxHighlighter>
        </Container>
    );
};

export default CodePreview;
