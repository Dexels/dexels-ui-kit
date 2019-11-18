import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
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
        border-left: ${({ theme }) => theme.spacing(0.46)} solid ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.colorHeaderText.secondary};
        font-weight: 500;
    `}

    &:hover,
    &:focus {
        ${({ isSelected }) => !isSelected && css`
            border-left: ${({ theme }) => theme.spacing(0.46)} solid ${({ theme }) => theme.shades.five};
        `}
        background-color: ${({ theme }) => theme.shades.eight};
    }

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
        color: ${({ theme }) => theme.colorHeaderText.secondary};
    }

    &:active:after {
        ${rippleEffectReset()}
    }
`;

StyledMenuItem.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isParentElement: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: ${({ theme }) => theme.spacing(4.5)};

    ${({ isParentElement }) => isParentElement && css`
        margin: 0 0 0 ${({ theme }) => theme.spacing(1)};
    `}

    ${({ isParentElement }) => !isParentElement && css`
        margin: 0 0 0 ${({ theme }) => theme.spacing(2)};
    `}
`;

ItemWrapper.propTypes = {
    isParentElement: PropTypes.bool.isRequired,
};

export const Divider = styled.div`
    background-color: ${({ theme }) => theme.shades.seven};
    height: ${({ theme }) => theme.spacing(0.125)};
`;
