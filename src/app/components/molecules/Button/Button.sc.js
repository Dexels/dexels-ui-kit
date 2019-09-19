import { BUTTON_DIRECTIONS, BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import styled, { css } from 'styled-components';
import textStyling, { TEXT_STYLING_SIZES } from '../../../styles/mixins/textStyling';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';

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
    border: 1px solid ${({ theme }) => theme.buttonPrimaryColor};
    background-color: ${({ theme }) => theme.buttonPrimaryColor};
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme.buttonTextColor};

    &:focus,
    &:hover {
        background-color: ${({ theme }) => theme.buttonHoverColor};
        border-color: ${({ theme }) => theme.buttonHoverColor};
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
        background-color: ${({ theme }) => theme.buttonDisabledColor};
        border-color: ${({ theme }) => theme.buttonDisabledColor};
    `};

    /* Sizes styling */
    ${({ size }) => size === BUTTON_SIZES.SMALL && css`
        ${textStyling(TEXT_STYLING_SIZES.BUTTON_SMALL)};
        min-height: ${({ theme }) => theme.buttonSmallHeight};
        border-radius: ${({ theme }) => theme.buttonSmallBorderRadius};
        padding: 6px 16px;
    `};

    ${({ size }) => size === BUTTON_SIZES.LARGE && css`
        ${textStyling(TEXT_STYLING_SIZES.BUTTON_LARGE)};
        min-height: ${({ theme }) => theme.buttonLargeHeight};
        border-radius: ${({ theme }) => theme.buttonLargeBorderRadius};
        padding: 12px 16px;
    `};

    /* Variants styling */
    ${({ variant }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        background-color: transparent !important;
        color: ${({ theme }) => theme.buttonPrimaryColor};

        &:focus,
        &:hover {
            color: ${({ theme }) => theme.buttonHoverColor};
        }
    `};

    ${({ variant }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent !important;
        color: ${({ theme }) => theme.buttonPrimaryColor};
        padding: 0;
        min-height: 0;
        border: 0;

        &:focus,
        &:hover {
            color: ${({ theme }) => theme.buttonHoverColor};
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
        buttonDisabledColor: PropTypes.string.isRequired,
        buttonLargeBorderRadius: PropTypes.string.isRequired,
        buttonLargeHeight: PropTypes.string.isRequired,
        buttonPrimaryColor: PropTypes.string.isRequired,
        buttonSmallBorderRadius: PropTypes.string.isRequired,
        buttonSmallHeight: PropTypes.string.isRequired,
        buttonTextColor: PropTypes.string.isRequired,
    }).isRequired,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
};

StyledButton.defaultProps = {
    theme: defaultTheme,
};
