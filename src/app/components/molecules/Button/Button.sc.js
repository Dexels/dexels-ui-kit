import { BUTTON_DIRECTIONS, BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const IconWrapper = styled.div`
    flex: 0 0 auto;
    order: 1;
    margin: 0 6px 0 0;
`;

export const Text = styled.p`
    flex: 0 0 auto;
    order: 2;
`;

export const StyledButton = styled.button`
    appearance: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    outline: none;
    border: 1px solid ${({ theme }) => theme.button.colorPrimary};
    background-color: ${({ theme }) => theme.button.colorPrimary};
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme.button.textColor};

    &:focus,
    &:hover {
        background-color: ${({ theme }) => theme.button.colorHover};
        border-color: ${({ theme }) => theme.button.colorHover};
    }

    /* Direction styling */
    ${({ direction }) => direction === BUTTON_DIRECTIONS.RTL && css`
        ${Text} {
            order: 1;
        }

        ${IconWrapper} {
            order: 2;
            margin: 0 0 0 6px;
        }
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
`;

StyledButton.propTypes = {
    direction: PropTypes.oneOf(Object.values(BUTTON_DIRECTIONS)).isRequired,
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
