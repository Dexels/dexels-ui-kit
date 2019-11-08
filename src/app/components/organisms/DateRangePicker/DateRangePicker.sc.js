import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

export const StyledDateRangePicker = styled.div`
`;

StyledDateRangePicker.propTypes = {
    theme: themePropTypes,
};

StyledDateRangePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledDateRangePicker;
