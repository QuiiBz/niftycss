import { box, flexColumn, paddingX } from '@niftycss/css';
import { FC, ReactElement } from 'react';
import { styled } from '../../../lib/nifty';
import Button from '../Button/Button';

const Container = styled('div', {
    ...flexColumn,
    ...paddingX`20px`,
    marginBottom: '80px',
    $lg: {
        position: 'relative',
        marginBottom: '0',
    },
    '*svg': {
        ...box`40px`,
        color: '@primary500',
        marginBottom: '20px',
    },
});

const Content = styled('div', {
    maxWidth: '340px',
    $lg: {
        position: 'absolute',
        bottom: '80px',
    },
});

const Title = styled('h2', {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '@gray600',
    marginBottom: '10px',
});

const Description = styled('p', {
    fontSize: '16px',
    color: '@gray500',
    marginBottom: '20px',
    $lg: {
        height: '93px',
    },
});

type Props = {
    area: string;
    title: string;
    description: string;
    link: string;
    icon: ReactElement;
};

const Feature: FC<Props> = ({
    area, title, description, link, icon,
}: Props): ReactElement => (
    <Container style={{ gridArea: area }}>
        <Content>
            { icon }
            <Title>{ title }</Title>
            <Description>{ description }</Description>
            <Button href={link}>Learn more</Button>
        </Content>
    </Container>
);

export default Feature;
