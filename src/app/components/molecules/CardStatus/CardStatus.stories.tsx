import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import CardStatus from './CardStatus';
import React from 'react';

export default { title: 'molecules/CardStatus' };

export const Configurable = () => (
    <CardStatus
        elevation={select('Elevation', CardStatus.elevations, CardStatus.defaultProps.elevation)}
        hasBorderRadius={boolean('Has border radius', CardStatus.defaultProps.hasBorderRadius)}
        placement={select(
            'Status placement',
            CardStatus.placements,
            CardStatus.defaultProps.placement,
        )}
        status={select('Status', CardStatus.statuses, CardStatus.defaultProps.status)}
    >
        {text('Text', 'Configure me!')}
    </CardStatus>
);

export const ConfigurableWithComponent = () => (
    <CardStatus
        elevation={select('Elevation', CardStatus.elevations, CardStatus.defaultProps.elevation)}
        hasBorderRadius={boolean('Has border radius', CardStatus.defaultProps.hasBorderRadius)}
        placement={select(
            'Status placement',
            CardStatus.placements,
            CardStatus.defaultProps.placement,
        )}
        status={select('Status', CardStatus.statuses, CardStatus.defaultProps.status)}
    >
        <Button
            onClick={action('On click')}
        >
            {'Button for testing'}
        </Button>
    </CardStatus>
);
