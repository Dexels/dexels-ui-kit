import React, { FunctionComponent, MouseEventHandler } from 'react';
import { StyledOverlay } from './Overlay.sc';

export interface OverlayProps {
    className?: string;
    isVisible?: boolean;
    onClick?: MouseEventHandler;
}

export const Overlay: FunctionComponent<OverlayProps> = ({
    className,
    isVisible = true,
    onClick,
}) => (
    <StyledOverlay
        className={className}
        isClickable={Boolean(onClick)}
        isVisible={isVisible}
        onClick={onClick}
    />
);

export default Overlay;
