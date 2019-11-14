import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const StyledMenuItem = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colorBodyText.primary};

    ${({ isDisabled }) => isDisabled && css`
        * {
            pointer-events: none;
        }
    `}

    ${({ isParentElement }) => isParentElement === false && css`
        margin: 0 0 0 ${({ theme }) => theme.spacing(2.5)};
    `}

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.shades.eight};
    }
`;

StyledMenuItem.propTypes = {
    hasDivider: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isParentElement: PropTypes.bool.isRequired,
};

export const ItemWrapper = styled.div`
    display: flex;
    flex: 0 auto 0;
    flex-direction: row;
    justify-content: space-between;

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
        color: ${({ theme }) => theme.colorHeaderText.secondary};
    }

    &:active:after {
        ${rippleEffectReset()}
    }
`;

export const Divider = styled.div`
    background-color: ${({ theme }) => theme.shades.one};
    height: 1px;
`;
