import {
    array,
    boolean,
    select,
} from '@storybook/addon-knobs';
import GenericDropdown from './GenericDropdown';
import React from 'react';

export default { title: 'molecules/GenericDropdown' };

export const Configurable = () => (
    <GenericDropdown
        elevation={select('Elevation', GenericDropdown.elevations, GenericDropdown.defaultProps.elevation)}
        isDisabled={boolean('Is disabled', GenericDropdown.defaultProps.isDisabled)}
        items={array('Items', ['New York', 'Dublin', 'California', 'Athens', 'Denver', 'Neverland'])}
    />
);
