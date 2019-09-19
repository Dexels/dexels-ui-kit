import { ICON_TYPES } from './Icon.consts';
import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ type }) => (
    <span className={`icon-${type}`} />
);

Icon.types = ICON_TYPES;

Icon.propTypes = {
    type: PropTypes.oneOf(Object.values(ICON_TYPES)).isRequired,
};

export default Icon;
