import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';

export const StyledMenuItem = styled.div`
    position: relative;
    border-left: ${({ theme }) => theme.spacing(0.5)} solid transparent;
    overflow: hidden;
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorHeaderText.disabled};
        pointer-events: none;
    `}

    ${({ isParentItem }) => isParentItem && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}
    `}

    ${({ isParentItem }) => !isParentItem && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    `}

    ${({ isParentItem, isSelected }) => !isParentItem && isSelected && css`
        border-left: ${({ theme }) => theme.spacing(0.5)} solid ${({ theme }) => theme.colorSecondary};
        background-color: ${({ theme }) => theme.shades.eight};
        color: ${({ theme }) => theme.colorHeaderText.secondary};
        font-weight: 500;
    `}

    ${({ hasChildrenItems, isParentItem, isSelected }) => !hasChildrenItems && isParentItem && isSelected && css`
        border-left: ${({ theme }) => theme.spacing(0.5)} solid ${({ theme }) => theme.colorSecondary};
        background-color: ${({ theme }) => theme.shades.eight};
        color: ${({ theme }) => theme.colorHeaderText.secondary};
    `}

    &:hover,
    &:focus {
        ${({ isSelected }) => !isSelected && css`
            border-left: ${({ theme }) => theme.spacing(0.5)} solid ${({ theme }) => theme.shades.five};
        `}
        background-color: ${({ theme }) => theme.shades.eight};
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
    isParentItem: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledMenuItem.defaultProps = {
    theme: themeBasic,
};

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${({ isParentItem, hasChildrenItems }) => isParentItem && hasChildrenItems && css`
        padding: ${({ theme }) => theme.spacing(0.5)} 0 ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1)};
    `}

    ${({ isParentItem, hasChildrenItems }) => isParentItem && !hasChildrenItems && css`
        padding: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1)};
    `}

    ${({ isParentItem }) => !isParentItem && css`
        padding: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
    `}
`;

ItemWrapper.propTypes = {
    hasChildrenItems: PropTypes.bool.isRequired,
    isParentItem: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

ItemWrapper.defaultProps = {
    theme: themeBasic,
};

export const Divider = styled.div`
    background-color: ${({ theme }) => theme.shades.seven};
    height: 1px;
`;
