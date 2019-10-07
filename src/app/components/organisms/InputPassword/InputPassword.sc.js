import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import { INPUT_PASSWORD_VARIANTS } from './InputPassword.consts';
import PropTypes from 'prop-types';

export const StyledInputPassword = styled.div`
    position: relative;
`;

export const VisibilitySwitch = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    appearance: none;
    position: absolute;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.inputPassword.visibilitySwitchColorDefault};

    ${({ variant }) => variant === INPUT_PASSWORD_VARIANTS.COMPACT && css`
        top: 0;
        right: 0;
        padding: 0 0 0 8px;
    `};

    ${({ variant }) => variant === INPUT_PASSWORD_VARIANTS.FULL_SIZE && css`
        top: 8px;
        right: 8px;
        padding: 4px 8px;
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.inputPassword.visibilitySwitchColorDisabled};
        pointer-events: none;
    `};

    span {
        display: block;
    }
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
