import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDropdown = styled.div`
    ${setBoxSizing()};
    position: relative;
`;

export const IconWrapper = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1;
    color: ${({ theme }) => theme.dropdown.colorDefault};
    pointer-events: none;

    ${({ hasError, theme }) => hasError && css`
        color: ${theme.dropdown.colorError};
    `};

    ${({ isValid, theme }) => isValid && css`
        color: ${theme.dropdown.colorValid};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.dropdown.colorDisabled};
    `};

    span {
        display: block;
    }
`;

IconWrapper.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        dropdown: PropTypes.shape({
            colorDefault: PropTypes.string.isRequired,
            colorDisabled: PropTypes.string.isRequired,
        }).isRequired,
        textStyling: PropTypes.func.isRequired,
    }).isRequired,
};

IconWrapper.defaultProps = {
    theme: defaultTheme,
};

export const Select = styled.select`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    appearance: none;
    display: block;
    outline: none;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.dropdown.colorDefault};
    border-radius: 0;
    background-color: ${({ theme }) => theme.dropdown.backgroundColor};
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: 28px;
    color: ${({ theme }) => theme.dropdown.colorDefault};

    ${({ isPlaceholderSelected, theme }) => isPlaceholderSelected && css`
        color: ${theme.dropdown.placeholderColor};
    `};

    ${({ hasError, theme }) => hasError && css`
        border-color: ${theme.dropdown.colorError};
        color: ${theme.dropdown.colorError};
    `};

    ${({ isValid, theme }) => isValid && css`
        border-color: ${theme.dropdown.colorValid};
        color: ${theme.dropdown.colorValid};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.dropdown.colorDisabled};
        color: ${theme.dropdown.colorDisabled};
        pointer-events: none;
    `};

    &:focus {
        border-color: ${({ theme }) => theme.dropdown.colorFocus};

        + ${IconWrapper} {
            transform: rotate(180deg);
            color: ${({ theme }) => theme.dropdown.colorFocus};
        }
    }
`;

Select.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isPlaceholderSelected: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        dropdown: PropTypes.shape({
            backgroundColor: PropTypes.string.isRequired,
            colorDefault: PropTypes.string.isRequired,
            colorDisabled: PropTypes.string.isRequired,
            colorFocus: PropTypes.string.isRequired,
            placeholderColor: PropTypes.string.isRequired,
        }).isRequired,
        textStyling: PropTypes.func.isRequired,
    }).isRequired,
};

Select.defaultProps = {
    theme: defaultTheme,
};

export const ErrorMessageWrapper = styled.div`
    margin: 4px 0 0;
`;
