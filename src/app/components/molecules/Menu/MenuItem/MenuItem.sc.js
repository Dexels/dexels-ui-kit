import { rippleEffect, rippleEffectReset } from '../../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/themePropTypes';

const StyledMenuItem = styled.div`
    position: relative;
    border-left: ${({ theme }) => theme.spacing(0.5)} solid transparent;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    overflow: hidden;
    color: ${({ theme }) => theme.colorText.primary};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
        pointer-events: none;
    `}

    ${({ hasChildrenItems, isSelected }) => !hasChildrenItems && isSelected && css`
        border-left: ${({ theme }) => theme.spacing(0.5)} solid ${({ theme }) => theme.colorSecondary};
        background-color: ${({ theme }) => theme.shades.eight};
        color: ${({ theme }) => theme.colorText.secondary};
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

StyledMenuItem.propTypes = {
    hasChildrenItems: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledMenuItem.defaultProps = {
    theme: themeBasic,
};

export default StyledMenuItem;
