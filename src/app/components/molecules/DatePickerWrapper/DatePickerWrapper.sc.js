import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDatePickerWrapper = styled.div`
    ${setBoxSizing()}

    .DateInput_fang {
        display: none;
    }

    /* Calendar styling */
    .DayPicker__withBorder {
        ${getElevation(ELEVATIONS.LEVEL_6)}
        border-radius: ${({ theme }) => theme.spacing(1)};
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
        &.CalendarDay__selected {
            &::after {
                background-color: ${({ theme }) => theme.shades.nine};
            }
        }
    }
`;

StyledDatePickerWrapper.propTypes = {
    hasYearSelector: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledDatePickerWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledDatePickerWrapper;
