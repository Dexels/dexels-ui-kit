import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import {
    Direction,
    Easing,
    IconSize,
    IconType,
} from '../../../types';
import { action } from '@storybook/addon-actions';
import Chip from './Chip';
import React from 'react';

export default { title: 'molecules/Chip' };

export const Configurable = () => (
    <Chip
        isDisabled={boolean('Is disabled', Chip.defaultProps.isDisabled)}
        isSelected={boolean('Is selected', Chip.defaultProps.isSelected)}
        onClick={action('On click')}
        transitionDuration={number('Transition duration', Chip.defaultProps.transitionDuration)}
        transitionEasing={select(
            'Transition type', Easing, Chip.defaultProps.transitionEasing,
        )}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);

export const ConfigurableWithoutOnClick = () => (
    <Chip
        isDisabled={boolean('Is disabled', Chip.defaultProps.isDisabled)}
        isSelected={boolean('Is selected', Chip.defaultProps.isSelected)}
        transitionDuration={number('Transition duration', Chip.defaultProps.transitionDuration)}
        transitionEasing={select(
            'Transition type', Easing, Chip.defaultProps.transitionEasing,
        )}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);

export const ConfigurableWithIcon = () => (
    <Chip
        direction={select('Direction', Direction, Chip.defaultProps.direction)}
        iconSize={select('Icon size', IconSize, Chip.defaultProps.iconSize)}
        iconType={select('Type', IconType, IconType.CHECK)}
        isDisabled={boolean('Is disabled', Chip.defaultProps.isDisabled)}
        isSelected={boolean('Is selected', Chip.defaultProps.isSelected)}
        onClick={action('On click')}
        transitionDuration={number('Transition duration', Chip.defaultProps.transitionDuration)}
        transitionEasing={select(
            'Transition type', Easing, Chip.defaultProps.transitionEasing,
        )}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);
