import { BUTTON_ICON_SIZES, BUTTON_ICON_VARIANTS } from './ButtonIcon.consts';
import {
    colorButtonLight,
    colorDisabled,
    colorPrimary,
    colorPrimaryHover,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import { grey2 } from '../../../styles/colors/colors';
import PropTypes from 'prop-types';
import { spacingUnit } from '../../../styles/theme/layout';
import { theme } from 'styled-theming';

const fontSize = theme.variants('layout', 'size', {
    [BUTTON_ICON_SIZES.LARGE]: {
        basic: '20px',
        compact: '18px',
    },
    [BUTTON_ICON_SIZES.MEDIUM]: {
        basic: '18px',
        compact: '16px',
    },
    [BUTTON_ICON_SIZES.SMALL]: {
        basic: '14px',
        compact: '12px',
    },
});

const backgroundColorHover = theme('mode', {
    basic: grey2,
    dark: grey2,
    light: grey2,
});

export const StyledButtonIcon = styled.button`
    display: flex;
    align-items: center;
    outline: none;
    border: 0;
    border-radius: 100%;
    background-color: transparent;
    cursor: pointer;
    padding: calc(${spacingUnit} * 1.5);
    font-size: ${fontSize};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${colorDisabled};
    `};

    ${({ variant }) => variant === BUTTON_ICON_VARIANTS.DEFAULT && css`
        color: ${colorPrimary};

        &:focus,
        &:hover {
            background-color: ${backgroundColorHover};
            color: ${colorPrimaryHover};
        }
    `};

    ${({ variant }) => variant === BUTTON_ICON_VARIANTS.HEADER && css`
        color: ${colorButtonLight};

        &:focus,
        &:hover {
            background-color: ${colorButtonLight};
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
    variant: PropTypes.oneOf(Object.values(BUTTON_ICON_VARIANTS)).isRequired,
};

export default StyledButtonIcon;
