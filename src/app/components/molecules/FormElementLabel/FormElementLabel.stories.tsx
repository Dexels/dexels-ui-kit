import { AdornmentPosition, InputVariant } from '../../../types';
import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import FormElementLabel from './FormElementLabel';

export default { title: 'molecules/FormElementLabel' };

export const Configurable: FunctionComponent = () => (
    <FormElementLabel
        adornmentPosition={select('Adornment Position', AdornmentPosition, AdornmentPosition.LEFT)}
        hasError={boolean('Has error', false)}
        isActive={boolean('Is active', true)}
        isDisabled={boolean('Is disabled', false)}
        isFocused={boolean('Is focused', false)}
        isRequired={boolean('Is required', false)}
        isValid={boolean('Is valid', false)}
        variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
    >
        {text('Label', 'This is a FormElementLabel, awesome!')}
    </FormElementLabel>
);
