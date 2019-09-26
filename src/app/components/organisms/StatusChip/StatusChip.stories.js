import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';
import StatusChip from './StatusChip';

export default { title: 'organisms/StatusChip' };

export const Configurable = () => (
    <StatusChip
        isDisabled={boolean('Is disabled', StatusChip.defaultProps.isDisabled)}
        onClick={action('On click')}
        variant={select('Variant', StatusChip.variants, StatusChip.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </StatusChip>
);

export const ConfigurableWithIcon = () => (
    <StatusChip
        direction={select('Direction', StatusChip.directions, StatusChip.defaultProps.direction)}
        isDisabled={boolean('Is disabled', StatusChip.defaultProps.isDisabled)}
        onClick={action('On click')}
        variant={select('Variant', StatusChip.variants, StatusChip.defaultProps.variant)}
    >
        {text('Text', 'Configure me!')}
    </StatusChip>
);
