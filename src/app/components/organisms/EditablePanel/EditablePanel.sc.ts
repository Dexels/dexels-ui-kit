import styled, { css, SimpleInterpolation } from 'styled-components';

export interface ButtonWrapperProps {
    hasMargin: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    ${({ hasMargin }): SimpleInterpolation =>
        hasMargin &&
        css`
            button:nth-of-type(1) {
                margin: 0 8px 0 0;
            }
        `}
`;

export default ButtonWrapper;
