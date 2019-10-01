import PropTypes from 'prop-types';
import React from 'react';
import { StyledOverlay } from './Overlay.sc';

const Overlay = ({
    children,
    fullScreen,
    height,
    isVisible,
    width,
}) => (
    <StyledOverlay
        fullScreen={fullScreen}
        height={height}
        isVisible={isVisible}
        width={width}
    >
        {children}
    </StyledOverlay>
);

Overlay.propTypes = {
    children: PropTypes.node.isRequired,
    fullScreen: PropTypes.bool,
    height: PropTypes.string,
    isVisible: PropTypes.bool,
    width: PropTypes.string,
};

Overlay.defaultProps = {
    fullScreen: true,
    height: '80%',
    isVisible: true,
    width: '80%',
};

export default Overlay;
