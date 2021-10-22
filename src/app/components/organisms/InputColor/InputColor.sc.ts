import styled, { css, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { themeBasic } from '../../../styles/theming/themes/basic';

export interface StyledInputColorProps {
    isDisabled: boolean;
}

export const StyledInputColor = styled.input<StyledInputColorProps>`
    border: none;
    border-radius: ${({ theme }): string => theme.spacing(0.5)};
    border-color: transparent;
    width: 64px;
    height: 22px;
    overflow: hidden;

    /* stylelint-disable indentation */
    ${({ isDisabled }): SimpleInterpolation =>
        !isDisabled &&
        css`
            ${getElevation(Elevation.LEVEL_6)}
            cursor: pointer;
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
