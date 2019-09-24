import styled, { css } from 'styled-components';
import { BUTTON_ICON_SIZES } from './ButtonIcon.consts';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const StyledButtonIcon = styled.button`
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 50px;
    background-color: transparent;
    cursor: pointer;
    padding: 12px;
    color: ${({ theme }) => theme.buttonIcon.colorPrimary};

    /* isDisabled styling */
    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${({ theme }) => theme.buttonIcon.colorDisabled};
    `};


    /* Sizes styling */
    ${({ size }) => size === BUTTON_ICON_SIZES.SMALL && css`
        font-size: ${({ theme }) => theme.buttonIcon.sizeSmall};
        padding: 12px;
    `};

    ${({ size }) => size === BUTTON_ICON_SIZES.LARGE && css`
        font-size: ${({ theme }) => theme.buttonIcon.sizeLarge};
        padding: 12px;
    `};

    &:after {
        border: 0;
        pointer-events: none;
    }

    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.buttonIcon.backgroundColorHover};
        color: ${({ theme }) => theme.buttonIcon.colorHover};
    }

    &:active:after {
        border: 0;
    }
`;

export default StyledButtonIcon;

StyledButtonIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_ICON_SIZES)).isRequired,
    theme: PropTypes.shape({
        buttonIcon: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
};

StyledButtonIcon.defaultProps = {
    theme: defaultTheme,
};
