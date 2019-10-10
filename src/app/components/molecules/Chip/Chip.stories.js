import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
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
        transitionEasing={select('Transition type', Chip.transitionEasings, Chip.defaultProps.transitionEasing)}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);

export const ConfigurableWithIcon = () => (
    <Chip
        direction={select('Direction', Chip.directions, Chip.defaultProps.direction)}
        iconType={select('Type', Chip.iconTypes, Chip.iconTypes.CHECK)}
        isDisabled={boolean('Is disabled', Chip.defaultProps.isDisabled)}
        isSelected={boolean('Is selected', Chip.defaultProps.isSelected)}
        onClick={action('On click')}
        transitionDuration={number('Transition duration', Chip.defaultProps.transitionDuration)}
        transitionEasing={select('Transition type', Chip.transitionEasings, Chip.defaultProps.transitionEasing)}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);
