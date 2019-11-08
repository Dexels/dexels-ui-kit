import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';

export const StyledDateRangePicker = styled.div`
`;

StyledDateRangePicker.propTypes = {
    theme: themePropTypes,
};

StyledDateRangePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledDateRangePicker;
