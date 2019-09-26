import { select, text } from '@storybook/addon-knobs';
import Button from '../Button/Button';
import Card from './Card';
import React from 'react';

export default { title: 'molecules/Card' };

export const Configurable = () => (
    <Card
        elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
        height={text('Set height in px or %', Card.defaultProps.height)}
        position={select('Position', Card.positions, Card.defaultProps.position)}
        width={text('Set width in px or %', Card.defaultProps.width)}
    >
        {text('Text', 'Configure me!')}
    </Card>
);

export const ConfigurableWithComponent = () => (
    <Card
        elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
        height={text('Set height in px or %', Card.defaultProps.height)}
        position={select('Position', Card.positions, Card.defaultProps.position)}
        width={text('Set width in px or %', Card.defaultProps.width)}
    >
        <Button
            onClick={() => {}}
        >
            {'Button for testing'}
        </Button>
    </Card>
);
