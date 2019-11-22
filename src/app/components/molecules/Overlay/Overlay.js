import PropTypes from 'prop-types';
import React from 'react';
import { StyledOverlay } from './Overlay.sc';

const Overlay = ({
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
    />
);

Overlay.propTypes = {
    height: PropTypes.number,
    isFullscreen: PropTypes.bool,
    isVisible: PropTypes.bool,
    width: PropTypes.number,
};

Overlay.defaultProps = {
    height: 80,
    isFullscreen: true,
    isVisible: true,
    width: 80,
};

export default Overlay;
