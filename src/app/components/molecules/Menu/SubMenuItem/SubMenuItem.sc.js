import { rippleEffect, rippleEffectReset } from '../../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/themePropTypes';

const StyledSubMenuItem = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    position: relative;
    border-left: ${({ theme }) => theme.spacing(0.5)} solid transparent;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    overflow: hidden;
    color: ${({ theme }) => theme.shades.one};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
        pointer-events: none;
    `}

    ${({ isSelected, theme }) => isSelected && css`
        border-color: ${theme.colorSecondary};
        background-color: ${theme.shades.eight};
        color: ${theme.colorText.secondary};
        font-weight: 500;
    `}

    &::after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:hover,
    &:focus {
        ${({ isSelected, theme }) => !isSelected && css`
            border-color: ${theme.shades.six};
        `}
        background-color: ${({ theme }) => theme.hover.backgroundColor};
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

StyledSubMenuItem.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledSubMenuItem.defaultProps = {
    theme: themeBasic,
};

export default StyledSubMenuItem;
