import Benchmark from 'benchmark';
import React from 'react';
import styledComponentStyled from 'styled-components';
import emotionStyled from '@emotion/styled';
import xstyledStyled from '@xstyled/styled-components';
import { createStyled } from '@niftycss/react';

const { styled: niftyStyled } = createStyled({});

const suite = new Benchmark.Suite('emotion/css');

const runStyledComponents = () => {

    const Component = styledComponentStyled.default.div({
        fontSize: '12px',
        color: 'gray',
        border: '1px solid gray',
        borderRadius: '50%',
        background: 'orange',
        '&:hover': {
            background: 'red',
        },
    });

    React.createElement(Component, {});
};

const runEmotion = () => {

    const Component = emotionStyled.default.div({
        fontSize: '12px',
        color: 'gray',
        border: '1px solid gray',
        borderRadius: '50%',
        background: 'orange',
        '&:hover': {
            background: 'red',
        },
    });

    React.createElement(Component, {});
};

const runXstyled = () => {

    const Component = xstyledStyled.default.div({
        fontSize: '12px',
        color: 'gray',
        border: '1px solid gray',
        borderRadius: '50%',
        background: 'orange',
        '&:hover': {
            background: 'red',
        },
    });

    React.createElement(Component, {});
};

const runNifty = () => {

    const Component = niftyStyled('div', {
        fontSize: '12px',
        color: 'gray',
        border: '1px solid gray',
        borderRadius: '50%',
        background: 'orange',
        ':hover': {
            background: 'red',
        },
    });

    React.createElement(Component, {});
};

suite
    .add('styled-components', runStyledComponents)
    .add('emotion', runEmotion)
    .add('xtyled', runXstyled)
    .add('niftycss', runNifty)
    .on('cycle', (event) => {
        console.log(String(event.target))
    })
    .on('complete', function onComplete() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run({ async: true });
