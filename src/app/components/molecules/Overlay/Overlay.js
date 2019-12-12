import PropTypes from 'prop-types';
import React from 'react';
import { StyledOverlay } from './Overlay.sc';

const Overlay = ({
    className,
    height,
    isFullscreen,
    isVisible,
    width,
}) => (
    <StyledOverlay
        className={className}
        height={height}
        isFullscreen={isFullscreen}
        isVisible={isVisible}
        width={width}
    />
);

Overlay.propTypes = {
    className: PropTypes.string,
    height: PropTypes.number,
    isFullscreen: PropTypes.bool,
    isVisible: PropTypes.bool,
    width: PropTypes.number,
};

Overlay.defaultProps = {
    className: '',
    height: 80,
    isFullscreen: true,
    isVisible: true,
    width: 80,
};

export default Overlay;
