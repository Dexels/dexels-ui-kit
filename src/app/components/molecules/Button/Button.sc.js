import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { BUTTON_EASINGS, BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import styled, { css } from 'styled-components';
import { getThemeComponent } from '../../../styles/theme/themeFunctions';
import PropTypes from 'prop-types';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const buttonTheme = getThemeComponent('button');
console.log('**************** theme', buttonTheme)

export const StyledButton = styled.button`
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    appearance: none;
    position: relative;
    outline: none;
    border: 1px solid ${buttonTheme.borderColor};
    background-color: ${buttonTheme.backgroundColor};
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;
    color: ${buttonTheme.color};

    &:active,
    &:hover {
        border-color: ${buttonTheme.borderColorHover};
        background-color: ${buttonTheme.backgroundColorHover};
    }

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
        justify-content: center;
    `};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        background-color: ${buttonTheme.backgroundColorDisabled};
        border-color: ${buttonTheme.borderColorDisabled};
    `};

    ${({ size }) => size === BUTTON_SIZES.SMALL && css`
        ${textStyling(availableTextStyles().buttonSmall)};
        min-height: ${buttonTheme.variant.small.height};
        min-width: 80px;
        border-radius: ${buttonTheme.variant.small.borderRadius};
        padding: 4px 16px;
    `};

    ${({ size }) => size === BUTTON_SIZES.LARGE && css`
        ${textStyling(availableTextStyles().buttonLarge)};
        min-height: ${buttonTheme.variant.large.height};
        min-width: 100px;
        border-radius: ${buttonTheme.variant.large.borderRadius};
        padding: 8px 16px;
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.FILLED && css`
        background-color: ${buttonTheme.filled.backgroundColor};
        color: ${buttonTheme.filled.color};

        &:focus,
        &:hover {
            color: ${buttonTheme.filled.colorHover};
        }

        ${isDisabled && css`
            background-color: ${buttonTheme.filled.backgroundColorDisabled};
            border-color: ${buttonTheme.filled.borderColorDisabled};
            color: ${buttonTheme.filled.colorDisabled};
        `};
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        background-color: transparent !important;
        color: ${buttonTheme.outline.color};

        &:focus,
        &:hover {
            color: ${buttonTheme.outline.colorHover};
        }

        ${isDisabled && css`
            background-color: ${buttonTheme.outline.backgroundColorDisabled};
            border-color: ${buttonTheme.outline.borderColorDisabled};
            color: ${buttonTheme.outline.colorDisabled};
        `};
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent !important;
        color: ${buttonTheme.textonly.color};
        padding: 0;
        min-height: 0;
        border: 0;

        &:focus,
        &:hover {
            color: ${buttonTheme.textonly.colorHover};
        }

        ${isDisabled && css`
            color: ${buttonTheme.outline.colorDisabled};
        `};
    `};

    /* ${({ isDisabled, variant }) => isDisabled && variant !== BUTTON_VARIANTS.FILLED && css`
        color: ${buttonTheme.colorDisabled};
    `}; */

    &:after {
        ${rippleEffect()}
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
