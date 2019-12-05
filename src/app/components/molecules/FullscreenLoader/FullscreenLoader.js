import { FULLSCREEN_LOADER_TYPES } from './FullscreenLoader.consts';
import { LoaderCircles } from './LoaderCircles.sc';
import { LoaderWrapper } from './FullscreenLoader.sc';
import PropTypes from 'prop-types';
import React from 'react';

const constructLoaderCircle = (amount) => {
    const LoaderCirclesArray = [];

    for (let i = 0; i < amount + 1; i += 1) {
        LoaderCirclesArray.push(<LoaderCircles id={i} key={i} opacity={i * 0.2} />);
    }

    return LoaderCirclesArray;
};

// @TODO: Add other loaders
const FullscreenLoader = ({ amount, type }) => {
    switch (type) {
        case FULLSCREEN_LOADER_TYPES.CIRCLES:
            return (
                <LoaderWrapper>
                    {constructLoaderCircle(amount)}
                </LoaderWrapper>
            );

        default:
            return (
                <LoaderWrapper>
                    {constructLoaderCircle(amount)}
                </LoaderWrapper>
            );
    }
};

FullscreenLoader.types = FULLSCREEN_LOADER_TYPES;

FullscreenLoader.propTypes = {
    amount: PropTypes.number,
    type: PropTypes.oneOf(Object.values(FullscreenLoader.types)),
};

FullscreenLoader.defaultProps = {
    amount: 5,
    type: FullscreenLoader.types.CIRCLES,
};

export default FullscreenLoader;
