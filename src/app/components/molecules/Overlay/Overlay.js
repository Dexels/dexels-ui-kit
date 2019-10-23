import PropTypes from 'prop-types';
import React from 'react';
import { StyledOverlay } from './Overlay.sc';

const Overlay = ({
    children,
    height,
    isFullscreen,
    isVisible,
    width,
}) => (
    <StyledOverlay
        height={height}
        isFullscreen={isFullscreen}
        isVisible={isVisible}
        width={width}
    >
        {children}
    </StyledOverlay>
);

Overlay.propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string,
    isFullscreen: PropTypes.bool,
    isVisible: PropTypes.bool,
    width: PropTypes.string,
};

Overlay.defaultProps = {
    height: '80px',
    isFullscreen: true,
    isVisible: true,
    width: '80px',
};

export default Overlay;
