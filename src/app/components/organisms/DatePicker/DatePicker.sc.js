import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledDatePickerInputIcon } from '../../molecules/DatePickerInputIcon/DatePickerInputIcon.sc';

export const StyledDatePicker = styled.div`
    position: relative;

    /* Input styling */
    .SingleDatePicker {
        display: block;
    }

    .SingleDatePickerInput {
        display: block;
        border: 0;
        border-radius: 0;

        &:not(.SingleDatePickerInput__disabled):hover {
            ${StyledDatePickerInputIcon} {
                color: ${({ theme }) => theme.colorSecondary};
            }
        }
    }

    .DateInput {
        display: block;
        width: 100%;
    }

    .DateInput_input {
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
        display: block;
        outline: none;
        border: 1px solid ${({ theme }) => theme.colorPrimary};
        border-radius: ${({ theme }) => theme.spacing(1)};
        background-color: ${({ theme }) => theme.shades.nine};
        padding: ${({ theme }) => theme.spacing(0, 1.5)};
        height: ${({ theme }) => theme.spacing(6)};
        color: ${({ theme }) => theme.colorHeaderText.primary};

        &::placeholder {
            color: ${({ theme }) => theme.shades.four};
        }

        &.DateInput_input__focused,
        &:hover {
            border-color: ${({ theme }) => theme.colorSecondary};
        }
    }

    .SingleDatePicker_picker {
        background-color: transparent;
    }

    .SingleDatePickerInput_calendarIcon {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate3d(0, -50%, 0);
        z-index: 1;
        margin: 0;
        outline: none;
        padding: ${({ theme }) => theme.spacing(1.5)};
        font-size: 24px;
    }

    /* Calendar styling */
    .CalendarDay__selected {
        background-color: ${({ theme }) => theme.colorSecondary} !important;
        color: ${({ theme }) => theme.shades.nine} !important;
    }

    .CalendarDay__blocked_out_of_range,
    .CalendarDay__blocked_out_of_range:hover {
        background-color: ${({ theme }) => theme.background.primary};
        color: ${({ theme }) => theme.colorDisabled};

        &.CalendarDay__highlighted_calendar {
            &::after {
                background-color: ${({ theme }) => theme.colorDisabled};
            }
        }
    }

    .SingleDatePickerInput__disabled {
        background: none;

        .DateInput {
            background: none;
        }

        .DateInput_input {
            border-color: ${({ theme }) => theme.colorDisabled};
            background-color: ${({ theme }) => theme.shades.nine};
            color: ${({ theme }) => theme.colorDisabled};
            font-style: normal;

            &::placeholder {
                color: ${({ theme }) => theme.colorDisabled};
            }
        }

        .SingleDatePickerInput_calendarIcon {
            cursor: default;
        }
    }
`;

StyledDatePicker.propTypes = {
    hasYearSelector: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledDatePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledDatePicker;
