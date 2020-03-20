import { boolean, select } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import { Elevation } from '../../../types';
import Tabs from './Tabs';

export default { title: 'organisms/Tabs' };

const comp = (
    <Button onClick={action('On click')}>
        {'Button for Panel 1'}
    </Button>
);

export const Configurable: FunctionComponent = () => (
    <Tabs
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        hasFullWidthTabHeaders={boolean('Has fullwidth tab headers', true)}
        tabs={[{
            content: comp,
            isDisabled: true,
            title: 'Tab 1',
        },
        {
            content: 'Tab2 content',
            isDisabled: false,
            title: 'Tab 2',
        },
        {
            content: 'Tab3 content',
            isDisabled: false,
            title: 'Tab 3',
        }]}
    />
);
