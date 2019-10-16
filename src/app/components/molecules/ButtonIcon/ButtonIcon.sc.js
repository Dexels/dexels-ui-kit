import { BUTTON_ICON_VARIANTS, buttonIconFontSize } from './ButtonIcon.consts';
import {
    buttonIconBackgroundColorHover,
    colorButtonLight,
    colorDisabled,
    colorPrimary,
    colorPrimaryHover,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { spacingUnit } from '../../../styles/theme/layout';

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
            background-color: ${buttonIconBackgroundColorHover};
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
