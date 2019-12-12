import PropTypes from 'prop-types';
import React from 'react';
import { StyledLoader } from './Loader.sc';

const Loader = ({ className }) => (
    <StyledLoader className={className}>
        <div />
    </StyledLoader>
);

Loader.propTypes = {
    className: PropTypes.string,
};

Loader.defaultProps = {
    className: '',
};

export default Loader;
