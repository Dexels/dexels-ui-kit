import { select, text } from '@storybook/addon-knobs';
import Button from '../Button/Button';
import CardStatus from './CardStatus';
import React from 'react';

export default { title: 'molecules/CardStatus' };

export const Configurable = () => (
    <CardStatus
        elevation={select('Elevation', CardStatus.elevations, CardStatus.defaultProps.elevation)}
        placement={select(
            'Status placement',
            CardStatus.placements,
            CardStatus.defaultProps.placement,
        )}
        position={select('Position', CardStatus.positions, CardStatus.defaultProps.position)}
        status={select('Status', CardStatus.statuses, CardStatus.defaultProps.status)}
    >
        {text('Text', 'Configure me!')}
    </CardStatus>
);

export const ConfigurableWithComponent = () => (
    <CardStatus
        elevation={select('Elevation', CardStatus.elevations, CardStatus.defaultProps.elevation)}
        placement={select(
            'Status placement',
            CardStatus.placements,
            CardStatus.defaultProps.placement,
        )}
        position={select('Position', CardStatus.positions, CardStatus.defaultProps.position)}
        status={select('Status', CardStatus.statuses, CardStatus.defaultProps.status)}
    >
        <Button
            onClick={() => {}}
        >
            {'Button for testing'}
        </Button>
    </CardStatus>
);
