import styled, { keyframes } from 'styled-components';
import { hexToRgb } from '../../../utils/colorFunctions';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100vh;
    overflow: hidden;
`;

const scale = keyframes`
    0% {
        transform: scale(1);
    }

    50%,
    75% {
        transform: scale(2.5);
    }

    78%,
    100% {
        opacity: 0;
    }
`;

export const LoaderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }) => theme.spacing(1)};
    border-radius: 50%;
    background: #f583a1;
    background-color: ${({ theme, opacity }) => hexToRgb(theme.shades.one, opacity)};
    width: ${({ theme }) => theme.spacing(2.5)};
    height: ${({ theme }) => theme.spacing(2.5)};

    &::before {
        transform: scale(1);
        opacity: 0.7;
        border-radius: 50%;
        background-color: ${({ theme, opacity }) => hexToRgb(theme.shades.one, opacity)};
        width: ${({ theme }) => theme.spacing(2.5)};
        height: ${({ theme }) => theme.spacing(2.5)};
        animation: ${scale} 2.5s infinite;
        animation-delay: ${({ id }) => id * 200}ms;
        content: '';
    }
`;

LoaderItem.propTypes = {
    id: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
    theme: themePropTypes,
};

LoaderItem.defaultProps = {
    theme: themeBasic,
};
