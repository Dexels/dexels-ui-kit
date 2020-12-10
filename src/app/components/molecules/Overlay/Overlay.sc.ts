import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { zIndex } from '../../../types';

export interface OverlayProps {
    isClickable: boolean;
    isModalSidePanel: boolean;
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
    /* When isModalSidePanel = true, then we need to make sure that the modal is not clickable as long as the sidepanel is visible */
    z-index: ${({ isModalSidePanel }): number => (isModalSidePanel ? zIndex.SIDEPANEL + 1 : zIndex.OVERLAY)};
    background-color: black;
    cursor: ${({ isClickable }): string => (isClickable ? 'pointer' : 'auto')};
    width: 100%;
    height: 100%;
`;

StyledOverlay.defaultProps = {
    theme: themeBasic,
};

export default StyledOverlay;
