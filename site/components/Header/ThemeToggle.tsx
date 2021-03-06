import {
    FC, ReactElement, MouseEvent, useState,
} from 'react';
import {
    darkTheme, setTheme, whiteTheme, getTheme,
} from '../../lib/nifty';
import IconButton from '../Button/IconButton';

const ThemeToggle: FC = (): ReactElement => {
    const [currentTheme, setCurrentTheme] = useState(getTheme());

    const toggleTheme = (event: MouseEvent) => {
        event.preventDefault();

        setTheme((t) => (t === whiteTheme ? darkTheme : whiteTheme));
        setCurrentTheme(getTheme());
    };

    return (
        <IconButton
            stroke={currentTheme === whiteTheme}
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            { currentTheme === whiteTheme ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            )}
        </IconButton>
    );
};

export default ThemeToggle;
