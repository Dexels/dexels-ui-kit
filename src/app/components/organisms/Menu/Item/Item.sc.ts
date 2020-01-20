import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledItemProps {
    hasChildren: boolean;
    isDisabled: boolean;
    isParent: boolean;
}

export const StyledItem = styled.div<StyledItemProps>`
    ${rippleEffectInit()}

    &::after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active::after {
        ${rippleEffectReset()}
    }

    > a,
    > div {
        ${({ isParent, theme }) => theme.textStyling(isParent ? theme.availableTextStyles().h3 : theme.availableTextStyles().body2)}
        padding: ${({ hasChildren, isParent, theme }) => theme.spacing(0, hasChildren ? 0 : 3, 0, isParent ? 1 : 3.75)};
        min-height: ${({ isParent, theme }) => theme.spacing(isParent ? 6 : 4.5)};
        color: ${({ isParent, theme }) => (isParent ? theme.colorText.primary : theme.colorTextBody.primary)};
    }

    ${({ isParent, theme }) => isParent && css`
        border-top: 1px solid ${theme.shades.seven};
    `}

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;

        > a,
        > div {
            color: ${({ theme }) => theme.colorDisabled};
        }
    `}
`;

StyledItem.defaultProps = {
    theme: themeBasic,
};

export const Inner = styled.div`
    display: flex;
    align-items: center;
    border-left: ${({ theme }) => theme.spacing(0.5)} solid transparent;
    background-color: ${({ theme }) => theme.background.secondary};
    cursor: pointer;
    text-decoration: none;

    &:hover {
        border-left-color: ${({ theme }) => theme.shades.six};
        background-color: ${({ theme }) => theme.background.primary};
    }

    &.active {
        border-left-color: ${({ theme }) => theme.colorSecondary};
        background-color: ${({ theme }) => theme.background.primary};
        color: ${({ theme }) => theme.colorText.secondary};
        font-weight: 600;

        &:hover {
            background-color: ${({ theme }) => theme.background.secondary};
        }
    }
`;

Inner.defaultProps = {
    theme: themeBasic,
};

export const TextWrapper = styled.div`
    flex: 0 1 auto;
    overflow: hidden;
`;

export const IconWrapper = styled.div`
    flex: 0 0 auto;
    margin: 0 ${({ theme }) => theme.spacing(1.5)} 0 auto;
    font-size: 20px;
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};
