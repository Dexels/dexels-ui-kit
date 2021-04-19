import styled, { css, SimpleInterpolation } from 'styled-components';
import { Direction } from '../../../types';
import { getBorderColor } from '../../../styles/mixins/getBorderColor';
import themeBasic from '../../../styles/theming/themes/basic';

interface StyledSelectionControlGroupProps {
    direction: Direction;
    hasBorder: boolean;
    hasError: boolean;
    isDisabled: boolean;
    isHorizontal: boolean;
}

export const StyledSelectionControlGroup = styled.div<StyledSelectionControlGroupProps>`
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

    ${({ direction, isHorizontal }): SimpleInterpolation =>
        isHorizontal &&
        css`
            display: flex;
            justify-content: ${direction === Direction.LTR ? 'flex-start' : 'flex-end'};
        `}
`;

StyledSelectionControlGroup.defaultProps = {
    theme: themeBasic,
};

interface SelectionControlWrapperProps {
    isFirstElement: boolean;
    isHorizontal: boolean;
}

export const SelectionControlWrapper = styled.div<SelectionControlWrapperProps>`
    ${({ isFirstElement, isHorizontal, theme }): SimpleInterpolation =>
        isHorizontal &&
        css`
            padding: ${isFirstElement ? 0 : theme.spacing(0, 0, 0, 1.5)};
        `}
`;

SelectionControlWrapper.defaultProps = {
    theme: themeBasic,
};
