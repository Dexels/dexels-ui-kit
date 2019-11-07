import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';

export const StyledDatePickerInputIcon = styled.div`
    color: ${({ theme }) => theme.colorPrimary};

    ${({ isFocused, theme }) => isFocused && css`
        color: ${theme.colorSecondary};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled};
    `}
`;

StyledDatePickerInputIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledDatePickerInputIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledDatePickerInputIcon;
