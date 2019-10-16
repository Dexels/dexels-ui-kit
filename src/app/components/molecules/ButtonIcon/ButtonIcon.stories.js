import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonIcon from './ButtonIcon';
import React from 'react';

export default { title: 'molecules/ButtonIcon' };

export const Configurable = () => (
    <ButtonIcon
        iconType={select('Type', ButtonIcon.types, ButtonIcon.defaultProps.iconType)}
        isDisabled={boolean('Is disabled', ButtonIcon.defaultProps.isDisabled)}
        onClick={action('On click')}
        size={select('Size', ButtonIcon.sizes, ButtonIcon.defaultProps.size)}
        variant={select('Variant', ButtonIcon.variants, ButtonIcon.defaultProps.variant)}
    />
);
