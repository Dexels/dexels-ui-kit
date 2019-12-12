import PropTypes from 'prop-types';
import React from 'react';
import { StyledWrapper } from './Wrapper.sc';

const Wrapper = ({
    children,
    className,
    hasYearSelector,
    isFocused,
    onMouseEnter,
    onMouseLeave,
}) => (
    <StyledWrapper
        className={className}
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
    className: PropTypes.string,
    hasYearSelector: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
};

Wrapper.defaultProps = {
    className: '',
    hasYearSelector: false,
};

export default Wrapper;
