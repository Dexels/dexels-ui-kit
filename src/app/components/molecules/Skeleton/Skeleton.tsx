import React from 'react';
import SkeletonLoader from 'react-loading-skeleton';
import { StyledSkeleton } from './Skeleton.sc';

export interface SkeletonProps {
    circle?: boolean;
    color?: string;
    count?: number;
    duration?: number;
    height?: string | number;
    highlightColor?: string;
    width?: string | number;
}

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({
    circle = false,
    color,
    count = 1,
    duration = 1.2,
    height,
    highlightColor,
    width,
}) => (
    <StyledSkeleton color={color} highlightColor={highlightColor}>
        <SkeletonLoader
            circle={circle}
            count={count}
            duration={duration}
            height={height}
            width={width}
        />
    </StyledSkeleton>
);

export default Skeleton;
