import {
    box, flexCenter, flexRow, paddingX, paddingY,
} from '@niftycss/css';
import {
    FC, ReactElement, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { css, styled } from '../../lib/nifty';

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

const hideResponsive = css({
    display: 'none',
    $md: {
        display: 'initial',
    },
});

const Keys = styled('span', {
    ...paddingX`4px`,
    color: '@gray500',
    border: '1px solid @gray400',
    borderRadius: '4px',
    fontSize: '14px',
    marginLeft: '10px',
}, hideResponsive, 'transition');

const Container = styled('div', {
    ...flexCenter,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9,
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
});

const Input = styled('input', {
    ...paddingX`26px`,
    ...paddingY`12px`,
    color: '@gray600',
    fontSize: '18px',
    boxShadow: '0 0 0 1px @gray400',
    borderRadius: '12px',
    ':focus': {
        outline: 'none',
    },
});

const HeaderSearch: FC = (): ReactElement => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const keydown = (event: KeyboardEvent) => {
            if (event.keyCode === 27) {
                setOpen(false);
            }
        };

        if (window.docsearch && isOpen) {
            window.docsearch({
                apiKey: 'e87296aaac8a39bcce980a3481d6c225',
                indexName: 'niftycss',
                inputSelector: '#docsearch',
            });

            document.getElementById('#docsearch')?.focus();
            window.addEventListener('keydown', keydown);
        }

        return () => window.removeEventListener('keydown', keydown);
    }, [isOpen]);

    return (
        <>
            <Search onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className={hideResponsive}>Search anything...</span>
                <Keys>⌘K</Keys>
            </Search>
            {
                isOpen && createPortal(
                    <Container>
                        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                        <Input
                            autoFocus
                            id="docsearch"
                            type="text"
                            placeholder="Search anything"
                        />
                    </Container>,
                    document.body,
                )
            }
        </>
    );
};

export default HeaderSearch;
