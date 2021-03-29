import styled, { css, SimpleInterpolation } from 'styled-components';
import { SingleDatePickerVariant } from '../types';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const StyledWrapper = styled.div``;

interface StyledSingleDatePickerProps {
    hasError: boolean;
    isFocused: boolean;
    isTopDatepicker: boolean;
    variant: SingleDatePickerVariant;
}

export const StyledSingleDatePicker = styled.div<StyledSingleDatePickerProps>`
    .SingleDatePickerInput {
        display: block;

        &.SingleDatePickerInput__disabled {
            ${({ theme, variant }): SimpleInterpolation =>
                variant === SingleDatePickerVariant.COMPACT &&
                css`
                    border-color: ${theme.colorDisabled};

                    &::after {
                        background-color: transparent;
                    }
                `}
        }

        ${({ theme, variant }): SimpleInterpolation =>
            variant === SingleDatePickerVariant.COMPACT &&
            css`
                border: 0;
                border-bottom: 1px solid ${theme.colorPrimary};
                border-radius: 0;
                padding: 0;
                height: ${`calc(${theme.spacing(3)} + 1px)`};
            `}

        ${({ hasError, isFocused, theme, variant }): SimpleInterpolation =>
            variant === SingleDatePickerVariant.COMPACT &&
            css`
                overflow: visible;

                &::after {
                    display: block;
                    height: 2px;
                    content: '';

                    ${isFocused &&
                    css`
                        background-color: ${theme.colorSecondary};
                    `}

                    ${hasError &&
                    css`
                        background-color: ${theme.colorInvalid};
                    `}
                }
            `}
    }

    .DateInput_input {
        ${({ theme, variant }): SimpleInterpolation =>
            variant === SingleDatePickerVariant.COMPACT &&
            css`
                height: ${theme.spacing(3)};
            `}
    }

    .SingleDatePicker_picker {
        ${({ isTopDatepicker, variant }): SimpleInterpolation =>
            isTopDatepicker &&
            css`
                margin-bottom: ${variant === SingleDatePickerVariant.COMPACT ? '16px' : '8px'};
            `}
    }
`;

StyledSingleDatePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledSingleDatePicker;
