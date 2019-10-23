import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    BUTTON_EASINGS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './Button.consts';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledButton = styled.button`
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    appearance: none;
    position: relative;
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.colorPrimary.main}`};
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colorPrimary.main};
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorLight.light};

    ${({ isInverted, theme }) => isInverted && css`
        border: 1px solid ${theme.colorLight.light};
        background-color: ${theme.colorLight.light};
    `};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
        justify-content: center;
    `};

    ${({ isDisabled, isInverted, theme }) => isDisabled && css`
        pointer-events: none;
        background-color: ${theme.colorDisabled.main};
        border-color: ${theme.colorDisabled.main};

        ${isInverted && css`
            background-color: ${theme.colorDark.main};
            border-color: ${theme.colorDark.main};
        `};
    `};

    ${({ size }) => size === BUTTON_SIZES.SMALL && css`
        ${textStyling(availableTextStyles().buttonSmall)};
        min-width: 80px;
        padding: 4px 16px;
        min-height: 28px;
    `};

    ${({ size }) => size === BUTTON_SIZES.MEDIUM && css`
        ${textStyling(availableTextStyles().buttonMedium)};
        min-width: 90px;
        padding: 6px 16px;
        min-height: 32px;
    `};

    ${({ size }) => size === BUTTON_SIZES.LARGE && css`
        ${textStyling(availableTextStyles().buttonLarge)};
        min-width: 100px;
        padding: 8px 16px;
        min-height: 48px;
    `};

    ${({ isDisabled, isInverted, theme, variant }) => variant === BUTTON_VARIANTS.FILLED && css`
        background-color: ${theme.colorPrimary.dark};
        color: ${theme.colorLight.light};

        ${isInverted && css`
            background-color: ${theme.colorLight.light};
            color: ${theme.colorPrimary.dark};
        `};

        &:focus,
        &:hover {
            background-color: ${theme.colorSecondary.dark},
            color: ${theme.colorLight.light};

            ${isInverted && css`
                background-color: ${theme.colorSecondary.dark};
                color: ${theme.colorLight.light};
            `};
        }

        ${isDisabled && css`
            background-color: ${theme.colorDisabled.main};
            border-color: ${theme.colorDisabled.main};
            color: ${theme.colorLight.light};

            ${isInverted && css`
                background-color: ${theme.colorDisabled.mainInverted};
                border-color: ${theme.colorDark.main};
                color: ${theme.colorDark.main};
            `};
        `};
    `};

    ${({ isDisabled, isInverted, theme, variant }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        background-color: transparent !important;
        border-color: ${theme.colorPrimary.dark};
        color: ${theme.colorPrimary.dark};

        ${isInverted && css`
            border-color: ${theme.colorLight.light};
            color: ${theme.colorLight.light};
        `};

        &:focus,
        &:hover {
            color: ${theme.colorSecondary.dark};

            ${isInverted && css`
                color: ${theme.colorSecondary.dark};
            `};
        }

        ${isDisabled && css`
            background-color: ${theme.colorDisabled.main};
            border-color: ${theme.colorDisabled.main};
            color: ${theme.colorLight.light};

            ${isInverted && css`
                background-color: ${theme.colorDark.light};
                border-color: ${theme.colorDark.light};
                color: ${theme.colorDark.main};
            `};
        `};
    `};

    ${({ isDisabled, isInverted, theme, variant }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent !important;
        color: ${theme.colorPrimary.dark};
        padding: 0;
        min-height: 0;
        border: 0;

        ${isInverted && css`
            color: ${theme.colorLight.light};
        `};

        &:focus,
        &:hover {
            color: ${theme.colorSecondary.dark};

            ${isInverted && css`
                color: ${theme.colorSecondary.dark};
            `};
        }

        ${isDisabled && css`
            color: ${theme.colorLight.light};

            ${isInverted && css`
                color: ${theme.colorDark.main};
            `};
        `};
    `};

    &:after {
        ${({ variant }) => variant === BUTTON_VARIANTS.FILLED && css`
            ${rippleEffect()}
        `};
        ${({ theme, variant }) => variant !== BUTTON_VARIANTS.FILLED && css`
            ${rippleEffect(theme.colorSecondary.dark)}
        `};
    }

    &:active,
    &:hover {
        border-color: ${({ theme }) => theme.colorSecondary.dark};
        background-color: ${({ theme }) => theme.colorSecondary.dark};

        ${({ isInverted, theme }) => isInverted && css`
            border-color: ${theme.colorSecondary.dark};
            background-color: ${theme.colorSecondary.dark};
        `};
    }

    &:active:after {
        transform: scale(0, 0);
        transition: none;
        opacity: .2;
    }
`;

StyledButton.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
    isInverted: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)).isRequired,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(BUTTON_EASINGS)).isRequired,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
};

export default StyledButton;
