import { Placement, Status, StatusIndicatorSize } from '../../../types';
import Colors from '../Colors/Colors';
import React from 'react';
import { select } from '@storybook/addon-knobs';
import StatusIndicator from './StatusIndicator';

export default { title: 'atoms/StatusIndicator' };

export const Configurable = () => (
    <StatusIndicator
        placement={select('Placement', Placement, StatusIndicator.defaultProps.placement)}
        size={select('Size', StatusIndicatorSize, StatusIndicator.defaultProps.size)}
        status={select('Status', Status, StatusIndicator.defaultProps.status)}
    >
        <Colors />
    </StatusIndicator>
);
