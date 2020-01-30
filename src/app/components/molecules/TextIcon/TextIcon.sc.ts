import styled, { css } from 'styled-components';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { Sizes } from '../../../types';
import { TEXT_ICON_SIZES } from './TextIcon.consts';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledTextIcon {
    size: Sizes;
}

export const StyledTextIcon = styled.div<StyledTextIcon>`
    ${setBoxSizing()}
    border-radius: 100%;
    background-color: ${({ theme }) => theme.shades.eight};
    text-align: center;
    color: ${({ theme }) => theme.shades.four};
    font-family: ${({ theme }) => theme.fontFamilyPrimary};

    ${({ size, theme }) => css`
        ${size === TEXT_ICON_SIZES.SMALL && css`
            width: ${theme.spacing(2.25)};
            height: ${theme.spacing(2.25)};
            line-height: ${theme.spacing(2.25)};
            font-size: ${theme.spacing(1.25)};
        `}

        ${size === TEXT_ICON_SIZES.MEDIUM && css`
            width: ${theme.spacing(2.5)};
            height: ${theme.spacing(2.5)};
            line-height: ${theme.spacing(2.5)};
            font-size: ${theme.spacing(1.5)};
        `}

        ${size === TEXT_ICON_SIZES.LARGE && css`
            width: ${theme.spacing(3)};
            height: ${theme.spacing(3)};
            line-height: ${theme.spacing(3)};
            font-size: ${theme.spacing(2)};
        `}

        ${size === TEXT_ICON_SIZES.XLARGE && css`
            width: ${theme.spacing(3.5)};
            height: ${theme.spacing(3.5)};
            line-height: ${theme.spacing(3.5)};
            font-size: ${theme.spacing(2.5)};
        `}
    `}
`;

StyledTextIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledTextIcon;
