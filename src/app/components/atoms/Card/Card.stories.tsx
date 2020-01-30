import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Card from './Card';
import React from 'react';

export default { title: 'atoms/Card' };

export const Configurable = () => (
    <Card
        elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
        hasBorderRadius={boolean('Has border radius', Card.defaultProps.hasBorderRadius)}
    >
        {text('Text', 'Configure me!')}
    </Card>
);

export const ConfigurableWithComponent = () => (
    <Card
        elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
        hasBorderRadius={boolean('Has border radius', Card.defaultProps.hasBorderRadius)}
    >
        <Button
            onClick={action('On click')}
        >
            {'Button for testing'}
        </Button>
    </Card>
);
