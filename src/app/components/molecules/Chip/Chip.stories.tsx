import { boolean, number, select, text } from '@storybook/addon-knobs';
import { Direction, Easing, IconSize, IconType } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Chip from './Chip';

export default { title: 'molecules/Chip' };

export const Configurable: FunctionComponent = () => (
    <Chip
        isDisabled={boolean('Is disabled', false)}
        isSelected={boolean('Is selected', true)}
        onClick={action('On click')}
        transitionDuration={number('Transition duration', 300)}
        transitionEasing={select('Transition type', Easing, Easing.EASE)}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);

export const ConfigurableWithoutOnClick: FunctionComponent = () => (
    <Chip
        isDisabled={boolean('Is disabled', false)}
        isSelected={boolean('Is selected', true)}
        transitionDuration={number('Transition duration', 300)}
        transitionEasing={select('Transition type', Easing, Easing.EASE)}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);

export const ConfigurableWithIcon: FunctionComponent = () => (
    <Chip
        direction={select('Direction', Direction, Direction.LTR)}
        iconSize={select('Icon size', IconSize, IconSize.MEDIUM)}
        iconType={select('Type', IconType, IconType.CHECK)}
        isDisabled={boolean('Is disabled', false)}
        isSelected={boolean('Is selected', true)}
        onClick={action('On click')}
        transitionDuration={number('Transition duration', 300)}
        transitionEasing={select('Transition type', Easing, Easing.EASE)}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);
