import { ButtonVariant, Size } from '../../../types';
import styled, { css, keyframes } from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

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

interface StyledLoaderProps {
    isInverted: boolean;
    size: Size;
    variant: ButtonVariant;
}

export const StyledLoader = styled.div<StyledLoaderProps>`
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
        ${({ isInverted, theme: { button }, variant }) => variant === ButtonVariant.FILLED && css`
            background-color: ${isInverted ? button.filled.backgroundColor.loaderInverted : button.filled.backgroundColor.loader};
        `}

        ${({ isInverted, theme: { button }, variant }) => variant === ButtonVariant.OUTLINE && css`
            background-color: ${isInverted ? button.outline.backgroundColor.loaderInverted : button.outline.backgroundColor.loader};
        `}

        ${({ isInverted, theme: { button }, variant }) => variant === ButtonVariant.TEXT_ONLY && css`
            background-color: ${isInverted ? button.textOnly.loaderInverted : button.textOnly.loader};
        `}

        ${({ size, theme }) => css`
            ${size === Size.SMALL && css`
                width: ${theme.spacing(1)};
                height: ${theme.spacing(1)};
            `}

            ${size === Size.MEDIUM && css`
                width: ${theme.spacing(1.25)};
                height: ${theme.spacing(1.25)};
            `}

            ${size === Size.LARGE && css`
                width: ${theme.spacing(1.5)};
                height: ${theme.spacing(1.5)};
            `}

            ${size === Size.XLARGE && css`
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

StyledLoader.defaultProps = {
    theme: themeBasic,
};

export default StyledLoader;
