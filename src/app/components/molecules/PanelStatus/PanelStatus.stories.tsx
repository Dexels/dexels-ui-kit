import {
    ButtonSize,
    ButtonVariant,
    Elevation,
    IconType,
    Status,
} from '../../../types';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import PanelStatus from './PanelStatus';
import React from 'react';
import Toolbar from '../../organisms/Toolbar/Toolbar';

export default { title: 'molecules/PanelStatus' };

export const Configurable = () => (
    <PanelStatus
        elevation={select('Elevation', Elevation, PanelStatus.defaultProps.elevation)}
        iconType={select('Icon type', IconType, IconType.GEAR)}
        options={(
            <Button
                iconType={IconType.CHECK}
                onClick={action('On click')}
                variant={ButtonVariant.TEXT_ONLY}
            >
                {'Apply'}
            </Button>
        )}
        status={select('Status', Status, PanelStatus.defaultProps.status)}
        title={text('Title', 'Settings')}
    >
        {text('Text', 'Configure me!')}
    </PanelStatus>
);

export const ConfigurableWithMultipleButtons = () => (
    <PanelStatus
        elevation={select('Elevation', Elevation, PanelStatus.defaultProps.elevation)}
        iconType={select('Icon type', IconType, IconType.GEAR)}
        options={(
            <Toolbar>
                <Button
                    iconType={IconType.CHECK}
                    onClick={action('On click')}
                    variant={ButtonVariant.TEXT_ONLY}
                >
                    {'Apply'}
                </Button>
                <Button
                    iconType={IconType.SELECT}
                    onClick={action('On click')}
                    size={ButtonSize.SMALL}
                    variant={ButtonVariant.OUTLINE}
                >
                    {'Select'}
                </Button>
            </Toolbar>
        )}
        status={select('Status', Status, PanelStatus.defaultProps.status)}
        title={text('Title', 'Settings')}
    >
        {text('Text', 'Configure me!')}
    </PanelStatus>
);
