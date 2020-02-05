import React, { FunctionComponent, useContext } from 'react';
import SkeletonLoader, { SkeletonProps, SkeletonTheme } from 'react-loading-skeleton';
import { ThemeContext } from 'styled-components';

export const Skeleton: FunctionComponent<SkeletonProps> = ({
    circle,
    count,
    duration,
    height,
    width,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <SkeletonTheme color={theme.shades.seven} highlightColor={theme.shades.nine}>
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
