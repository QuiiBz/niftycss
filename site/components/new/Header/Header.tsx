import { flexRow, paddingY, paddingX } from '@niftycss/css';
import {
    FC, ReactElement, useEffect, useState,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '../../../lib/nifty';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import Container from '../../styles/Container';
import { HEADER_HEIGHT } from '../../../lib/constants';
import ThemeToggle from './ThemeToggle';
import HeaderToggle from './HeaderToggle';
import Sidebar from '../../sidebar/sidebar';
import DocType from '../../../types/docs';

const HeaderContainer = styled('div', {
    ...flexRow,
    ...paddingY`12px`,
    ...paddingX`20px`,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEADER_HEIGHT,
    borderBottom: '1px solid @gray400',
    position: 'fixed',
    top: 0,
    left: 0,
    backdropFilter: 'blur(8px)',
    zIndex: 9,
    width: '100vw',
    $md: {
        ...paddingX`0`,
        position: 'initial',
        width: 'initial',
    },
});

const Group = styled('div', {
    ...flexRow,
    alignItems: 'center',
});

type Props = {
    docs: DocType[];
};

const Header: FC<Props> = ({ docs }: Props): ReactElement => {
    const [headerToggled, setHeaderToggled] = useState(false);
    const { asPath, events } = useRouter();

    const toggleHeader = () => setHeaderToggled(!headerToggled);

    useEffect(() => {
        const closeHeader = () => setHeaderToggled(false);

        events.on('routeChangeComplete', closeHeader);

        return () => {
            events.off('routeChangeComplete', closeHeader);
        };
    }, []);

    return (
        <Container>
            <HeaderContainer>
                <Group>
                    <Link href="/">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0" transform="scale(0.00625)" />
                                    </pattern>
                                    <image id="image0" width="160" height="160" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </a>
                    </Link>
                    <HeaderToggle onClick={toggleHeader} />
                    <HeaderSearch />
                </Group>
                <Group>
                    <HeaderButton selected={asPath.startsWith('/docs')} href="/docs/getting-started/welcome">
                        Documentation
                    </HeaderButton>
                    <HeaderButton selected={false} href="https://github.com/QuiiBz/niftycss">
                        GitHub
                    </HeaderButton>
                    <ThemeToggle />
                </Group>
            </HeaderContainer>
            <Sidebar docs={docs} responsive toggled={headerToggled} />
        </Container>
    );
};

export default Header;
