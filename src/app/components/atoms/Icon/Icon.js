import { ICON_COLORS, ICON_TYPES } from './Icon.consts';
import { defaultIconSize } from '../../../styles/theme/layout';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledIcon } from './Icon.sc';

const Icon = ({ color, size, type }) => (
    <StyledIcon
        className={`icon-${type}`}
        color={color}
        size={size}
    />
);

Icon.colors = ICON_COLORS;
Icon.types = ICON_TYPES;

Icon.propTypes = {
    color: PropTypes.oneOf(Object.values(Icon.colors)),
    size: PropTypes.string,
    type: PropTypes.oneOf(Object.values(Icon.types)).isRequired,
};

Icon.defaultProps = {
    color: null,
    size: defaultIconSize,
};

export default Icon;
