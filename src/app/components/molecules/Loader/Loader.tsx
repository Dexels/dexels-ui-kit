import {
    ButtonVariants,
    ButtonVariantsMap,
    Sizes,
    SizesMap,
} from '../../../types';
import { LOADER_SIZES, LOADER_VARIANTS } from './Loader.consts';
import React from 'react';
import { StyledLoader } from './Loader.sc';

export interface LoaderProps {
    className?: string;
    isInverted?: boolean;
    size?: Sizes;
    variant?: ButtonVariants;
}

interface LoaderComponent extends React.FunctionComponent<LoaderProps> {
    sizes: SizesMap;
    variants: ButtonVariantsMap;
}

export const Loader: LoaderComponent = ({
    className,
    isInverted,
    size,
    variant,
}) => (
    <StyledLoader
        className={className}
        isInverted={isInverted}
        size={size}
        variant={variant}
    >
        <div />
        <div />
        <div />
    </StyledLoader>
);

Loader.sizes = LOADER_SIZES;
Loader.variants = LOADER_VARIANTS;

Loader.defaultProps = {
    className: '',
    isInverted: false,
    variant: null,
};

export default Loader;
