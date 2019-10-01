import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import { INPUT_PASSWORD_VARIANTS } from './InputPassword.consts';
import PropTypes from 'prop-types';

export const StyledInputPassword = styled.div`
    position: relative;
`;

export const VisibilitySwitch = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)};
    appearance: none;
    position: absolute;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: 4px 8px;
    color: ${({ theme }) => theme.inputPassword.visibilitySwitchColorDisabled};

    ${({ variant }) => variant === INPUT_PASSWORD_VARIANTS.COMPACT && css`
        top: 0px;
        right: 0;
        padding: 0 0 0 8px;
    `};

    ${({ variant }) => variant === INPUT_PASSWORD_VARIANTS.FULL_SIZE && css`
        top: 7px;
        right: 8px;
        padding: 4px 8px;
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.inputPassword.visibilitySwitchColorDisabled};
        pointer-events: none;
    `};
`;

VisibilitySwitch.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        inputPassword: PropTypes.shape({
            visibilitySwitchColorDefault: PropTypes.string.isRequired,
            visibilitySwitchColorDisabled: PropTypes.string.isRequired,
        }).isRequired,
        textStyling: PropTypes.func.isRequired,
    }).isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_PASSWORD_VARIANTS)).isRequired,
};

VisibilitySwitch.defaultProps = {
    theme: defaultTheme,
};
