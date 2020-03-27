import { boolean, select, text } from '@storybook/addon-knobs';
import { Elevation, Placement, Status } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import CardStatus from './CardStatus';

export default { title: 'molecules/CardStatus' };

export const Configurable: FunctionComponent = () => (
    <CardStatus
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        hasBorderRadius={boolean('Has border radius', false)}
        placement={select('Status placement', Placement, Placement.TOP)}
        status={select('Status', Status, Status.DEFAULT)}
    >
        {text('Text', 'Configure me!')}
    </CardStatus>
);

export const ConfigurableWithComponent: FunctionComponent = () => (
    <CardStatus
        elevation={select('Elevation', Elevation, Elevation.LEVEL_16)}
        hasBorderRadius={boolean('Has border radius', true)}
        placement={select('Status placement', Placement, Placement.BOTTOM)}
        status={select('Status', Status, Status.ALERT)}
    >
        <Button onClick={action('On click')}>{'Button for testing'}</Button>
    </CardStatus>
);
