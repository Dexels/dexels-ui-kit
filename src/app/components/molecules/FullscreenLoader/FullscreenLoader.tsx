import { FullscreenLoaderType } from './types';
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
    type?: FullscreenLoaderType;
}

// @TODO: Add other loaders
export const FullscreenLoader: React.FunctionComponent<FullscreenLoaderProps> = ({ amount, className, type }) => {
    switch (type) {
        case FullscreenLoaderType.CIRCLES:
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

FullscreenLoader.defaultProps = {
    amount: 5,
    className: '',
    type: FullscreenLoaderType.CIRCLES,
};

export default FullscreenLoader;
