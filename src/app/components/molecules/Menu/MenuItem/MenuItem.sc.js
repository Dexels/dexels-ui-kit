import { rippleEffect, rippleEffectReset } from '../../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/propTypes';

const StyledMenuItem = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}
    position: relative;
    border-left: ${({ theme }) => theme.spacing(0.5)} solid transparent;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    overflow: hidden;
    color: ${({ theme }) => theme.colorText.primary};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
        pointer-events: none;
    `}

    ${({ hasChildren, isSelected, theme }) => !hasChildren && isSelected && css`
        border-color: ${theme.colorSecondary};
        background-color: ${theme.shades.eight};
        color: ${theme.colorText.secondary};
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

StyledMenuItem.propTypes = {
    hasChildren: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledMenuItem.defaultProps = {
    theme: themeBasic,
};

export default StyledMenuItem;
