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
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default { title: 'molecules/Button' };

export const Configurable: FunctionComponent = () => (
    <Button
        isDisabled={boolean('Is disabled', false)}
        isFullWidth={boolean('Is full width', false)}
        isInverted={boolean('Is inverted', false)}
        isLoading={boolean('Is loading', false)}
        onClick={action('On click')}
        size={select('Size', ButtonSize, ButtonSize.MEDIUM)}
        transitionDuration={number('Transition duration', 300)}
        transitionEasing={select(
            'Transition type', Easing, Easing.EASE,
        )}
        variant={select('Variant', ButtonVariant, ButtonVariant.OUTLINE)}
    >
        {text('Text', 'Configure me!')}
    </Button>
);

export const ConfigurableWithIcon: FunctionComponent = () => (
    <Button
        direction={select('Direction', Direction, Direction.LTR)}
        iconType={select('Icon type', IconType, IconType.CHECK)}
        isDisabled={boolean('Is disabled', false)}
        isFullWidth={boolean('Use full width', false)}
        isInverted={boolean('Is inverted', false)}
        isLoading={boolean('Is loading', false)}
        onClick={action('On click')}
        size={select('Size', ButtonSize, ButtonSize.LARGE)}
        transitionDuration={number('Transition duration', 300)}
        transitionEasing={select(
            'Transition type', Easing, Easing.EASE,
        )}
        variant={select('Variant', ButtonVariant, ButtonVariant.OUTLINE)}
    >
        {text('Text', 'Configure me!')}
    </Button>
);
