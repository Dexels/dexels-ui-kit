import React, { FunctionComponent, ReactNode } from 'react';
import { StyledErrorMessage } from './ErrorMessage.sc';

export interface ErrorMessageProps {
    children?: ReactNode;
    className?: string;
    isOutlineVariant: boolean;
}

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ children, className, isOutlineVariant }) => (
    <StyledErrorMessage className={className} isOutlineVariant={isOutlineVariant}>
        {children}
    </StyledErrorMessage>
);

export default ErrorMessage;
