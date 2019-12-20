import styled, { keyframes } from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

const loaderAnimation = keyframes`
    0% {
        transform: scale(1, 1);
        opacity: .4;
    }

    50% {
        transform: scale(1.2, 1.2);
        opacity: 1;
    }

    100% {
        transform: scale(1, 1);
        opacity: .4;
    }
`;

export const StyledLoader = styled.div`
    text-align: center;

    div {
        display: inline-block;
        margin: ${({ theme }) => theme.spacing(0.5)};
        border-radius: 50%;
        background-color: ${({ theme }) => theme.background.secondary};
        width: ${({ theme }) => theme.spacing(1.5)};
        height: ${({ theme }) => theme.spacing(1.5)};
        animation: ${loaderAnimation} 1.5s infinite ease-in-out;

        &:nth-child(2) {
            animation-delay: .5s;
        }

        &:nth-child(3) {
            animation-delay: 1s;
        }
    }
`;

StyledLoader.propTypes = {
    theme: themePropTypes,
};

StyledLoader.defaultProps = {
    theme: themeBasic,
};

export default StyledLoader;
