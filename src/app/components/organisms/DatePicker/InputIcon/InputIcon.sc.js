import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';

export const StyledInputIcon = styled.div`
    padding: ${({ theme }) => theme.spacing(1.5)};
    color: ${({ theme }) => theme.colorPrimary};
    font-size: ${({ theme }) => theme.spacing(3)};

    span {
        display: block;
    }

    ${({ isFocused, theme }) => isFocused && css`
        color: ${theme.colorSecondary};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled};
    `}
`;

StyledInputIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledInputIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledInputIcon;