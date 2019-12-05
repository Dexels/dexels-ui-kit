import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
    0% {
        transform: scale(0.90);
    }

    5% {
        transform: scale(1.15);
    }

    39% {
        transform: scale(0.80);
    }

    45% {
        transform: scale(1.05);
    }

    60% {
        transform: scale(0.90);
    }

    100% {
        transform: scale(0.85);
    }
`;

export const StyledLoader = styled.div`
    position: relative;
    transform: rotate(45deg);
    transform-origin: ${({ theme }) => theme.spacing(2.5, 2.5)};
    width: ${({ theme }) => theme.spacing(5)};
    height: ${({ theme }) => theme.spacing(5)};

    div {
        position: absolute;
        top: ${({ theme }) => theme.spacing(2)};
        left: ${({ theme }) => theme.spacing(2)};
        border-radius: ${({ theme }) => theme.spacing(0, 0, 0.375)};
        background-color: currentColor;
        width: ${({ theme }) => theme.spacing(2)};
        height: ${({ theme }) => theme.spacing(2)};
        animation: ${loaderAnimation} 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

        &::after,
        &::before {
            display: block;
            position: absolute;
            background-color: currentColor;
            width: ${({ theme }) => theme.spacing(2)};
            height: ${({ theme }) => theme.spacing(2)};
            content: '';
        }

        &::before {
            left: -${({ theme }) => theme.spacing(1.5)};
            border-radius: 50% 0 0 50%;
        }

        &::after {
            top: -${({ theme }) => theme.spacing(1.5)};
            border-radius: 50% 50% 0 0;
        }
    }
`;

export default StyledLoader;
