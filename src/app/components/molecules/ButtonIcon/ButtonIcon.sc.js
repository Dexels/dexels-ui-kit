import { BUTTON_ICON_SIZES, BUTTON_ICON_VARIANTS } from './ButtonIcon.consts';
import {
    buttonIconBackgroundColorHover,
    colorDisabled,
    colorHeadingLight,
    colorPrimary,
    colorPrimaryHover,
} from '../../../styles/theme/theme';
import { buttonIconFontSize, spacingUnit } from '../../../styles/theme/layout';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const StyledButtonIcon = styled.button`
    display: flex;
    align-items: center;
    outline: none;
    border: 0;
    border-radius: 100%;
    background-color: transparent;
    cursor: pointer;

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${colorDisabled};
    `};

    ${({ size }) => size === BUTTON_ICON_SIZES.SMALL && css`
        font-size: ${buttonIconFontSize};
        padding: calc(${spacingUnit} * 1.5);
    `};

    ${({ size }) => size === BUTTON_ICON_SIZES.LARGE && css`
        font-size: ${buttonIconFontSize};
        padding: calc(${spacingUnit} * 1.5);
    `};

    ${({ variant }) => variant === BUTTON_ICON_VARIANTS.DEFAULT && css`
        color: ${colorPrimary};

        &:focus,
        &:hover {
            background-color: ${buttonIconBackgroundColorHover};
            color: ${colorPrimaryHover};
        }
    `};

    ${({ variant }) => variant === BUTTON_ICON_VARIANTS.HEADER && css`
        color: ${colorHeadingLight};

        &:focus,
        &:hover {
            background-color: ${colorHeadingLight};
            color: ${colorPrimaryHover};
        }
    `};

    &:after {
        border: 0;
        pointer-events: none;
    }

    &:active:after {
        border: 0;
    }
`;

StyledButtonIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_ICON_SIZES)).isRequired,
    variant: PropTypes.oneOf(Object.values(BUTTON_ICON_VARIANTS)).isRequired,
};

export default StyledButtonIcon;
