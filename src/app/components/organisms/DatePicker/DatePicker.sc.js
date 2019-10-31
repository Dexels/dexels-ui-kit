import styled, { css } from 'styled-components';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const InputIcon = styled.div`
    color: ${({ theme }) => theme.colorPrimary};

    ${({ isFocused, theme }) => isFocused && css`
        color: ${theme.colorSecondary};
    `};
`;

InputIcon.propTypes = {
    isFocused: PropTypes.bool.isRequired,
};

export const StyledDatePicker = styled.div`
    ${setBoxSizing()};
    position: relative;

    /* Input styling */
    .SingleDatePicker {
        display: block;
    }

    .SingleDatePickerInput {
        display: block;
        border: 0;
        border-radius: 0;

        &:hover {
            ${InputIcon} {
                color: ${({ theme }) => theme.colorSecondary};
            }
        }
    }

    .DateInput {
        width: 100%;
    }

    .DateInput_input {
        display: block;
        outline: none;
        border: 1px solid ${({ theme }) => theme.colorPrimary};
        border-radius: ${({ theme }) => theme.spacing(1)};
        background-color: ${({ theme }) => theme.background.nine};
        padding: ${({ theme }) => theme.spacing(0, 1.5)};
        width: 100%;
        height: ${({ theme }) => theme.spacing(6)};
        color: ${({ theme }) => theme.colorHeaderText.primary};

        &.DateInput_input__focused,
        &:hover {
            border-color: ${({ theme }) => theme.colorSecondary};
        }
    }

    .SingleDatePickerInput_calendarIcon {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        margin: 0;
        outline: none;
        padding: ${({ theme }) => theme.spacing(1.5)};
        font-size: 24px;

        span {
            display: block;
        }
    }

    /* Calendar styling */
    .DayPicker__withBorder {
        ${getElevation(ELEVATIONS.LEVEL_6)};
        border-radius: ${({ theme }) => theme.spacing(1)};
    }

    .DayPicker_weekHeader {
        ${({ hasYearSelector }) => hasYearSelector && css`
            top: 80px;
        `};
    }

    .DayPicker_transitionContainer {
        border-radius: ${({ theme }) => theme.spacing(1)};
    }

    .DateInput_fang {
        display: none;
    }

    .DayPicker_weekHeader_li  {
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
        color: ${({ theme }) => theme.shades.one};
        font-weight: 600;
    }

    .DayPickerNavigation_button {
        outline: none;

        ${({ hasYearSelector }) => hasYearSelector && css`
            display: none;
        `};
    }

    .CalendarDay__default {
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
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

    .CalendarDay__selected {
        background-color: ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.shades.nine};

        &:hover {
            background-color: ${({ theme }) => theme.colorSecondary};
        }
    }

    .CalendarDay__highlighted_calendar {
        &::after {
            display: block;
            position: absolute;
            bottom: ${({ theme }) => theme.spacing(0.5)};
            left: ${({ theme }) => theme.spacing(2.25)};
            border-radius: 100%;
            background-color: ${({ theme }) => theme.colorPrimary};
            width: ${({ theme }) => theme.spacing(0.5)};
            height: ${({ theme }) => theme.spacing(0.5)};
            content: '';
        }

        &:hover,
        &.CalendarDay__selected {
            &::after {
                background-color: ${({ theme }) => theme.shades.nine};
            }
        }
    }
`;

StyledDatePicker.propTypes = {
    hasYearSelector: PropTypes.bool.isRequired,
};

export const ButtonNavigation = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.spacing(1.25)};

    ${({ isNext, theme }) => isNext && css`
        right: ${theme.spacing(0.75)};
    `};

    ${({ isPrev, theme }) => isPrev && css`
        left: ${theme.spacing(0.75)};
    `};
`;

ButtonNavigation.propTypes = {
    isNext: PropTypes.bool,
    isPrev: PropTypes.bool,
};

ButtonNavigation.defaultProps = {
    isNext: false,
    isPrev: false,
};
