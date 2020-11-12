import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { DropdownVariant } from '../../../../lib';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

export enum OpenDirection {
    DOWN = 'DOWN',
    UP = 'UP',
}

export const StyledDropdownMultiSelect = styled.div`
    ${setBoxSizing()}
    position: relative;
`;

export const DialogFooterWrapper = styled.div``;
export const DropdownWrapper = styled.div``;

interface ListWrapperProps {
    elevation: Elevation;
    openDirection: OpenDirection;
    variant?: DropdownVariant;
}

export const ListWrapper = styled.div<ListWrapperProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    position: absolute;
    z-index: 2;
    margin: ${({ theme }): string => theme.spacing(1, 0, 0, 0)};
    border-radius: ${({ theme }): string => theme.spacing(1)};
    background-color: ${({ theme }): string => theme.shades.nine};
    width: 100%;
    ${({ openDirection, variant, theme }): SimpleInterpolation => {
        if (openDirection === OpenDirection.UP) {
            return `
                margin-bottom: 5px;
                bottom: ${variant === DropdownVariant.COMPACT ? theme.spacing(3.5) : theme.spacing(6)}
            `;
        }

        return '';
    }}
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
