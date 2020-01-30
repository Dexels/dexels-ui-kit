import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.sc';

export interface ErrorMessageProps {
    className?: string;
}

export const ErrorMessage: React.FunctionComponent<ErrorMessageProps> = ({ children, className }) => (
    <StyledErrorMessage className={className}>
        {children}
    </StyledErrorMessage>
);

ErrorMessage.defaultProps = {
    className: '',
};

export default ErrorMessage;
