import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import CardStatus from '../CardStatus/CardStatus';
import PanelStatus from './PanelStatus';
import React from 'react';

export default { title: 'molecules/PanelStatus' };

export const Configurable = () => (
    <PanelStatus
        elevation={select('Elevation', CardStatus.elevations, PanelStatus.defaultProps.elevation)}
        iconType={select('Icon type', PanelStatus.iconTypes, PanelStatus.iconTypes.GEAR)}
        options={(
            <Button
                iconType="CHECK"
                onClick={action('On click')}
                variant="TEXT_ONLY"
            >
                {'Apply'}
            </Button>
        )}
        status={select('Status', CardStatus.statuses, PanelStatus.defaultProps.status)}
        title={text('Title', 'Settings')}
    >
        {text('Text', 'Configure me!')}
    </PanelStatus>
);
