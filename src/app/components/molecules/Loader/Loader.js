import { LOADER_TYPES } from './Loader.consts';
import { LoaderCircles } from './LoaderCircles.sc';
import { LoaderWrapper } from './Loader.sc';
import PropTypes from 'prop-types';
import React from 'react';

const constructLoaderCircle = (amount) => {
    const LoaderCirclesArray = [];

    for (let i = 0; i < amount + 1; i += 1) {
        LoaderCirclesArray.push(<LoaderCircles id={i} opacity={i * 0.2} />);
    }

    return LoaderCirclesArray;
};

// @TODO: Add other loaders
const Loader = ({ amount, type }) => {
    switch (type) {
        case LOADER_TYPES.CIRCLES:
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

Loader.types = LOADER_TYPES;

Loader.propTypes = {
    amount: PropTypes.number,
    type: PropTypes.oneOf(Object.values(Loader.types)),
};

Loader.defaultProps = {
    amount: 5,
    type: Loader.types.CIRCLES,
};

export default Loader;
