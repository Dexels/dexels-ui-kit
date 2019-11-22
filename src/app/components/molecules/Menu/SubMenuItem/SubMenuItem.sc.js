import { rippleEffect, rippleEffectReset } from '../../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/themePropTypes';

const StyledSubMenuItem = styled.div`
    position: relative;
    border-left: ${({ theme }) => theme.spacing(0.5)} solid transparent;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    overflow: hidden;
    color: ${({ theme }) => theme.colorText.primary};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
        pointer-events: none;
    `}

    ${({ isSelected }) => isSelected && css`
        border-left: ${({ theme }) => theme.spacing(0.5)} solid ${({ theme }) => theme.colorSecondary};
        background-color: ${({ theme }) => theme.shades.eight};
        color: ${({ theme }) => theme.colorText.secondary};
        font-weight: 500;
    `}

    &:hover,
    &:focus {
        ${({ isSelected }) => !isSelected && css`
            border-left: ${({ theme }) => theme.spacing(0.5)} solid ${({ theme }) => theme.shades.five};
        `}
        background-color: ${({ theme }) => theme.hover.backgroundColor};
    }

    &:active::after {
        ${rippleEffectReset()}
    }

    ::after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
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
