import { FullscreenLoaderType } from './types';
import { LoaderCircles } from './LoaderCircles.sc';
import { LoaderWrapper } from './FullscreenLoader.sc';
import React from 'react';

const constructLoaderCircle = (amount: number) => (
    Array.from(Array(amount).keys()).map((key) => (
        <LoaderCircles key={key} opacity={key * 0.2} order={key} />
    ))
);

export interface FullscreenLoaderProps {
    amount?: number;
    className?: string;
    type?: FullscreenLoaderType;
}

export const FullscreenLoader: React.FunctionComponent<FullscreenLoaderProps> = ({
    amount = 5,
    className,
    type = FullscreenLoaderType.CIRCLES,
}) => {
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

export default FullscreenLoader;
