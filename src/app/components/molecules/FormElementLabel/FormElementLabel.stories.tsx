import { boolean, select, text } from '@storybook/addon-knobs';
import FormElementLabel from './FormElementLabel';
import { InputVariant } from '../../../types';
import React from 'react';

export default { title: 'molecules/FormElementLabel' };

export const Configurable = () => (
    <FormElementLabel
        hasError={boolean('Has error', false)}
        isActive={boolean('Is active', true)}
        isDisabled={boolean('Is disabled', false)}
        isFocused={boolean('Is focused', false)}
        isValid={boolean('Is valid', false)}
        variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
    >
        {text('Label', 'This is a FormElementLabel, awesome!')}
    </FormElementLabel>
);
