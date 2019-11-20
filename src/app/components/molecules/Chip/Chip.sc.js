import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import transitionEffect from '../../../styles/mixins/transitionEffect';

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
    color: ${({ theme }) => theme.colorBodyText.primary};

    ${({ isSelected }) => isSelected && css`
        background-color: ${({ theme }) => theme.shades.five};
    `}

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
    `}

    &::after {
        ${({ theme }) => rippleEffect(theme.colorTertiary)}
    }

    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.shades.five};

        ${({ isSelected }) => isSelected && css`
            background-color: ${({ theme }) => theme.shades.seven};
        `}
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
