import React, { FunctionComponent, useContext } from 'react';
import SkeletonLoader, { SkeletonProps as SkeletonLoaderProps, SkeletonTheme } from 'react-loading-skeleton';
import { ThemeContext } from 'styled-components';

export interface SkeletonProps extends SkeletonLoaderProps {
    color?: string;
    highlightColor?: string;
}

export const Skeleton: FunctionComponent<SkeletonProps> = ({
    circle,
    color,
    count,
    duration,
    height,
    highlightColor,
    width,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <SkeletonTheme color={color || theme.shades.seven} highlightColor={highlightColor || theme.shades.nine}>
            <SkeletonLoader
                circle={circle}
                count={count}
                duration={duration}
                height={height}
                width={width}
            />
        </SkeletonTheme>
    );
};

Skeleton.defaultProps = {
    circle: false,
    count: 1,
    duration: 1.2,
    height: undefined,
    width: undefined,
};

export default Skeleton;
