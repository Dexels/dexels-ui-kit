import { BUTTON_ICON_SIZES, BUTTON_ICON_VARIANTS } from './ButtonIcon.consts';
import {
    colorButtonLight,
    colorDisabled,
    colorPrimary,
    colorPrimaryHover,
    themeModes,
} from '../../../styles/theme/theme';
import { spacingUnit, themeLayouts } from '../../../styles/theme/layout';
import styled, { css } from 'styled-components';
import { grey2 } from '../../../styles/colors/colors';
import PropTypes from 'prop-types';
import styledTheming from 'styled-theming';

const buttonIconFontSize = styledTheming.variants('layout', 'size', {
    [BUTTON_ICON_SIZES.LARGE]: {
        [themeLayouts.basic]: '20px',
        [themeLayouts.compact]: '18px',
    },
    [BUTTON_ICON_SIZES.MEDIUM]: {
        [themeLayouts.basic]: '18px',
        [themeLayouts.compact]: '16px',
    },
    [BUTTON_ICON_SIZES.SMALL]: {
        [themeLayouts.basic]: '14px',
        [themeLayouts.compact]: '12px',
    },
});

const buttonBackgroundColorHover = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.buttonBackgroundColorHover || grey2,
    [themeModes.dark]: grey2,
    [themeModes.light]: grey2,
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
    font-size: ${buttonIconFontSize};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${colorDisabled};
    `};

    ${({ variant }) => variant === BUTTON_ICON_VARIANTS.DEFAULT && css`
        color: ${colorPrimary};

        &:focus,
        &:hover {
            background-color: ${buttonBackgroundColorHover};
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
