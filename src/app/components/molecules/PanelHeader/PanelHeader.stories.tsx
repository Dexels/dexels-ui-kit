import { boolean, select, text } from '@storybook/addon-knobs';
import {
    ButtonSize,
    ButtonVariant,
    IconType,
    Status,
} from '../../../types';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import PanelHeader from './PanelHeader';
import React from 'react';
import Toolbar from '../../organisms/Toolbar/Toolbar';

export default { title: 'molecules/PanelHeader' };

export const Configurable = () => (
    <PanelHeader
        hasTitleStatusAppearance={boolean('Has title status appearance', true)}
        iconType={select('Icon type', IconType, IconType.GEAR)}
        isTitleCapitalized={boolean('Is title capitalized', true)}
        options={(
            <Button
                iconType={IconType.CHECK}
                onClick={action('On click')}
                variant={ButtonVariant.TEXT_ONLY}
            >
                {'Apply'}
            </Button>
        )}
        status={select('Status', Status, Status.ALERT)}
        title={text('Title', 'settings')}
    />
);

export const ConfigurableWithMultipleButtons = () => (
    <PanelHeader
        hasTitleStatusAppearance={boolean('Has title status appearance', true)}
        iconType={select('Icon type', IconType, IconType.GEAR)}
        isTitleCapitalized={boolean('Is title capitalized', true)}
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
        status={select('Status', Status, Status.DEFAULT)}
        title={text('Title', 'settings')}
    />
);
