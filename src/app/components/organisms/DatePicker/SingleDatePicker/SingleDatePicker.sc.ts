import styled, { css, SimpleInterpolation } from 'styled-components';
import { SingleDatePickerVariant } from '../types';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledSingleDatePickerProps {
    isFocused: boolean;
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

        ${({ isFocused, theme, variant }): SimpleInterpolation =>
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
`;

StyledSingleDatePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledSingleDatePicker;
