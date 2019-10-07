import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ChipStatus from './ChipStatus';
import React from 'react';

export default { title: 'organisms/ChipStatus' };

export const Configurable = () => (
    <ChipStatus
        isDisabled={boolean('Is disabled', ChipStatus.defaultProps.isDisabled)}
        onClick={action('On click')}
        variant={select('Variant', ChipStatus.variants, ChipStatus.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </ChipStatus>
);

export const ConfigurableWithIcon = () => (
    <ChipStatus
        direction={select('Direction', ChipStatus.directions, ChipStatus.defaultProps.direction)}
        isDisabled={boolean('Is disabled', ChipStatus.defaultProps.isDisabled)}
        onClick={action('On click')}
        variant={select('Variant', ChipStatus.variants, ChipStatus.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </ChipStatus>
);
