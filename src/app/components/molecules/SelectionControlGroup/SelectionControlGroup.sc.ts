import styled, { css, SimpleInterpolation } from 'styled-components';
import { getBorderColor } from '../../../styles/mixins/getBorderColor';
import themeBasic from '../../../styles/theming/themes/basic';

interface StyledSelectionGroupProps {
    hasBorder: boolean;
    hasError: boolean;
    isDisabled: boolean;
    isHorizontal: boolean;
}

export const StyledSelectionGroup = styled.div<StyledSelectionGroupProps>`
    ${({ hasBorder, hasError, isDisabled, theme }): SimpleInterpolation =>
        hasBorder &&
        css`
            border: 1px solid
                ${getBorderColor({
                    hasError,
                    isDisabled,
                    theme,
                })};
            border-radius: ${theme.spacing(1)};
            padding: ${theme.spacing(1, 1.5)};
        `}

    ${({ isHorizontal, theme }): SimpleInterpolation =>
        isHorizontal &&
        css`
            display: flex;

            button:nth-of-type(1) {
                padding: ${theme.spacing(0, 1.5, 0, 0)};
            }
        `}
`;

StyledSelectionGroup.defaultProps = {
    theme: themeBasic,
};
