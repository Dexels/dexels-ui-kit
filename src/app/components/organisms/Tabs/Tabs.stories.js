import { boolean, select } from '@storybook/addon-knobs';
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
        hasFullWidthTabHeaders={boolean('Has fullwidth tab headers', Tabs.defaultProps.hasFullWidthTabHeaders)}
        tabs={[{
            content: comp,
            disabled: true,
            title: 'Tab 1',
        },
        {
            content: 'Tab2 content',
            disabled: false,
            title: 'Tab 2',
        },
        {
            content: 'Tab3 content',
            disabled: false,
            title: 'Tab 3',
        }]}
    />
);
