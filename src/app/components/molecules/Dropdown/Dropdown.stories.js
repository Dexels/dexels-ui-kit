import {
    array,
    boolean,
    select,
} from '@storybook/addon-knobs';
import Dropdown from './Dropdown';
import React from 'react';

export default { title: 'molecules/Dropdown' };

export const Configurable = () => (
    <Dropdown
        elevation={select('Elevation', Dropdown.elevations, Dropdown.defaultProps.elevation)}
        isDisabled={boolean('Is disabled', Dropdown.defaultProps.isDisabled)}
        items={array('Items', ['New York', 'Dublin', 'California', 'Athens', 'Denver', 'Neverland'])}
    />
);
