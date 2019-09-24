import styled, { css } from 'styled-components';
import { BUTTONICON_SIZES } from './ButtonIcon.consts';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const StyledButtonIcon = styled.button`
    border: unset;
    border-radius: 50px;
    background-color: transparent;
    color: ${({ theme }) => theme.buttonIcon.colorPrimary};
    cursor: pointer;
    padding: 12px;

    /* isDisabled styling */
    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${({ theme }) => theme.buttonIcon.colorDisabled};
    `};


    /* Sizes styling */
    ${({ size }) => size === BUTTONICON_SIZES.SMALL && css`
        font-size: ${({ theme }) => theme.buttonIcon.sizeSmall};
        /* min-height: ${({ theme }) => theme.buttonIcon.sizeSmall};
        min-width: ${({ theme }) => theme.buttonIcon.sizeSmall}; */
        padding: 12px;
    `};

    ${({ size }) => size === BUTTONICON_SIZES.LARGE && css`
        font-size: ${({ theme }) => theme.buttonIcon.sizeLarge};
        /* min-height: ${({ theme }) => theme.buttonIcon.sizeLarge};
        min-width: ${({ theme }) => theme.buttonIcon.sizeLarge}; */
        padding: 12px;
    `};

    &:after {
        /* display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: scale(10, 10);
        transition: transform .5s, opacity 1s;
        opacity: 0;
        background-image: radial-gradient(circle, white 10%, transparent 10.01%);
        background-position: 50%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        content: ''; */
        pointer-events: none;
    }

    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.buttonIcon.backgroundColorHover};
        color: ${({ theme }) => theme.buttonIcon.colorHover};
    }

    &:active:after {
        border: unset;
        transform: scale(0, 0);
        transition: none;
        opacity: .2;
    }
`;

export default StyledButtonIcon;

StyledButtonIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTONICON_SIZES)).isRequired,
    theme: PropTypes.shape({
        buttonIcon: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
};

StyledButtonIcon.defaultProps = {
    theme: defaultTheme,
};
