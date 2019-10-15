import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDropdown = styled.div`
    ${setBoxSizing()};
    position: relative;
`;

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
    width: 100%;
    height: 28px;
    color: ${({ theme }) => theme.dropdown.colorDefault};

    ${({ isPlaceholderSelected, theme }) => isPlaceholderSelected && css`
        color: ${theme.dropdown.placeholderColor};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.dropdown.colorDisabled};
        color: ${theme.dropdown.colorDisabled};
        pointer-events: none;
    `};
`;

Select.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isPlaceholderSelected: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        dropdown: PropTypes.shape({
            backgroundColor: PropTypes.string.isRequired,
            colorDefault: PropTypes.string.isRequired,
            colorDisabled: PropTypes.string.isRequired,
            placeholderColor: PropTypes.string.isRequired,
        }).isRequired,
        textStyling: PropTypes.func.isRequired,
    }).isRequired,
};

Select.defaultProps = {
    theme: defaultTheme,
};

export const IconWrapper = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1;
    color: ${({ theme }) => theme.dropdown.colorDefault};
    pointer-events: none;

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.dropdown.colorDisabled};
    `};

    span {
        display: block;
    }
`;

IconWrapper.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
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
