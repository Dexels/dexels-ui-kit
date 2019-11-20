import { boolean, select, text } from '@storybook/addon-knobs';
import FormElementLabel from './FormElementLabel';
import React from 'react';

export default { title: 'molecules/FormElementLabel' };

export const Configurable = () => (
    <FormElementLabel
        hasError={boolean('Has error', FormElementLabel.defaultProps.hasError)}
        isActive={boolean('Is active', FormElementLabel.defaultProps.isActive)}
        isDisabled={boolean('Is disabled', FormElementLabel.defaultProps.isDisabled)}
        isFocused={boolean('Is focused', FormElementLabel.defaultProps.isFocused)}
        isValid={boolean('Is valid', FormElementLabel.defaultProps.isValid)}
        variant={select('Variant', FormElementLabel.variants, FormElementLabel.variants.OUTLINE)}
    >
        {text('Label', 'This is a FormElementLabel, awesome!')}
    </FormElementLabel>
);
