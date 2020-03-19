import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export interface OverlayProps {
    isClickable: boolean;
    isVisible: boolean;
}

export const StyledOverlay = styled.div<OverlayProps>`
    ${setBoxSizing()}
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    visibility: ${({ isVisible }): string => (isVisible ? 'visible' : 'hidden')};
    opacity: ${({ isVisible }): string => (isVisible ? '0.4' : '0')};
    z-index: 2;
    background-color: black;
    cursor: ${({ isClickable }): string => (isClickable ? 'pointer' : 'auto')};
    width: 100%;
    height: 100%;
`;

StyledOverlay.defaultProps = {
    theme: themeBasic,
};

export default StyledOverlay;
