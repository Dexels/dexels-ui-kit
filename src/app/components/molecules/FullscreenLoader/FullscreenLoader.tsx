import { FullscreenLoaderTypes, FullscreenLoaderTypesMap } from './types';
import { FULLSCREEN_LOADER_TYPES } from './FullscreenLoader.consts';
import { LoaderCircles } from './LoaderCircles.sc';
import { LoaderWrapper } from './FullscreenLoader.sc';
import React from 'react';

const constructLoaderCircle = (amount: number) => {
    const LoaderCirclesArray = [];

    for (let i = 0; i < amount + 1; i += 1) {
        LoaderCirclesArray.push(<LoaderCircles key={i} opacity={i * 0.2} order={i} />);
    }

    return LoaderCirclesArray;
};

export interface FullscreenLoaderProps {
    amount?: number;
    className?: string;
    type?: FullscreenLoaderTypes;
}

interface FullscreenLoaderComponent extends React.FunctionComponent<FullscreenLoaderProps> {
    types: FullscreenLoaderTypesMap;
}

// @TODO: Add other loaders
export const FullscreenLoader: FullscreenLoaderComponent = ({ amount, className, type }) => {
    switch (type) {
        case FULLSCREEN_LOADER_TYPES.CIRCLES:
            return (
                <LoaderWrapper className={className}>
                    {constructLoaderCircle(amount)}
                </LoaderWrapper>
            );

        default:
            return (
                <LoaderWrapper className={className}>
                    {constructLoaderCircle(amount)}
                </LoaderWrapper>
            );
    }
};

FullscreenLoader.types = FULLSCREEN_LOADER_TYPES;

FullscreenLoader.defaultProps = {
    amount: 5,
    className: '',
    type: FullscreenLoader.types.CIRCLES,
};

export default FullscreenLoader;
