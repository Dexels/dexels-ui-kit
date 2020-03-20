import React, { FunctionComponent } from 'react';
import { StyledErrorMessage } from './ErrorMessage.sc';

export interface ErrorMessageProps {
    className?: string;
}

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ children, className }) => (
    <StyledErrorMessage className={className}>
        {children}
    </StyledErrorMessage>
);

export default ErrorMessage;
