import {
    colorButtonDark,
    colorButtonLight,
    colorDisabled,
    colorDisabledInverted,
    colorPrimary,
    colorPrimaryHover,
    colorPrimaryInverted,
    themeModes,
} from '../../../styles/theme/theme';
import { spacingUnit, themeLayouts } from '../../../styles/theme/layout';
import styled, { css } from 'styled-components';
import { BUTTON_ICON_SIZES } from './ButtonIcon.consts';
import { grey2 } from '../../../styles/colors/colors';
import PropTypes from 'prop-types';
import theme from 'styled-theming';

const buttonIconFontSize = theme.variants('layout', 'size', {
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

const buttonBackgroundColorHover = theme('mode', {
    [themeModes.basic]: grey2,
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
    color: ${colorPrimary};
    cursor: pointer;
    padding: calc(${spacingUnit} * 1.5);
    font-size: ${buttonIconFontSize};

    ${({ isInverted }) => isInverted && css`
        background-color: ${colorPrimaryInverted};
        color: ${colorButtonDark};
    `};

    ${({ isDisabled, isInverted }) => isDisabled && css`
        pointer-events: none;
        color: ${colorDisabled};

        ${isInverted && css`
            background-color: ${colorDisabledInverted};
            color: ${colorButtonLight};
        `};
    `};

    &:focus,
    &:hover {
        background-color: ${buttonBackgroundColorHover};
        color: ${colorPrimaryHover};

        ${({ isInverted }) => isInverted && css`
            background-color: ${colorDisabledInverted};
            color: ${colorButtonLight};
        `};
    }

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
    isInverted: PropTypes.bool.isRequired,
};

export default StyledButtonIcon;
