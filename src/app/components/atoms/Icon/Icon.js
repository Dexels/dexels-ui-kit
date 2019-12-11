import { ICON_TYPES } from './Icon.consts';
import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ className, type }) => (
    <span className={`${className} ICON-${type}`} />
);

Icon.types = ICON_TYPES;

Icon.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(Object.values(Icon.types)).isRequired,
};

Icon.defaultProps = {
    className: '',
};

export default Icon;
