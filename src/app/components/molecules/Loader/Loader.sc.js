import { LOADER_SIZES, LOADER_VARIANTS } from './Loader.consts';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

const loaderAnimation = keyframes`
    0% {
        transform: scale(1);
        opacity: .4;
    }

    50% {
        transform: scale(1.2);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: .4;
    }
`;

export const StyledLoader = styled.div`
    display: flex;

    div {
        margin: ${({ theme }) => theme.spacing(0.5)};
        border-radius: 50%;
        background-color: ${({ theme }) => theme.loader.primary};
        animation: ${loaderAnimation} 1.5s infinite ease-in-out;

        ${({ isInverted, theme }) => isInverted && css`
            background-color: ${theme.loader.secondary};
        `}

        /* This is a special part for loader inside a button */
        /* Should only do something when variant is not empty (null by default) */
        ${({ isInverted, theme: { button }, variant }) => variant === LOADER_VARIANTS.FILLED && css`
            background-color: ${isInverted ? button.filled.backgroundColor.loaderInverted : button.filled.backgroundColor.loader};
        `}

        ${({ isInverted, theme: { button }, variant }) => variant === LOADER_VARIANTS.OULINE && css`
            background-color: ${isInverted ? button.outline.backgroundColor.loaderInverted : button.outline.backgroundColor.loader};
        `}

        ${({ isInverted, theme: { button }, variant }) => variant === LOADER_VARIANTS.TEXT_ONLY && css`
            background-color: ${isInverted ? button.textOnly.loaderInverted : button.textOnly.loader};
        `}

        ${({ size, theme }) => css`
            ${size === LOADER_SIZES.SMALL && css`
                width: ${theme.spacing(1)};
                height: ${theme.spacing(1)};
            `}

            ${size === LOADER_SIZES.MEDIUM && css`
                width: ${theme.spacing(1.25)};
                height: ${theme.spacing(1.25)};
            `}

            ${size === LOADER_SIZES.LARGE && css`
                width: ${theme.spacing(1.5)};
                height: ${theme.spacing(1.5)};
            `}

            ${size === LOADER_SIZES.XLARGE && css`
                width: ${theme.spacing(1.75)};
                height: ${theme.spacing(1.75)};
            `}
        `}

        &:nth-child(2) {
            animation-delay: .5s;
        }

        &:nth-child(3) {
            animation-delay: 1s;
        }
    }
`;

StyledLoader.propTypes = {
    isInverted: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(LOADER_SIZES)).isRequired,
    theme: themePropTypes,
    variant: PropTypes.oneOf(Object.values(LOADER_VARIANTS)),
};

StyledLoader.defaultProps = {
    theme: themeBasic,
};

export default StyledLoader;
