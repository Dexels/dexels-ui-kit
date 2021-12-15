import styled, { css, SimpleInterpolation } from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledRequiredIndicatorProps {
    isDisabled: boolean;
}

export const StyledRequiredIndicator = styled.span<StyledRequiredIndicatorProps>`
    color: ${({ theme }): string => theme.colorAlert};

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}
`;

StyledRequiredIndicator.defaultProps = {
    theme: themeBasic,
};

export default StyledRequiredIndicator;
