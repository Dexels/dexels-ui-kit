import PropTypes from 'prop-types';
import React from 'react';
import { StyledWrapper } from './Wrapper.sc';
import { WRAPPER_WIDTHS } from './Wrapper.consts';

const Wrapper = ({ children, isTransparent, width }) => (
    <StyledWrapper isTransparent={isTransparent} width={width}>
        {children}
    </StyledWrapper>
);

Wrapper.widths = WRAPPER_WIDTHS;

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    isTransparent: PropTypes.bool.isRequired,
    width: PropTypes.oneOf(Object.values(Wrapper.widths)).isRequired,
};

export default Wrapper;
