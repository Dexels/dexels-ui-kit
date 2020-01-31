import { ButtonVariant, Size } from '../../../types';
import React from 'react';
import { StyledLoader } from './Loader.sc';

export interface LoaderProps {
    className?: string;
    isInverted?: boolean;
    size?: Size;
    variant?: ButtonVariant;
}

export const Loader: React.FunctionComponent<LoaderProps> = ({
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

Loader.defaultProps = {
    className: '',
    isInverted: false,
};

export default Loader;
