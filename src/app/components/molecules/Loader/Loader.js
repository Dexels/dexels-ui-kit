import { LOADER_SIZES, LOADER_VARIANTS } from './Loader.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledLoader } from './Loader.sc';

const Loader = ({ isInverted, size, variant }) => (
    <StyledLoader isInverted={isInverted} size={size} variant={variant}>
        <div />
        <div />
        <div />
    </StyledLoader>
);

Loader.sizes = LOADER_SIZES;
Loader.variants = LOADER_VARIANTS;

Loader.propTypes = {
    isInverted: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(Loader.sizes)).isRequired,
    variant: PropTypes.oneOf(Object.values(Loader.variants)),
};

Loader.defaultProps = {
    isInverted: false,
    variant: null,
};

export default Loader;
