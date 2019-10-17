import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorPrimary,
    backgroundColorTertiary,
    colorButtonDark,
    colorButtonLight,
    colorDisabled,
    colorPrimary,
    colorPrimaryHover,
} from '../../../styles/theme/theme';
import {
    BUTTON_EASINGS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './Button.consts';
import { grey50, white } from '../../../styles/colors/colors';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import theme from 'styled-theming';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const borderRadius = theme('layout', {
    basic: '50px',
    compact: '4px',
});

const height = theme.variants('layout', 'size', {
    [BUTTON_SIZES.LARGE]: {
        basic: '48px',
        compact: '46px',
    },
    [BUTTON_SIZES.MEDIUM]: {
        basic: '32px',
        compact: '30px',
    },
    [BUTTON_SIZES.SMALL]: {
        basic: '30px',
        compact: '28px',
    },
});

const textColorDisabled = theme('mode', {
    basic: white,
    dark: white,
    light: grey50,
});

export const StyledButton = styled.button`
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    appearance: none;
    position: relative;
    outline: none;
    border: 1px solid ${colorPrimary};
    border-radius: ${borderRadius};
    background-color: ${colorPrimary};
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;
    min-height: ${height};
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
        min-width: 80px;
        padding: 4px 16px;
    `};

    ${({ size }) => size === BUTTON_SIZES.MEDIUM && css`
        ${textStyling(availableTextStyles().buttonMedium)};
        min-width: 90px;
        padding: 6px 16px;
    `};

    ${({ size }) => size === BUTTON_SIZES.LARGE && css`
        ${textStyling(availableTextStyles().buttonLarge)};
        min-width: 100px;
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
            color: ${textColorDisabled};
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
            color: ${textColorDisabled};
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
            color: ${textColorDisabled};
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
            color: ${textColorDisabled};
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
