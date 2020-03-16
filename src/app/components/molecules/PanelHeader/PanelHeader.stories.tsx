import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import PanelHeader from './PanelHeader';
import React from 'react';
import Toolbar from '../../organisms/Toolbar/Toolbar';

export default { title: 'molecules/PanelHeader' };

export const Configurable = () => (
    <PanelHeader
        hasCapitalizedTitle={boolean('Is title capitalized', true)}
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
        title={text('Title', 'settings')}
    />
);

export const ConfigurableWithMultipleButtons = () => (
    <PanelHeader
        hasCapitalizedTitle={boolean('Is title capitalized', true)}
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
        title={text('Title', 'settings')}
    />
);
