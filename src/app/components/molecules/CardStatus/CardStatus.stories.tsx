import { boolean, select, text } from '@storybook/addon-knobs';
import { Elevation, Placement, Status } from '../../../types';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import CardStatus from './CardStatus';
import React from 'react';

export default { title: 'molecules/CardStatus' };

export const Configurable = () => (
    <CardStatus
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        hasBorderRadius={boolean('Has border radius', false)}
        placement={select(
            'Status placement',
            Placement,
            Placement.TOP,
        )}
        status={select('Status', Status, Status.DEFAULT)}
    >
        {text('Text', 'Configure me!')}
    </CardStatus>
);

export const ConfigurableWithComponent = () => (
    <CardStatus
        elevation={select('Elevation', Elevation, Elevation.LEVEL_16)}
        hasBorderRadius={boolean('Has border radius', true)}
        placement={select(
            'Status placement',
            Placement,
            Placement.BOTTOM,
        )}
        status={select('Status', Status, Status.ALERT)}
    >
        <Button
            onClick={action('On click')}
        >
            {'Button for testing'}
        </Button>
    </CardStatus>
);
