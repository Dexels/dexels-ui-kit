import styled, { css } from 'styled-components';
import { INPUT_PASSWORD_VARIANTS } from './InputPassword.consts';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledInputPassword = styled.div`
    ${setBoxSizing()};
    position: relative;
`;

export const VisibilitySwitch = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    appearance: none;
    position: absolute;
    margin: 0;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.colorPrimary.dark};

    ${({ theme, variant }) => variant === INPUT_PASSWORD_VARIANTS.COMPACT && css`
        top: 0;
        right: 0;
        padding: ${theme.spacing(0, 0, 0, 1)};
    `};

    ${({ theme, variant }) => variant === INPUT_PASSWORD_VARIANTS.OUTLINE && css`
        top: ${theme.spacing(1)};
        right: ${theme.spacing(1)};
        padding: ${theme.spacing(0.5, 1)};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled.main};
        pointer-events: none;
    `};

    span {
        display: block;
    }
`;

VisibilitySwitch.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_PASSWORD_VARIANTS)).isRequired,
};
