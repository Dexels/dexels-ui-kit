import React from 'react';
import { StyledOverlay } from './Overlay.sc';

export interface OverlayProps {
    className?: string;
    isVisible?: boolean;
    onClick?: React.MouseEventHandler;
}

export const Overlay: React.FunctionComponent<OverlayProps> = ({ className, isVisible, onClick }) => (
    <StyledOverlay
        className={className}
        isClickable={Boolean(onClick)}
        isVisible={isVisible}
        onClick={onClick}
    />
);

Overlay.defaultProps = {
    className: '',
    isVisible: true,
    onClick: null,
};

export default Overlay;
