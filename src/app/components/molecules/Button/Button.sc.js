import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorPrimary,
    backgroundColorTertiary,
    buttonTextColorDisabled,
    colorButtonDark,
    colorButtonLight,
    colorDisabled,
    colorPrimary,
    colorPrimaryHover,
} from '../../../styles/theme/theme';
import { BUTTON_EASINGS, BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import { buttonBorderRadius, buttonHeight } from '../../../styles/theme/layout';
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
    border: 1px solid ${colorPrimary};
    background-color: ${colorPrimary};
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;
    color: ${colorButtonLight};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
        justify-content: center;
    `};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        background-color: ${colorDisabled};
        border-color: ${colorDisabled};
    `};

    ${({ size }) => size === BUTTON_SIZES.SMALL && css`
        ${textStyling(availableTextStyles().buttonSmall)};
        min-height: ${buttonHeight};
        min-width: 80px;
        border-radius: ${buttonBorderRadius};
        padding: 4px 16px;
    `};

    ${({ size }) => size === BUTTON_SIZES.LARGE && css`
        ${textStyling(availableTextStyles().buttonLarge)};
        min-height: ${buttonHeight};
        min-width: 100px;
        border-radius: ${buttonBorderRadius};
        padding: 8px 16px;
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.FILLED && css`
        background-color: ${backgroundColorTertiary};
        color: ${colorButtonLight};

        &:focus,
        &:hover {
            background-color: ${colorPrimaryHover},
            color: ${colorButtonLight};
        }

        ${isDisabled && css`
            background-color: ${colorDisabled};
            border-color: ${colorDisabled};
            color: ${buttonTextColorDisabled};
        `};
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        background-color: transparent !important;
        border-color: ${colorButtonDark};
        color: ${colorButtonDark};

        &:focus,
        &:hover {
            color: ${colorPrimaryHover};
        }

        ${isDisabled && css`
            background-color: ${colorDisabled};
            border-color: ${colorDisabled};
            color: ${buttonTextColorDisabled};
        `};
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.OUTLINE_HEADER && css`
        background-color: transparent !important;
        border-color: ${backgroundColorPrimary};
        color: ${backgroundColorPrimary};

        &:focus,
        &:hover {
            color: ${colorPrimaryHover};
        }

        ${isDisabled && css`
            background-color: ${colorDisabled};
            border-color: ${colorDisabled};
            color: ${buttonTextColorDisabled};
        `};
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent !important;
        color: ${colorButtonDark};
        padding: 0;
        min-height: 0;
        border: 0;

        &:focus,
        &:hover {
            color: ${colorPrimaryHover};
        }

        ${isDisabled && css`
            color: ${buttonTextColorDisabled};
        `};
    `};

    &:after {
        ${rippleEffect()}
    }

    &:active,
    &:hover {
        border-color: ${colorPrimaryHover};
        background-color: ${colorPrimaryHover};
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
    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)).isRequired,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(BUTTON_EASINGS)).isRequired,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
};

export default StyledButton;
