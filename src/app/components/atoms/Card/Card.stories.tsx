import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Card from './Card';
import { Elevation } from '../../../types';

export default { title: 'atoms/Card' };

export const Configurable: FunctionComponent = () => (
    <Card
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        hasBorderRadius={boolean('Has border radius', true)}
    >
        {text('Text', 'Configure me!')}
    </Card>
);

export const ConfigurableWithComponent: FunctionComponent = () => (
    <Card
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        hasBorderRadius={boolean('Has border radius', false)}
    >
        <Button
            onClick={action('On click')}
        >
            {'Button for testing'}
        </Button>
    </Card>
);
