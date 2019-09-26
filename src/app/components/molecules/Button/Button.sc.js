import { BUTTON_DIRECTIONS, BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import IconWrapper from '../../atoms/IconWrapper/IconWrapper';
import PropTypes from 'prop-types';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import TextWrapper from '../../atoms/TextWrapper/TextWrapper';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const IconDiv = IconWrapper;

export const Text = TextWrapper;

export const StyledButton = styled.button`
    appearance: none;
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    align-items: center;
    outline: none;
    border: 1px solid ${({ theme }) => theme.button.colorPrimary};
    background-color: ${({ theme }) => theme.button.colorPrimary};
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;
    color: ${({ theme }) => theme.button.textColor};

    /* Direction styling */
    ${({ direction }) => direction === BUTTON_DIRECTIONS.RTL && css`
        ${Text} {
            order: 1;
        }

        ${IconDiv} {
            order: 2;
            margin: 0 0 0 6px;
        }
    `};

    /* Set the width to use full available */
    ${({ fullWidth }) => fullWidth && css`
        width: 100%;
        justify-content: center;
    `};

    /* isDisabled styling */
    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        background-color: ${({ theme }) => theme.button.colorDisabled};
        border-color: ${({ theme }) => theme.button.colorDisabled};
    `};

    /* Sizes styling */
    ${({ size }) => size === BUTTON_SIZES.SMALL && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().buttonSmall)};
        min-height: ${({ theme }) => theme.button.heightSmall};
        border-radius: ${({ theme }) => theme.button.borderRadiusSmall};
        padding: 6px 16px;
    `};

    ${({ size }) => size === BUTTON_SIZES.LARGE && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().buttonLarge)};
        min-height: ${({ theme }) => theme.button.heightLarge};
        border-radius: ${({ theme }) => theme.button.borderRadiusLarge};
        padding: 12px 16px;
    `};

    /* Variants styling */
    ${({ variant }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        background-color: transparent !important;
        color: ${({ theme }) => theme.button.colorPrimary};

        &:focus,
        &:hover {
            color: ${({ theme }) => theme.button.colorHover};
        }
    `};

    ${({ variant }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent !important;
        color: ${({ theme }) => theme.button.colorPrimary};
        padding: 0;
        min-height: 0;
        border: 0;

        &:focus,
        &:hover {
            color: ${({ theme }) => theme.button.colorHover};
        }
    `};

    /* Exception styling */
    ${({ isDisabled, variant }) => isDisabled && variant !== BUTTON_VARIANTS.FILLED && css`
        color: ${({ theme }) => theme.buttonDisabledColor};
    `};

    &:after {
        ${rippleEffect()}
    }

    &:active,
    &:hover {
        border-color: ${({ theme }) => theme.button.colorHover};
        background-color: ${({ theme }) => theme.button.colorHover};
    }

    &:active:after {
        transform: scale(0, 0);
        transition: none;
        opacity: .2;
    }
`;

StyledButton.propTypes = {
    direction: PropTypes.oneOf(Object.values(BUTTON_DIRECTIONS)).isRequired,
    fullWidth: PropTypes.bool,
    isDisabled: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)).isRequired,
    theme: PropTypes.shape({
        button: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
};

StyledButton.defaultProps = {
    theme: defaultTheme,
};
