import PropTypes from 'prop-types';
import React from 'react';
import { StyledWrapper } from './Wrapper.sc';

const Wrapper = ({
    children,
    hasYearSelector,
    isFocused,
    onMouseEnter,
    onMouseLeave,
}) => (
    <StyledWrapper
        hasYearSelector={hasYearSelector}
        isFocused={isFocused}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {children}
    </StyledWrapper>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    hasYearSelector: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
};

Wrapper.defaultProps = {
    hasYearSelector: false,
};

export default Wrapper;
