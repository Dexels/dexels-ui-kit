import { Alignment, Direction, SelectionControlGroupVariant } from '../../../types';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { getBorderColor } from '../../../styles/mixins/getBorderColor';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const SelectedControlGroupWrapper = styled.div`
    position: relative;
`;
interface StyledSelectionControlGroupProps {
    alignment: Alignment;
    hasError: boolean;
    isDisabled: boolean;
    isHorizontal: boolean;
    variant: SelectionControlGroupVariant;
}

export const StyledSelectionControlGroup = styled.div<StyledSelectionControlGroupProps>`
    display: flex;
    justify-content: flex-start;

    ${({ hasError, isDisabled, theme, variant }): SimpleInterpolation =>
        variant !== SelectionControlGroupVariant.COMPACT &&
        css`
            /* stylelint-disable indentation */
            border: 1px solid
                ${getBorderColor({
                    hasError,
                    isDisabled: isDisabled || variant === SelectionControlGroupVariant.OUTLINE_CHOICE,
                    theme,
                })};
            /* stylelint-enable indentation */
            border-radius: ${theme.spacing(1)};
            padding: ${theme.spacing(1, 1.5)};
        `}

    ${({ alignment }): SimpleInterpolation =>
        alignment === Alignment.RIGHT &&
        css`
            justify-content: flex-end;
        `}

    ${({ alignment }): SimpleInterpolation =>
        alignment === Alignment.CENTER &&
        css`
            justify-content: center;
        `}
`;

StyledSelectionControlGroup.defaultProps = {
    theme: themeBasic,
};

interface StyledSelectionControlsProps {
    alignment: Alignment;
    direction: Direction;
    isHorizontal: boolean;
}
export const StyledSelectionControls = styled.div<StyledSelectionControlsProps>`
    display: flex;
    align-items: left;

    ${({ isHorizontal }): SimpleInterpolation =>
        !isHorizontal &&
        css`
            flex-direction: column;
        `}

    ${({ direction, isHorizontal }): SimpleInterpolation =>
        isHorizontal &&
        css`
            display: flex;
            justify-content: ${direction === Direction.LTR ? 'flex-start' : 'flex-end'};
        `}

    ${({ alignment, direction, theme }): SimpleInterpolation =>
        alignment === Alignment.LEFT &&
        direction === Direction.RTL &&
        css`
            padding: ${theme.spacing(0, 0, 0, 1.5)};
        `}
`;

StyledSelectionControls.defaultProps = {
    theme: themeBasic,
};

interface SelectionControlWrapperProps {
    isHorizontal: boolean;
    isLastElement: boolean;
}

export const SelectionControlWrapper = styled.div<SelectionControlWrapperProps>`
    ${({ isLastElement, isHorizontal, theme }): SimpleInterpolation =>
        isHorizontal &&
        css`
            padding: ${isLastElement ? 0 : theme.spacing(0, 1.5, 0, 0)};
        `}
`;

SelectionControlWrapper.defaultProps = {
    theme: themeBasic,
};
