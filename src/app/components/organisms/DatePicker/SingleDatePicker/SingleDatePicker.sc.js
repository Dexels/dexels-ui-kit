import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/themePropTypes';

export const StyledSingleDatePicker = styled.div`
    .SingleDatePickerInput {
        display: block;
    }
`;

StyledSingleDatePicker.propTypes = {
    hasYearSelector: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledSingleDatePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledSingleDatePicker;
