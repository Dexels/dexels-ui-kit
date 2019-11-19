import PropTypes from 'prop-types';
import React from 'react';
import { StyledWrapper } from './Wrapper.sc';

const Wrapper = ({ children, hasYearSelector, isFocused }) => (
    <StyledWrapper hasYearSelector={hasYearSelector} isFocused={isFocused}>
        {children}
    </StyledWrapper>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    hasYearSelector: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
};

Wrapper.defaultProps = {
    hasYearSelector: false,
};

export default Wrapper;
