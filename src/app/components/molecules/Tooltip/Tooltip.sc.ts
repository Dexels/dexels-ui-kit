import { Easing, Elevation, zIndex } from '../../../types';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledTooltipProps {
    bottom: string;
    elevation: Elevation;
    isVisible: boolean;
    left: string;
    right: string;
    top: string;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const StyledTooltip = styled.span<StyledTooltipProps>`
    ${setBoxSizing()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    ${({ transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
            property: 'opacity',
        })}

    position: fixed;
    top: ${({ top }): string => top};
    right: ${({ right }): string => right};
    bottom: ${({ bottom }): string => bottom};
    left: ${({ left }): string => left};
    visibility: ${({ isVisible }): string => (isVisible ? 'visible' : 'hidden')};
    opacity: ${({ isVisible }): number => (isVisible ? 1 : 0)};
    z-index: ${zIndex.TOOLTIP};
    border-radius: ${({ theme }): string => theme.spacing(1)};
    background-color: ${({ theme }): string => theme.colorSecondary};
    padding: ${({ theme }): string => theme.spacing(0.5, 1, 0.5, 1)};
    text-align: center;
    color: ${({ theme }): string => theme.colorTextContrast.primary};
`;

StyledTooltip.defaultProps = {
    theme: themeBasic,
};

export default StyledTooltip;
