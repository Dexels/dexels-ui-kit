import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../../styles/theming/themes/basic';
import { ELEVATIONS } from '../../../../utils/constants';
import getElevation from '../../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../../styles/mixins/setBoxSizing';
import setTruncate from '../../../../styles/mixins/setTruncate'
import { StyledInputIcon } from '../InputIcon/InputIcon.sc';

export const StyledWrapper = styled.div`
    ${setBoxSizing()}
    position: relative;

    /* Input styling */
    .DateRangePickerInput,
    .SingleDatePickerInput {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colorPrimary};
        border-radius: ${({ theme }) => theme.spacing(1)};
        padding: ${({ theme }) => theme.spacing(0, 6, 0, 1.5)};
        height: ${({ theme }) => theme.spacing(6)};
        overflow: hidden;

        ${({ isFocused, theme }) => isFocused && css`
            border-color: ${theme.colorSecondary};
        `}

        &:hover {
            border-color: ${({ theme }) => theme.colorSecondary};
        }
    }

    .DateRangePickerInput:not(.DateRangePickerInput__disabled):hover,
    .SingleDatePickerInput:not(.SingleDatePickerInput__disabled):hover {
        ${StyledInputIcon} {
            color: ${({ theme }) => theme.colorSecondary};
        }
    }

    .DateRangePickerInput_calendarIcon,
    .SingleDatePickerInput_calendarIcon {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate3d(0, -50%, 0);
        z-index: 1;
        margin: 0;
        outline: none;
        padding: 0;
    }

    .DateInput {
        display: block;
        width: 100%;
    }

    .DateInput_input {
        ${setTruncate()}
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
        display: block;
        outline: none;
        border: 0;
        background-color: ${({ theme }) => theme.shades.nine};
        padding: 0;
        height: ${({ theme }) => `calc(${theme.spacing(6)} - 2px)`};
        color: ${({ theme }) => theme.colorHeaderText.primary};

        &::placeholder {
            color: ${({ theme }) => theme.shades.four};
        }
    }

    .DateInput_fang {
        display: none;
    }

    /* Calendar styling */
    .DateRangePicker,
    .SingleDatePicker {
        display: block;
    }

    .DateRangePicker_picker,
    .SingleDatePicker_picker {
        background-color: transparent;
    }

    .DayPicker__withBorder {
        ${getElevation(ELEVATIONS.LEVEL_6)}
        border-radius: ${({ theme }) => theme.spacing(1)};
        overflow: hidden;
    }

    .DayPicker_transitionContainer {
        border-radius: ${({ theme }) => theme.spacing(1)};
    }

    .CalendarMonth_caption {
        padding: ${({ theme }) => theme.spacing(3, 0, 5.75)};
    }

    .DayPicker_weekHeader {
        top: ${({ hasYearSelector, theme }) => theme.spacing(hasYearSelector ? 11.5 : 9)};
    }

    .DayPicker_weekHeader_ul {
        margin: 0;
    }

    .DayPicker_weekHeader_li  {
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
        text-transform: capitalize;
        color: ${({ theme }) => theme.shades.one};
        font-weight: 600;

        small {
            font-size: inherit;
        }
    }

    .DayPickerNavigation_button {
        outline: none;

        ${({ hasYearSelector }) => hasYearSelector && css`
            display: none;
        `}
    }

    .CalendarDay__default {
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
        position: relative;
        outline: none;
        border: 1px solid ${({ theme }) => theme.shades.nine};
        background-color: ${({ theme }) => theme.shades.seven};
        color: ${({ theme }) => theme.shades.one};

        &:hover {
            background-color: ${({ theme }) => theme.colorPrimary};
            color: ${({ theme }) => theme.colorContrastText.primary};
        }
    }

    .CalendarDay__today {
        color: ${({ theme }) => theme.colorPrimary};

        &::before {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${({ theme }) => theme.colorPrimary};
            width: 100%;
            height: 4px;
            content: '';
        }

        &:hover {
            &::before {
                background-color: ${({ theme }) => theme.colorSecondary};
            }
        }
    }

    .CalendarDay__highlighted_calendar {
        &::after {
            display: block;
            position: absolute;
            bottom: 4px;
            left: 18px;
            border-radius: 100%;
            background-color: ${({ theme }) => theme.colorPrimary};
            width: 4px;
            height: 4px;
            content: '';
        }

        &:hover,
        &.CalendarDay__selected,
        &.CalendarDay__selected_span {
            &::after {
                background-color: ${({ theme }) => theme.shades.nine};
            }
        }
    }

    .CalendarDay__selected,
    .CalendarDay__selected_start,
    .CalendarDay__selected_end {
        background-color: ${({ theme }) => theme.colorSecondary};
        cursor: pointer;
        color: ${({ theme }) => theme.shades.nine};
    }

    .CalendarDay__blocked_minimum_nights:not(.CalendarDay__selected_start) {
        pointer-events: none;
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

    .DateRangePickerInput__disabled,
    .SingleDatePickerInput__disabled {
        border-color: ${({ theme }) => theme.colorDisabled};
        background: none;

        &:hover {
            border-color: ${({ theme }) => theme.colorDisabled};
        }

        .DateInput {
            background: none;
        }

        .DateInput_input,
        .DateInput_input::placeholder {
            color: ${({ theme }) => theme.colorDisabled};
            font-style: normal;
        }

        .DateRangePickerInput_calendarIcon,
        .SingleDatePickerInput_calendarIcon {
            cursor: default;
        }
    }
`;

StyledWrapper.propTypes = {
    hasYearSelector: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledWrapper;
