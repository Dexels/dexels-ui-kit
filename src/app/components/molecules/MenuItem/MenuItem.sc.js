import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';

export const StyledMenuItem = styled.div`
    position: relative;
    overflow: hidden;
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorHeaderText.disabled};
        pointer-events: none;
    `}

    ${({ isParentElement }) => isParentElement && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}
    `}

    ${({ isParentElement }) => !isParentElement && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    `}

    ${({ isParentElement, isSelected }) => !isParentElement && isSelected && css`
        border-left: ${({ theme }) => theme.spacing(0.5)} solid ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.colorHeaderText.secondary};
        font-weight: 500;
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
        color: ${({ theme }) => theme.colorHeaderText.secondary};
    }
`;

StyledMenuItem.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isParentElement: PropTypes.bool.isRequired,
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

    ${({ isParentElement }) => isParentElement && css`
        padding: ${({ theme }) => theme.spacing(0.5)} 0 ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1)};
    `}

    ${({ isParentElement }) => !isParentElement && css`
        padding: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
    `}
`;

ItemWrapper.propTypes = {
    isParentElement: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

ItemWrapper.defaultProps = {
    theme: themeBasic,
};

export const Divider = styled.div`
    background-color: ${({ theme }) => theme.shades.seven};
    height: 1px;
`;
