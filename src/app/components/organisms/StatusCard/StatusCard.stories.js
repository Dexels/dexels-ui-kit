import { select, text } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import React from 'react';
import StatusCard from './StatusCard';

export default { title: 'organisms/StatusCard' };

export const Configurable = () => (
    <StatusCard
        elevation={select('Elevation', StatusCard.elevations, StatusCard.defaultProps.elevation)}
        position={select('Position', StatusCard.positions, StatusCard.defaultProps.position)}
        status={select('Status', StatusCard.statuses, StatusCard.defaultProps.status)}
        statusPlacement={
            select('Status placement',
                StatusCard.statusPlacements,
                StatusCard.defaultProps.statusPlacement)
        }
    >
        {text('Text', 'Configure me!')}
    </StatusCard>
);

export const ConfigurableWithComponent = () => (
    <StatusCard
        elevation={select('Elevation', StatusCard.elevations, StatusCard.defaultProps.elevation)}
        position={select('Position', StatusCard.positions, StatusCard.defaultProps.position)}
        status={select('Status', StatusCard.statuses, StatusCard.defaultProps.status)}
        statusPlacement={
            select('Status placement',
                StatusCard.statusPlacements,
                StatusCard.defaultProps.statusPlacement)
        }
    >
        <Button
            onClick={() => {}}
        >
            {'Button for testing'}
        </Button>
    </StatusCard>
);
