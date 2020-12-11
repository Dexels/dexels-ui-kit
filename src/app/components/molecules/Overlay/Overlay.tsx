import React, { FunctionComponent, MouseEventHandler } from 'react';
import { StyledOverlay } from './Overlay.sc';

export interface OverlayProps {
    children?: never;
    className?: string;
    isModalSidePanel?: boolean; // When used within a modal, then z-index needs to be handled correctly
    isVisible?: boolean;
    onClick?: MouseEventHandler;
}

export const Overlay: FunctionComponent<OverlayProps> = ({
    className,
    isModalSidePanel = false,
    isVisible = true,
    onClick,
}) => (
    <StyledOverlay
        className={className}
        isClickable={Boolean(onClick)}
        isModalSidePanel={isModalSidePanel}
        isVisible={isVisible}
        onClick={onClick}
    />
);

export default Overlay;
