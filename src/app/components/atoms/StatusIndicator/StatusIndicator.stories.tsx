import { Placement, Status, StatusIndicatorSize } from '../../../types';
import Colors from '../Colors/Colors';
import React from 'react';
import { select } from '@storybook/addon-knobs';
import StatusIndicator from './StatusIndicator';

export default { title: 'atoms/StatusIndicator' };

export const Configurable = () => (
    <StatusIndicator
        placement={select('Placement', Placement, Placement.TOP)}
        size={select('Size', StatusIndicatorSize, StatusIndicatorSize.LARGE)}
        status={select('Status', Status, Status.DEFAULT)}
    >
        <Colors />
    </StatusIndicator>
);
