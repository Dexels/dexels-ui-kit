import PropTypes from 'prop-types';
import React from 'react';
import { StyledWrapper } from './Wrapper.sc';

const Wrapper = ({ children }) => (
    <StyledWrapper>
        {children}
    </StyledWrapper>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
