import React from 'react';
import { select } from '@storybook/addon-knobs';
import StatusIndicator from './StatusIndicator';

export default { title: 'molecules/StatusIndicator' };

export const Configurable = () => (
    <div
        style={{
            backgroundColor: 'yellow',
            height: '50px',
            width: '50px',
        }}
    >
        <StatusIndicator
            status={select('Status', StatusIndicator.statuses, StatusIndicator.defaultProps.status)}
            statusPlacement={
                select('Status placement',
                    StatusIndicator.statusPlacements,
                    StatusIndicator.defaultProps.statusPlacement)
            }
        />
    </div>
);
