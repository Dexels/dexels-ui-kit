import PropTypes from 'prop-types';
import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.sc';

const ErrorMessage = ({ children }) => (
    <StyledErrorMessage>
        {children}
    </StyledErrorMessage>
);

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorMessage;
