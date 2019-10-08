import { select, text } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import Card from './Card';
import React from 'react';

export default { title: 'atoms/Card' };

export const Configurable = () => (
    <Card
        elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
        position={select('Position', Card.positions, Card.defaultProps.position)}
    >
        {text('Text', 'Configure me!')}
    </Card>
);

export const ConfigurableWithComponent = () => (
    <Card
        elevation={select('Elevation', Card.elevations, Card.defaultProps.elevation)}
        position={select('Position', Card.positions, Card.defaultProps.position)}
    >
        <Button
            onClick={() => {}}
        >
            {'Button for testing'}
        </Button>
    </Card>
);
