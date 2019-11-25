import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

export const StyledChip = styled.button`
    ${setBoxSizing()}
    ${rippleEffectInit()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })}
    appearance: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme.shades.two};
    border-radius: ${({ theme }) => theme.spacing(1)};
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0.5, 1)};
    min-height: ${({ theme }) => theme.spacing(4)};
    color: ${({ theme }) => theme.colorText.primary};

    ${({ isDisabled, isSelected }) => (isDisabled || !isSelected) && css`
        border-color: ${({ theme }) => theme.colorDisabled};
    `}

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
        pointer-events: none;
    `}

    &::after {
        ${({ theme }) => rippleEffect(theme.colorTertiary)}
    }

    &:active,
    &:hover {
        border-color: ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.colorSecondary};
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

StyledChip.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledChip.defaultProps = {
    theme: themeBasic,
};

export default StyledChip;
