import styled, { css } from 'styled-components';
import { BUTTON_ICON_SIZES } from './ButtonIcon.consts';
import PropTypes from 'prop-types';

export const StyledButtonIcon = styled.button`
    display: flex;
    align-items: center;
    outline: none;
    border: 0;
    border-radius: 100%;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => `calc(${(theme.spacingUnit)} * 1.5)`};
    color: ${({ theme }) => theme.colorPrimary.dark};

    ${({ size }) => size === BUTTON_ICON_SIZES.SMALL && css`
        font-size: 14px;
    `};

    ${({ size }) => size === BUTTON_ICON_SIZES.MEDIUM && css`
        font-size: 18px;
    `};

    ${({ size }) => size === BUTTON_ICON_SIZES.LARGE && css`
        font-size: 20px;
    `};

    ${({ isInverted, theme }) => isInverted && css`
        color: ${theme.colorLight.light};
    `};

    ${({ isDisabled, isInverted, theme }) => isDisabled && css`
        pointer-events: none;
        color: ${theme.colorDisabled.main};

        ${isInverted && css`
            color: ${theme.colorLight.dark};
        `};
    `};

    &:focus,
    &:hover {
        background-color: ${({ theme }) => theme.colorLight.dark};
        color: ${({ theme }) => theme.colorSecondary.dark};

        ${({ isInverted, theme }) => isInverted && css`
            background-color: ${theme.colorSecondary.dark};
            color: ${theme.colorLight.light};
        `};
    }

    &:after {
        border: 0;
        pointer-events: none;
    }

    &:active:after {
        border: 0;
    }
`;

StyledButtonIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isInverted: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_ICON_SIZES)).isRequired,
};

export default StyledButtonIcon;
