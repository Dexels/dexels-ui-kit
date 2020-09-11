import styled, { css, SimpleInterpolation } from 'styled-components';
import Button from '../../molecules/Button/Button';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const ToggleButton = styled(Button)`
    margin: 0;
    ${({ isInverted, theme, isDisabled }): SimpleInterpolation => {
        if (isDisabled) {
            return css`
                border-color: ${theme.button.filled.backgroundColor.disabled};
                background-color: ${theme.button.filled.backgroundColor.disabled};
                color: ${theme.button.filled.color.disabled};
            `;
        }

        if (isInverted) {
            return css`
                border-color: ${theme.button.filled.backgroundColor.disabled};
                background-color: ${theme.button.filled.backgroundColor.disabled};
            `;
        }

        const colors = `
            border-color: ${theme.button.filled.backgroundColor.primary};
            background-color: ${theme.button.filled.backgroundColor.primary};
        `;

        return css`
            ${colors}
            pointer-events: none;

            &:focus {
                ${colors}
            }
        `;
    }}
`;

ToggleButton.defaultProps = {
    theme: themeBasic,
};

export const ToggleOn = styled(ToggleButton)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

export const ToggleOff = styled(ToggleButton)`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`;
