import styled, { keyframes } from 'styled-components';
import { hexToRgb } from '../../../utils/functions/colorFunctions';
import { themeBasic } from '../../../styles/theming/themes/basic';

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

interface LoaderCirclesProps {
    opacity: number;
    order: number;
}

export const LoaderCircles = styled.div<LoaderCirclesProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }): string => theme.spacing(1)};
    border-radius: 50%;
    background-color: ${({ theme, opacity }): string => hexToRgb(theme.shades.one, opacity)};
    width: ${({ theme }): string => theme.spacing(2.5)};
    height: ${({ theme }): string => theme.spacing(2.5)};

    &::before {
        transform: scale(1);
        opacity: 0.7;
        border-radius: 50%;
        background-color: ${({ theme, opacity }): string => hexToRgb(theme.shades.one, opacity)};
        width: ${({ theme }): string => theme.spacing(2.5)};
        height: ${({ theme }): string => theme.spacing(2.5)};
        animation: ${scale} 2.5s infinite;
        animation-delay: ${({ order }): number => order * 200}ms;
        content: '';
    }
`;

LoaderCircles.defaultProps = {
    theme: themeBasic,
};

export default LoaderCircles;
