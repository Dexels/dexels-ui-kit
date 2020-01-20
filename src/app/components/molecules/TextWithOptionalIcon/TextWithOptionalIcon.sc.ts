import { Directions, Sizes } from '../../../types';
import styled, { css } from 'styled-components';
import { TEXT_WITH_OPTIONAL_ICON_DIRECTIONS, TEXT_WITH_OPTIONAL_ICON_SIZES } from './TextWithOptionalIcon.consts';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setTruncate from '../../../styles/mixins/setTruncate';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface TextProps {
    isCapitalized: boolean;
    isTruncatable: boolean;
}

export const Text = styled.p<TextProps>`
    ${setBoxSizing()}
    ${({ isTruncatable }) => isTruncatable && setTruncate()}
    flex: 0 1 auto;
    order: 2;
    margin: 0;
    word-break: break-word;

    ${({ isCapitalized }) => isCapitalized && css`
        &::first-letter,
        span::first-letter {
            text-transform: uppercase;
        }
    `}
`;

interface IconWrapperProps {
    size: Sizes;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    order: 1;
    margin: ${({ theme }) => theme.spacing(0, 0.75, 0, 0)};

    span {
        display: block;
    }

    ${({ size }) => css`
        ${size === TEXT_WITH_OPTIONAL_ICON_SIZES.SMALL && css`
            font-size: 18px;
        `}

        ${size === TEXT_WITH_OPTIONAL_ICON_SIZES.MEDIUM && css`
            font-size: 20px;
        `}

        ${size === TEXT_WITH_OPTIONAL_ICON_SIZES.LARGE && css`
            font-size: 24px;
        `}
    `}
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

interface StyledTextWithOptionalIconProps {
    direction: Directions;
}

export const StyledTextWithOptionalIcon = styled.div<StyledTextWithOptionalIconProps>`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    ${({ direction, theme }) => direction === TEXT_WITH_OPTIONAL_ICON_DIRECTIONS.RTL && css`
        ${Text} {
            order: 1;
        }

        ${IconWrapper} {
            order: 2;
            margin: ${theme.spacing(0, 0, 0, 0.75)};
        }
    `}
`;

StyledTextWithOptionalIcon.defaultProps = {
    theme: themeBasic,
};
