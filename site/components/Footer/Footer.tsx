import { FC, ReactElement } from 'react';
import { flexCenter, paddingY } from '@niftycss/css';
import { styled } from '../../lib/nifty';
import Container from '../styles/Container';

const Text = styled('p', {
    color: '@gray500',
    textAlign: 'center',
});

const FooterContainer = styled('footer', {
    borderColor: '@gray400',
    ...paddingY`2rem`,
    ...flexCenter,
}, 'border-t');

const Footer: FC = (): ReactElement => (
    <Container>
        <FooterContainer>
            <Text>
                Copyright © 2021 Tom Lienard and contributors - Licensed under MIT
            </Text>
        </FooterContainer>
    </Container>
);

export default Footer;
