import { rippleEffect, rippleEffectReset } from '../../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/propTypes';

const StyledSubMenuItem = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    position: relative;
    border-left: ${({ theme }) => theme.spacing(0.5)} solid transparent;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    height: ${({ theme }) => theme.spacing(4.5)};
    overflow: hidden;
    color: ${({ theme }) => theme.shades.one};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
        pointer-events: none;
    `}

    ${({ isActive, theme }) => isActive && css`
        border-color: ${theme.colorSecondary};
        background-color: ${theme.shades.eight};
        color: ${theme.colorText.secondary};
        font-weight: 600;
    `}

    &::after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:hover,
    &:focus {
        ${({ isActive, theme }) => !isActive && css`
            border-color: ${theme.shades.six};
        `}

        ${({ isActive, theme }) => css`
            background-color: ${isActive ? theme.background.secondary : theme.hover.backgroundColor};
        `}
        cursor: pointer;
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

StyledSubMenuItem.propTypes = {
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledSubMenuItem.defaultProps = {
    theme: themeBasic,
};

export default StyledSubMenuItem;
