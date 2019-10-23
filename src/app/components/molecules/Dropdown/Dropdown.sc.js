import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDropdown = styled.div`
    ${setBoxSizing()};
    position: relative;

    &::after {
        display: block;
        height: 1px;
        content: '';

        ${({ isFocused }) => isFocused && css`
            background-color: ${({ theme }) => theme.colorSecondary.dark};
        `};

        ${({ isValid }) => isValid && css`
            background-color: ${({ theme }) => theme.colorValid.main};
        `};

        ${({ hasError }) => hasError && css`
            background-color: ${({ theme }) => theme.colorError.main};
        `};

        ${({ isDisabled }) => isDisabled && css`
            background-color: transparent;
        `};
    }
`;

StyledDropdown.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export const Select = styled.select`
    ${textStyling(availableTextStyles().body1)};
    appearance: none;
    display: block;
    outline: none;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colorDark.main};
    border-radius: 0;
    background-color: ${({ theme }) => theme.colorLight.light};
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: ${({ theme }) => `calc(${theme.spacingValue} * 3.5)`};
    color: ${({ theme }) => theme.colorDark.main};

    ${({ isPlaceholderSelected }) => isPlaceholderSelected && css`
        color: ${({ theme }) => theme.colorMedium.dark};
    `};

    ${({ isFocused, isHovered }) => (isFocused || isHovered) && css`
        border-color: ${({ theme }) => theme.colorSecondary.dark};
    `};

    ${({ isValid }) => isValid && css`
        border-color: ${({ theme }) => theme.colorValid.main};
        color: ${({ theme }) => theme.colorValid.main};
    `};

    ${({ hasError }) => hasError && css`
        border-color: ${({ theme }) => theme.colorError.main};
        color: ${({ theme }) => theme.colorError.main};
    `};

    ${({ isDisabled }) => isDisabled && css`
        border-color: ${({ theme }) => theme.colorDisabled.main};
        color: ${({ theme }) => theme.colorDisabled.main};
        pointer-events: none;
    `};
`;

Select.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isPlaceholderSelected: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export const IconWrapper = styled.div`
    ${textStyling(availableTextStyles().h1)};
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1;
    color: ${({ theme }) => theme.colorPrimary.dark};
    pointer-events: none;

    ${({ isFocused }) => isFocused && css`
        transform: rotate(180deg);
    `};

    ${({ isValid }) => isValid && css`
        color: ${({ theme }) => theme.colorValid.main};
    `};

    ${({ hasError }) => hasError && css`
        color: ${({ theme }) => theme.colorError.main};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled.main};
    `};

    span {
        display: block;
    }
`;

IconWrapper.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }) => `calc(${theme.spacingValue} / 2)`} 0 0;
`;
