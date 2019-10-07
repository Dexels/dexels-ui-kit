import { ICON_TYPES } from './Icon.consts';
import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ size, type }) => (
    <span className={`icon-${type}`} style={{ fontSize: size }} />
);

Icon.types = ICON_TYPES;

Icon.propTypes = {
    size: PropTypes.string,
    type: PropTypes.oneOf(Object.values(Icon.types)).isRequired,
};

Icon.defaultProps = {
    size: '24px',
};

export default Icon;
