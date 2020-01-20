import styled, { css } from 'styled-components';
import { StyledWrapperProps, WRAPPER_WIDTHS } from './types';
import { themeBasic } from '../../../app/styles/theming/themes/basic';

export const StyledWrapper = styled.div<StyledWrapperProps>`
    background-color: ${({ isTransparent, theme }) => (isTransparent ? 'transparent' : theme.background.primary)};
    padding-top: ${({ theme }) => theme.spacing(3)};
    padding-bottom: ${({ theme }) => theme.spacing(3)};
    min-height: 100vh;

    ${({ width }) => css`
        ${width === WRAPPER_WIDTHS.SMALL && css`
            padding-right: 25%;
            padding-left: 25%;
        `}

        ${width === WRAPPER_WIDTHS.MEDIUM && css`
            padding-right: 15%;
            padding-left: 15%;
        `}

        ${width === WRAPPER_WIDTHS.LARGE && css`
            padding-right: 5%;
            padding-left: 5%;
        `}
    `}
`;

StyledWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledWrapper;
