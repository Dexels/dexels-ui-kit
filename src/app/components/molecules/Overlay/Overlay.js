import PropTypes from 'prop-types';
import React from 'react';
import { StyledOverlay } from './Overlay.sc';

const Overlay = ({ className, isVisible, onClick }) => (
    <StyledOverlay
        className={className}

        isVisible={isVisible}
        onClick={onClick}
    />
);

Overlay.propTypes = {
    className: PropTypes.string,
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
};

Overlay.defaultProps = {
    className: '',
    isVisible: true,
    onClick: null,
};

export default Overlay;
