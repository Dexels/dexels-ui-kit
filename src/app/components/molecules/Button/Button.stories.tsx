import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import {
    ButtonSize,
    ButtonVariant,
    Direction,
    Easing,
    IconType,
} from '../../../types';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import React from 'react';

export default { title: 'molecules/Button' };

export const Configurable = () => (
    <Button
        isDisabled={boolean('Is disabled', Button.defaultProps.isDisabled)}
        isFullWidth={boolean('Is full width', Button.defaultProps.isFullWidth)}
        isInverted={boolean('Is inverted', Button.defaultProps.isInverted)}
        isLoading={boolean('Is loading', Button.defaultProps.isLoading)}
        onClick={action('On click')}
        size={select('Size', ButtonSize, Button.defaultProps.size)}
        transitionDuration={number('Transition duration', Button.defaultProps.transitionDuration)}
        transitionEasing={select(
            'Transition type', Easing, Button.defaultProps.transitionEasing,
        )}
        variant={select('Variant', ButtonVariant, Button.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </Button>
);

export const ConfigurableWithIcon = () => (
    <Button
        direction={select('Direction', Direction, Button.defaultProps.direction)}
        iconType={select('Icon type', IconType, IconType.CHECK)}
        isDisabled={boolean('Is disabled', Button.defaultProps.isDisabled)}
        isFullWidth={boolean('Use full width', Button.defaultProps.isFullWidth)}
        isInverted={boolean('Is inverted', Button.defaultProps.isInverted)}
        isLoading={boolean('Is loading', Button.defaultProps.isLoading)}
        onClick={action('On click')}
        size={select('Size', ButtonSize, Button.defaultProps.size)}
        transitionDuration={number('Transition duration', Button.defaultProps.transitionDuration)}
        transitionEasing={select(
            'Transition type', Easing, Button.defaultProps.transitionEasing,
        )}
        variant={select('Variant', ButtonVariant, Button.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </Button>
);
