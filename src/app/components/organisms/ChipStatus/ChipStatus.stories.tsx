import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ChipStatus from './ChipStatus';
import { ChipStatusVariant } from './types';
import { Direction } from '../../../types';
import React from 'react';

export default { title: 'organisms/ChipStatus' };

export const Configurable = () => (
    <ChipStatus
        direction={select('Direction', Direction, ChipStatus.defaultProps.direction)}
        isDisabled={boolean('Is disabled', ChipStatus.defaultProps.isDisabled)}
        onClick={action('On click')}
        variant={select('Variant', ChipStatusVariant, ChipStatus.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </ChipStatus>
);

export const ConfigurableWithoutOnClick = () => (
    <ChipStatus
        direction={select('Direction', Direction, ChipStatus.defaultProps.direction)}
        isDisabled={boolean('Is disabled', ChipStatus.defaultProps.isDisabled)}
        variant={select('Variant', ChipStatusVariant, ChipStatus.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </ChipStatus>
);
