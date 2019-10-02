import { select, text } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import React from 'react';
import StatusCard from './StatusCard';

export default { title: 'organisms/StatusCard' };

export const Configurable = () => (
    <StatusCard
        elevation={select('Elevation', StatusCard.elevations, StatusCard.defaultProps.elevation)}
        height={text('Set height in px or %', StatusCard.defaultProps.height)}
        position={select('Position', StatusCard.positions, StatusCard.defaultProps.position)}
        status={select('Status', StatusCard.statuses, StatusCard.defaultProps.status)}
        statusPlacement={
            select('Status placement',
                StatusCard.statusPlacements,
                StatusCard.defaultProps.statusPlacement)
        }
        width={text('Set width in px or %', StatusCard.defaultProps.width)}
    >
        {text('Text', 'Configure me!')}
    </StatusCard>
);

export const ConfigurableWithComponent = () => (
    <StatusCard
        elevation={select('Elevation', StatusCard.elevations, StatusCard.defaultProps.elevation)}
        height={text('Set height in px or %', StatusCard.defaultProps.height)}
        position={select('Position', StatusCard.positions, StatusCard.defaultProps.position)}
        status={select('Status', StatusCard.statuses, StatusCard.defaultProps.status)}
        statusPlacement={
            select('Status placement',
                StatusCard.statusPlacements,
                StatusCard.defaultProps.statusPlacement)
        }
        width={text('Set width in px or %', StatusCard.defaultProps.width)}
    >
        <Button
            onClick={() => {}}
        >
            {'Button for testing'}
        </Button>
    </StatusCard>
);
