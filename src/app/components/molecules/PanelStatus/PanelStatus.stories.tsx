import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonSize, ButtonVariant, Elevation, IconType, Status } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import PanelStatus from './PanelStatus';
import Toolbar from '../../organisms/Toolbar/Toolbar';

export default { title: 'molecules/PanelStatus' };

export const Configurable: FunctionComponent = () => (
    <PanelStatus
        elevation={select('Elevation', Elevation, Elevation.LEVEL_2)}
        hasCapitalizedTitle={boolean('Is title capitalized', true)}
        hasTitleStatusAppearance={boolean('Has title status appearance', true)}
        iconType={select('Icon type', IconType, IconType.GEAR)}
        options={
            <Button iconType={IconType.CHECK} onClick={action('On click')} variant={ButtonVariant.TEXT_ONLY}>
                {'Apply'}
            </Button>
        }
        status={select('Status', Status, Status.ALERT)}
        title={text('Title', 'Settings')}
    >
        {text('Text', 'Configure me!')}
    </PanelStatus>
);

export const ConfigurableWithMultipleButtons: FunctionComponent = () => (
    <PanelStatus
        elevation={select('Elevation', Elevation, Elevation.LEVEL_16)}
        hasCapitalizedTitle={boolean('Is title capitalized', true)}
        hasTitleStatusAppearance={boolean('Has title status appearance', true)}
        iconType={select('Icon type', IconType, IconType.GEAR)}
        options={
            <Toolbar>
                <Button iconType={IconType.CHECK} onClick={action('On click')} variant={ButtonVariant.TEXT_ONLY}>
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
        }
        status={select('Status', Status, Status.VALID)}
        title={text('Title', 'Settings')}
    >
        {text('Text', 'Configure me!')}
    </PanelStatus>
);
