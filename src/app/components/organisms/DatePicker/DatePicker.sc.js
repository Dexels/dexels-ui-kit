import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledDatePicker = styled.div`
    /* Input styling */
    .SingleDatePickerInput {
        display: block;
        padding: ${({ theme }) => theme.spacing(0, 1.5)};
    }

    /* Calendar styling */
    .CalendarDay__selected {
        background-color: ${({ theme }) => theme.colorSecondary} !important;
        color: ${({ theme }) => theme.shades.nine} !important;
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
