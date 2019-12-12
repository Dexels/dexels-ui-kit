import PropTypes from 'prop-types';
import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.sc';

const ErrorMessage = ({ children, className }) => (
    <StyledErrorMessage className={className}>
        {children}
    </StyledErrorMessage>
);

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ErrorMessage.defaultProps = {
    className: '',
};

export default ErrorMessage;
