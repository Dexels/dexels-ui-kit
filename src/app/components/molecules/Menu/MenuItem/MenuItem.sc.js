import { rippleEffect, rippleEffectReset } from '../../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/propTypes';

const StyledMenuItem = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}
    display: flex;
    position: relative;
    align-items: center;
    border-top: ${({ theme }) => `1px solid ${theme.colorDisabled}`};
    border-left: ${({ theme }) => theme.spacing(0.5)} solid transparent;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    height: ${({ theme }) => theme.spacing(6)};
    overflow: hidden;
    color: ${({ theme }) => theme.colorText.primary};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
        pointer-events: none;
    `}

    ${({ hasChildren, isActive, theme }) => !hasChildren && isActive && css`
        border-left: ${theme.spacing(0.5)} solid ${theme.colorSecondary};
        background-color: ${theme.shades.eight};
        color: ${theme.colorText.secondary};
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

    &:last-of-type {
        border-bottom: 1px solid ${({ theme }) => theme.colorDisabled};
    }
`;

StyledMenuItem.propTypes = {
    hasChildren: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledMenuItem.defaultProps = {
    theme: themeBasic,
};

export default StyledMenuItem;
