import { box, flexRow, paddingX } from '@niftycss/css';
import { FC, ReactElement } from 'react';
import { styled } from '../../../lib/nifty';

const Search = styled('div', {
    ...flexRow,
    alignItems: 'center',
    marginLeft: '20px',
    color: '@gray500',
    fontSize: '16px',
    cursor: 'pointer',
    ':hover': {
        color: '@gray600',
        '*span': {
            color: '@primary600',
        },
    },
    '*svg': {
        ...box`16px`,
        marginRight: '10px',
    },
}, 'transition');

const Keys = styled('span', {
    ...paddingX`4px`,
    color: '@gray500',
    border: '1px solid @gray400',
    borderRadius: '4px',
    fontSize: '14px',
    marginLeft: '10px',
}, 'transition');

const HeaderSearch: FC = (): ReactElement => (
    <Search>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search anything...
        <Keys>⌘K</Keys>
    </Search>
);

export default HeaderSearch;
