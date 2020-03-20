import { Placement, Status, StatusIndicatorSize } from '../../../types';
import React, { FunctionComponent } from 'react';
import Colors from '../Colors/Colors';
import { select } from '@storybook/addon-knobs';
import StatusIndicator from './StatusIndicator';

export default { title: 'atoms/StatusIndicator' };

export const Configurable: FunctionComponent = () => (
    <StatusIndicator
        placement={select('Placement', Placement, Placement.TOP)}
        size={select('Size', StatusIndicatorSize, StatusIndicatorSize.LARGE)}
        status={select('Status', Status, Status.DEFAULT)}
    >
        <Colors />
    </StatusIndicator>
);
