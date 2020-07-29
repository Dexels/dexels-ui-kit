import styled, { css, keyframes, SimpleInterpolation } from 'styled-components';
import { ProgressBarProps } from './types';

const loadingAnimation = keyframes`
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
`;

export const StyledProgressBar = styled.div<ProgressBarProps>`
    ${({ theme }): SimpleInterpolation => `
        position: relative;
        margin: 0 ${theme.spacing(5.5)} ${theme.spacing(2)};
        border-radius: ${theme.spacing(1)};
        height: ${theme.spacing(2)};
        background-color: ${theme.shades.eight};
        overflow: hidden;

        &:before {
            position: absolute;
            content: '';
            width: 0%;
            top: 0;
            bottom: 0;
            left: 0;
            background-color: ${theme.colorPrimary};
        }
    `}

    &::before {
        ${({ isIndeterminate }): SimpleInterpolation =>
            isIndeterminate &&
            css`
                animation: ${loadingAnimation} 1s infinite ease-in-out;
            `}
    }
`;

export default StyledProgressBar;
