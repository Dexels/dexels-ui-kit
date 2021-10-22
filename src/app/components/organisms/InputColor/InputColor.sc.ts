import styled, { css, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { themeBasic } from '../../../styles/theming/themes/basic';

export interface StyledInputColorProps {
    isDisabled: boolean;
}

export const StyledInputColor = styled.input<StyledInputColorProps>`
    border: 1px solid ${({ theme }): string => theme.shades.nine};
    border-radius: ${({ theme }): string => theme.spacing(0.5)};
    cursor: pointer;
    width: 64px;
    height: 22px;
    overflow: hidden;
    ${getElevation(Elevation.LEVEL_2)}

    /* stylelint-disable indentation */
    ${({ isDisabled }): SimpleInterpolation =>
        isDisabled &&
        css`
            border: none;
            border-color: transparent;
            box-shadow: unset;
            cursor: none;
        `}
    /* stylelint-enable indentation */

    ::-webkit-color-swatch-wrapper {
        border: none;
        border-radius: ${({ theme }): string => theme.spacing(0.5)};
        padding: 0;
    }

    ::-webkit-color-swatch {
        border: none;
        border-radius: ${({ theme }): string => theme.spacing(0.5)};
        padding: 0;
    }
`;

StyledInputColor.defaultProps = {
    theme: themeBasic,
};
