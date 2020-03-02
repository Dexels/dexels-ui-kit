import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import PanelHeader from './PanelHeader';
import React from 'react';
import Toolbar from '../../organisms/Toolbar/Toolbar';

export default { title: 'molecules/PanelHeader' };

export const Configurable = () => (
    <PanelHeader
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
        title={text('Title', 'Settings')}
    />
);

export const ConfigurableWithMultipleButtons = () => (
    <PanelHeader
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
        title={text('Title', 'Settings')}
    />
);
