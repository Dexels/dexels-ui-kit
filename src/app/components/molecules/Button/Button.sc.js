import { BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import styled, { css } from 'styled-components';
import textStyling, { TEXT_STYLING_SIZES } from '../../../styles/mixins/textStyling';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';

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
        background-color: transparent;
        color: ${({ theme }) => theme.buttonPrimaryColor};
    `};

    ${({ variant }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent;
        color: ${({ theme }) => theme.buttonPrimaryColor};
        padding: 0;
        min-height: 0;
        border: 0;
    `};

    /* Exception styling */
    ${({ isDisabled, variant }) => isDisabled && variant !== BUTTON_VARIANTS.FILLED && css`
        color: ${({ theme }) => theme.buttonDisabledColor};
    `};
`;

StyledButton.propTypes = {
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
};

StyledButton.defaultProps = {
    theme: defaultTheme,
};

export const Text = styled.p`
    flex: 0 0 auto;
`;
