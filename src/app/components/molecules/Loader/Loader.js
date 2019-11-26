import { LOADER_TYPES } from './Loader.consts';
import { LoaderCircles } from './LoaderCircles.sc';
import { LoaderWrapper } from './Loader.sc';
import PropTypes from 'prop-types';
import React from 'react';

// @TODO: Add other loaders
const Loader = ({ type }) => {
    switch (type) {
        case LOADER_TYPES.CIRCLES:
            return (
                <LoaderWrapper>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <LoaderCircles id={item} key={item} opacity={item * 0.2} />
                    ))}
                </LoaderWrapper>
            );

        default:
            return (
                <LoaderWrapper>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <LoaderCircles id={item} key={item} opacity={item * 0.167} />
                    ))}
                </LoaderWrapper>
            );
    }
};

Loader.types = LOADER_TYPES;

Loader.propTypes = {
    type: PropTypes.oneOf(Object.values(Loader.types)),
};

Loader.defaultProps = {
    type: Loader.types.CIRCLES,
};

export default Loader;
