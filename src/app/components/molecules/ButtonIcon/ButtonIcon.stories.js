import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonIcon from './ButtonIcon';
import React from 'react';

export default { title: 'molecules/ButtonIcon' };

export const Configurable = () => (
    <ButtonIcon
        iconType={select('Type', ButtonIcon.types, ButtonIcon.types.CHEVRON_DOWN)}
        isDisabled={boolean('Is disabled', false)}
        onClick={action('On click')}
        size={select('Size', ButtonIcon.sizes, ButtonIcon.sizes.LARGE)}
    />
);
