import Colors from '../Colors/Colors';
import React from 'react';
import { select } from '@storybook/addon-knobs';
import StatusIndicator from './StatusIndicator';

export default { title: 'atoms/StatusIndicator' };

export const Configurable = () => (
    <StatusIndicator
        placement={select('Placement', StatusIndicator.placements, StatusIndicator.defaultProps.placement)}
        status={select('Status', StatusIndicator.statuses, StatusIndicator.defaultProps.status)}
    >
        <Colors />
    </StatusIndicator>
);
