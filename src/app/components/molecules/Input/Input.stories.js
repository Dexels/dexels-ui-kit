import { boolean, select, text } from '@storybook/addon-knobs';
import Input from './Input';
import React from 'react';

export default { title: 'molecules/Input' };

export const Configurable = () => (
    <Input
        errorMessage={text('Error message', 'Help, something went wrong!')}
        hasError={boolean('Has error', Input.defaultProps.hasError)}
        isDisabled={boolean('Is disabled', Input.defaultProps.isDisabled)}
        isTextarea={boolean('Is textarea', Input.defaultProps.isTextarea)}
        isValid={boolean('Is valid', Input.defaultProps.isValid)}
        label={text('Label', 'This is a label')}
        name="a-input-name"
        type={select('Type', Input.types, Input.defaultProps.type)}
        variant={select('Variant', Input.variants, Input.defaultProps.variant)}
    />
);
