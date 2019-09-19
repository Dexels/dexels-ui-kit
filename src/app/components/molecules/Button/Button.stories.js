import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import React from 'react';

export default { title: 'molecules/Button' };

export const Configurable = () => (
    <Button
        isDisabled={boolean('Is disabled', false)}
        onClick={action('On click')}
        size={select('Size', Button.sizes, Button.sizes.LARGE)}
        variant={select('Type', Button.variants, Button.variants.FILLED)}
    >
        {text('Text', 'Configure me!')}
    </Button>
);

export const ConfigurableWithIcon = () => (
    <Button
        direction={select('Direction', Button.directions, Button.directions.LTR)}
        iconType={select('Icon type', Button.iconTypes, Button.iconTypes.ARROW_DOWN)}
        isDisabled={boolean('Is disabled', false)}
        onClick={action('On click')}
        size={select('Size', Button.sizes, Button.sizes.LARGE)}
        variant={select('Type', Button.variants, Button.variants.FILLED)}
    >
        {text('Text', 'Configure me!')}
    </Button>
);
