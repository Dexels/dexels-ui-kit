import { array, select } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import React from 'react';
import Tabs from './Tabs';

export default { title: 'organisms/Tabs' };

const comp = (
    <Button
        onClick={() => {}}
    >
        {'Button for Panel 1'}
    </Button>
);

export const Configurable = () => (
    <Tabs
        elevation={select('Elevation', Tabs.elevations, Tabs.defaultProps.elevation)}
        tabs={array('Tabs', [{
            content: comp,
            title: 'Tab 1',
        },
        {
            content: 'Tab2 content',
            title: 'Tab 2',
        },
        {
            content: 'Tab3 content',
            title: 'Tab 3',
        }])}
    />
);
