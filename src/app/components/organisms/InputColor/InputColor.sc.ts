import styled, { css, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { themeBasic } from '../../../styles/theming/themes/basic';

export interface StyledInputColorProps {
    isDisabled: boolean;
}

export const StyledInputColor = styled.input<StyledInputColorProps>`
    border-radius: ${({ theme }): string => theme.spacing(0.5)};
    width: 64px;
    height: 22px;
    overflow: hidden;
    border: solid 1px #fff;
    ${getElevation(Elevation.LEVEL_2)}
    cursor: pointer;

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
