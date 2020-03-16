import styled, { css } from 'styled-components';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { Size } from '../../../types';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledTextIcon {
    size: Size;
}

export const StyledTextIcon = styled.div<StyledTextIcon>`
    ${setBoxSizing()}
    border-radius: 100%;
    background-color: ${({ theme }) => theme.shades.seven};
    text-align: center;
    color: ${({ theme }) => theme.shades.four};
    font-family: ${({ theme }) => theme.fontFamilyPrimary};

    ${({ size, theme }) => css`
        ${size === Size.SMALL && css`
            width: ${theme.spacing(2.5)};
            height: ${theme.spacing(2.5)};
            line-height: ${theme.spacing(2.5)};
            font-size: ${theme.spacing(1.25)};
        `}

        ${size === Size.MEDIUM && css`
            width: ${theme.spacing(3)};
            height: ${theme.spacing(3)};
            line-height: ${theme.spacing(3)};
            font-size: ${theme.spacing(1.5)};
        `}

        ${size === Size.LARGE && css`
            width: ${theme.spacing(3.5)};
            height: ${theme.spacing(3.5)};
            line-height: ${theme.spacing(3.5)};
            font-size: ${theme.spacing(1.75)};
        `}

        ${size === Size.XLARGE && css`
            width: ${theme.spacing(4.5)};
            height: ${theme.spacing(4.5)};
            line-height: ${theme.spacing(4.5)};
            font-size: ${theme.spacing(2.5)};
        `}
    `}
`;

StyledTextIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledTextIcon;
