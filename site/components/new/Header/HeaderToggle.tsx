import {
    FC, ReactElement, MouseEvent,
} from 'react';
import IconButton from '../Button/IconButton';

type Props = {
    onClick: () => void;
};

const HeaderToggle: FC<Props> = ({ onClick }: Props): ReactElement => {
    const toggleHeader = (event: MouseEvent) => {
        event.preventDefault();
        onClick();
    };

    return (
        <IconButton
            stroke
            responsiveOnly
            type="button"
            onClick={toggleHeader}
            aria-label="Toggle Header"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </IconButton>
    );
};

export default HeaderToggle;
