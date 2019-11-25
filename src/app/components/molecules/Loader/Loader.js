import { LoaderItem, StyledLoader } from './Loader.sc';
import React from 'react';

const Loader = () => (
    <StyledLoader>
        {[1, 2, 3, 4, 5].map((item) => (
            <LoaderItem id={item} key={item} opacity={item * 0.2} />
        ))}
    </StyledLoader>
);

export default Loader;
