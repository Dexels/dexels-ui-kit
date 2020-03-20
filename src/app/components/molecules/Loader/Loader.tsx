import { ButtonVariant, Size } from '../../../types';
import React, { FunctionComponent } from 'react';
import { StyledLoader } from './Loader.sc';

export interface LoaderProps {
    className?: string;
    isInverted?: boolean;
    size: Size;
    variant?: ButtonVariant;
}

export const Loader: FunctionComponent<LoaderProps> = ({
    className,
    isInverted = false,
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

export default Loader;
