import styled, { css, SimpleInterpolation } from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledErrorMessageProps {
    isOutlineVariant: boolean;
}

export const StyledErrorMessage = styled.div<StyledErrorMessageProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    ${({ isOutlineVariant, theme }): SimpleInterpolation =>
        isOutlineVariant &&
        css`
            margin: ${theme.spacing(0.5, 0, 0, 1.5)};
        `}

    color: ${({ theme }): string => theme.colorInvalid};
`;

StyledErrorMessage.defaultProps = {
    theme: themeBasic,
};

export default StyledErrorMessage;
