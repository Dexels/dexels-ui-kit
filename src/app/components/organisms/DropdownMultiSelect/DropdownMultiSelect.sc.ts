import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledDropdownMultiSelect = styled.div`
    ${setBoxSizing()}
    position: relative;
`;

export const DialogFooterWrapper = styled.div``;
export const DropdownWrapper = styled.div``;

interface ListWrapperProps {
    elevation: Elevation;
}

export const ListWrapper = styled.div<ListWrapperProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    position: absolute;
    z-index: 2;
    margin: ${({ theme }): string => theme.spacing(1, 0, 0, 0)};
    border-radius: ${({ theme }): string => theme.spacing(1)};
    background-color: ${({ theme }): string => theme.shades.nine};
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
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    margin: 0 0 2px;
    border-radius: ${({ theme }): string => theme.spacing(1, 1, 0, 0)};
    background-color: ${({ theme }): string => theme.hover.backgroundColor};
    padding: ${({ theme }): string => theme.spacing(1, 1, 1, 2)};

    &::after {
        ${({ theme }): FlattenSimpleInterpolation => rippleEffect(theme.colorSecondary)}
    }

    &:active::after {
        ${rippleEffectReset()}
    }

    &:hover {
        background-color: ${({ theme }): string => theme.shades.six};
    }
`;

StaticItem.defaultProps = {
    theme: themeBasic,
};
