import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledDatePicker = styled.div`
    .SingleDatePickerInput {
        display: block;
        padding: ${({ theme }) => theme.spacing(0, 1.5)};
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
