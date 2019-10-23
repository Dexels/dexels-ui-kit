import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import styled, { css } from 'styled-components';
import { INPUT_PASSWORD_VARIANTS } from './InputPassword.consts';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledInputPassword = styled.div`
    ${setBoxSizing()};
    position: relative;
`;

export const VisibilitySwitch = styled.button`
    ${textStyling(availableTextStyles().h1)};
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
        padding: 0 0 0 ${theme.spacingUnit};
    `};

    ${({ theme, variant }) => variant === INPUT_PASSWORD_VARIANTS.OUTLINE && css`
        top: ${theme.spacingUnit};
        right: ${theme.spacingUnit};
        padding: calc(${theme.spacingUnit} / 2) ${theme.spacingUnit};
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
