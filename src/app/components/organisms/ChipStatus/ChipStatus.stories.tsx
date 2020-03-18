import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ChipStatus from './ChipStatus';
import { ChipStatusVariant } from './types';
import { Direction } from '../../../types';
import React from 'react';

export default { title: 'organisms/ChipStatus' };

export const Configurable = () => (
    <ChipStatus
        direction={select('Direction', Direction, Direction.LTR)}
        isDisabled={boolean('Is disabled', false)}
        onClick={action('On click')}
        variant={select('Variant', ChipStatusVariant, ChipStatusVariant.SELECTED)}
    >
        {text('Text', 'Configure me!')}
    </ChipStatus>
);

export const ConfigurableWithoutOnClick = () => (
    <ChipStatus
        direction={select('Direction', Direction, Direction.LTR)}
        isDisabled={boolean('Is disabled', false)}
        variant={select('Variant', ChipStatusVariant, ChipStatusVariant.SELECTED)}
    >
        {text('Text', 'Configure me!')}
    </ChipStatus>
);
