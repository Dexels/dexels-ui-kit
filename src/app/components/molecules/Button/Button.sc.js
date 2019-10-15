import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { BUTTON_EASINGS, BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import styled, { css } from 'styled-components';
import { getThemeComponent } from '../../../styles/theme/themeFunctions';
import PropTypes from 'prop-types';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const theme = getThemeComponent('button');
console.log('************************** button')

export const StyledButton = styled.button`
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    appearance: none;
    position: relative;
    outline: none;
    border: 1px solid ${theme.borderColor};
    background-color: ${theme.backgroundColor};
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;
    color: ${theme.color};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
        justify-content: center;
    `};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        background-color: ${theme.backgroundColorDisabled};
        border-color: ${theme.borderColorDisabled};
    `};

    ${({ size }) => size === BUTTON_SIZES.SMALL && css`
        ${textStyling(availableTextStyles().buttonSmall)};
        min-height: ${theme.variant.small.height};
        min-width: 80px;
        border-radius: ${theme.variant.small.borderRadius};
        padding: 4px 16px;
    `};

    ${({ size }) => size === BUTTON_SIZES.LARGE && css`
        ${textStyling(availableTextStyles().buttonLarge)};
        min-height: ${theme.variant.large.height};
        min-width: 100px;
        border-radius: ${theme.variant.large.borderRadius};
        padding: 8px 16px;
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.FILLED && css`
        background-color: ${theme.filled.backgroundColor};
        color: ${theme.filled.color};

        &:focus,
        &:hover {
            color: ${theme.filled.colorHover};
        }

        ${isDisabled && css`
            background-color: ${theme.filled.backgroundColorDisabled};
            border-color: ${theme.filled.borderColorDisabled};
            color: ${theme.filled.colorDisabled};
        `};
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        background-color: transparent !important;
        color: ${theme.outline.color};

        &:focus,
        &:hover {
            color: ${theme.outline.colorHover};
        }

        ${isDisabled && css`
            background-color: ${theme.outline.backgroundColorDisabled};
            border-color: ${theme.outline.borderColorDisabled};
            color: ${theme.outline.colorDisabled};
        `};
    `};

    ${({ isDisabled, variant }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent !important;
        color: ${theme.textonly.color};
        padding: 0;
        min-height: 0;
        border: 0;

        &:focus,
        &:hover {
            color: ${theme.textonly.colorHover};
        }

        ${isDisabled && css`
            color: ${theme.outline.colorDisabled};
        `};
    `};

    &:after {
        ${rippleEffect()}
    }

    &:active,
    &:hover {
        border-color: ${theme.borderColorHover};
        background-color: ${theme.backgroundColorHover};
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
