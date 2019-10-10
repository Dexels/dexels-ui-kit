import {
    array,
    boolean,
    select,
    text,
} from '@storybook/addon-knobs';
import GenericDropdown from './GenericDropdown';
import React from 'react';

export default { title: 'molecules/GenericDropdown' };

const location = [
    {
        id: 0,
        value: 'New York',
    },
    {
        id: 1,
        value: 'Dublin',
    },
    {
        id: 2,
        value: 'California',
    },
    {
        id: 3,
        value: 'Athens',
    },
    {
        id: 4,
        value: 'Denver',
    },
    {
        id: 5,
        value: 'Neverland',
    },
];

let selectedItem;

function handleClick(item) {
    selectedItem = item;
}

export const Configurable = () => (
    <GenericDropdown
        elevation={select('Elevation', GenericDropdown.elevations, GenericDropdown.defaultProps.elevation)}
        handleClick={(item) => handleClick(item)}
        isDisabled={boolean('Is disabled', GenericDropdown.defaultProps.isDisabled)}
        items={array('Items', location)}
        title={text('Title', 'Select location')}
    />
);
