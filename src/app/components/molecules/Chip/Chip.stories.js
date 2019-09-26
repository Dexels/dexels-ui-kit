import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Chip from './Chip';
import React from 'react';

export default { title: 'molecules/Chip' };

export const Configurable = () => (
    <Chip
        isDisabled={boolean('Is disabled', Chip.defaultProps.isDisabled)}
        isSelected={boolean('Is selected', Chip.defaultProps.isSelected)}
        onClick={action('On click')}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);

export const ConfigurableWithIcon = () => (
    <Chip
        direction={select('Direction', Chip.directions, Chip.defaultProps.direction)}
        iconType={select('Type', Chip.types, Chip.types.CHECK)}
        isDisabled={boolean('Is disabled', Chip.defaultProps.isDisabled)}
        isSelected={boolean('Is selected', Chip.defaultProps.isSelected)}
        onClick={action('On click')}
    >
        {text('Text', 'Configure me!')}
    </Chip>
);
