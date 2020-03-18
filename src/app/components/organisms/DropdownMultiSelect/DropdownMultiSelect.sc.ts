import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledDropdownMultiSelect = styled.div`
    ${setBoxSizing()}
    position: relative;
`;

interface ListWrapperProps {
    elevation: Elevation;
}

export const ListWrapper = styled.div<ListWrapperProps>`
    ${({ elevation }) => getElevation(elevation)}
    position: absolute;
    z-index: 2;
    margin: ${({ theme }) => theme.spacing(1, 0, 0, 0)};
    border-radius: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.shades.nine};
    width: 100%;
`;

ListWrapper.defaultProps = {
    theme: themeBasic,
};

interface StaticItemProps {
    elevation: Elevation;
}

export const StaticItem = styled.div<StaticItemProps>`
    ${rippleEffectInit()}
    ${({ elevation }) => getElevation(elevation)}
    margin: 0 0 2px;
    border-radius: ${({ theme }) => theme.spacing(1, 1, 0, 0)};
    background-color: ${({ theme }) => theme.hover.backgroundColor};
    padding: ${({ theme }) => theme.spacing(1, 1, 1, 2)};

    &::after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active::after {
        ${rippleEffectReset()}
    }

    &:hover {
        background-color: ${({ theme }) => theme.shades.six};
    }
`;

StaticItem.defaultProps = {
    theme: themeBasic,
};

interface ListProps {
    maxHeight?: string;
}

export const List = styled.ul<ListProps>`
    margin: ${({ theme }) => theme.spacing(1, 0)};
    background-color: ${({ theme }) => theme.card.backgroundColor};
    padding: ${({ theme }) => theme.spacing(0)};
    overflow: auto;
    list-style-type: none;

    ${({ maxHeight }) => maxHeight && css`
        max-height: ${maxHeight};
    `}
`;

List.defaultProps = {
    theme: themeBasic,
};

export const ListItem = styled.li`
    ${rippleEffectInit()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 2)};

    &::after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active::after {
        ${rippleEffectReset()}
    }

    &:hover {
        background-color: ${({ theme }) => theme.hover.backgroundColor};
    }
`;

ListItem.defaultProps = {
    theme: themeBasic,
};
