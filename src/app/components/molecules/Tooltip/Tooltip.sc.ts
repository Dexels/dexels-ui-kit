import { Easings, Elevations } from '../../../types';
import getElevation from '../../../styles/mixins/getElevation';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledTooltipProps {
    bottom: string;
    elevation: Elevations;
    isVisible: boolean;
    left: string;
    right: string;
    top: string;
    transitionDuration: number;
    transitionEasing: Easings;
}

export const StyledTooltip = styled.span<StyledTooltipProps>`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    ${({ elevation }) => getElevation(elevation)}
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
        property: 'opacity',
    })}

    position: fixed;
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    z-index: 99999999;
    border-radius: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.colorSecondary};
    padding: ${({ theme }) => theme.spacing(0.5, 1, 0.5, 1)};
    text-align: center;
    color: ${({ theme }) => theme.colorTextContrast.primary};
`;

StyledTooltip.defaultProps = {
    theme: themeBasic,
};

export default StyledTooltip;
