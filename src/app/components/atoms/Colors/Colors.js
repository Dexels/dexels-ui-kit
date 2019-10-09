import * as colors from '../../../styles/colors/colors';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledColor } from './Colors.sc';

const Colors = ({ color }) => (
    <StyledColor
        color={color}
    />
);

Colors.colors = colors;

Colors.propTypes = {
    color: PropTypes.oneOf(Object.values(Colors.colors)).isRequired,
};

export default Colors;
