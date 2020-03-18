import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Card from './Card';
import { Elevation } from '../../../types';
import React from 'react';

export default { title: 'atoms/Card' };

export const Configurable = () => (
    <Card
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        hasBorderRadius={boolean('Has border radius', true)}
    >
        {text('Text', 'Configure me!')}
    </Card>
);

export const ConfigurableWithComponent = () => (
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
