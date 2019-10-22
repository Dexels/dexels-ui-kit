import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import React from 'react';

export default { title: 'molecules/Button' };

export const Configurable = () => (
    <Button
        isDisabled={boolean('Is disabled', Button.defaultProps.isDisabled)}
        isFullWidth={boolean('Is full width', Button.defaultProps.isFullWidth)}
        isInverted={boolean('Is inverted', Button.defaultProps.isInverted)}
        onClick={action('On click')}
        size={select('Size', Button.sizes, Button.defaultProps.size)}
        transitionDuration={number('Transition duration', Button.defaultProps.transitionDuration)}
        transitionEasing={select('Transition type', Button.transitionEasings, Button.defaultProps.transitionEasing)}
        variant={select('Type', Button.variants, Button.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </Button>
);

export const ConfigurableWithIcon = () => (
    <Button
        direction={select('Direction', Button.directions, Button.defaultProps.direction)}
        iconType={select('Icon type', Button.iconTypes, Button.iconTypes.CHECK)}
        isDisabled={boolean('Is disabled', Button.defaultProps.isDisabled)}
        isFullWidth={boolean('Use full width', Button.defaultProps.isFullWidth)}
        isInverted={boolean('Is inverted', Button.defaultProps.isInverted)}
        onClick={action('On click')}
        size={select('Size', Button.sizes, Button.defaultProps.size)}
        transitionDuration={number('Transition duration', Button.defaultProps.transitionDuration)}
        transitionEasing={select('Transition type', Button.transitionEasings, Button.defaultProps.transitionEasing)}
        variant={select('Type', Button.variants, Button.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </Button>
);
