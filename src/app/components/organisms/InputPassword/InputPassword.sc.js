import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { colorBodyDark, colorDisabled } from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import { INPUT_PASSWORD_VARIANTS } from './InputPassword.consts';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';

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
    color: ${colorBodyDark};

    ${({ variant }) => variant === INPUT_PASSWORD_VARIANTS.COMPACT && css`
        top: 0;
        right: 0;
        padding: 0 0 0 ${spacingUnit};
    `};

    ${({ variant }) => variant === INPUT_PASSWORD_VARIANTS.OUTLINE && css`
        top: ${spacingUnit};
        right: ${spacingUnit};
        padding: calc(${spacingUnit} / 2) ${spacingUnit};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${colorDisabled};
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
