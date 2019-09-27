import { boolean, select, text } from '@storybook/addon-knobs';
import InputPassword from './InputPassword';
import React from 'react';

export default { title: 'organisms/InputPassword' };

export const Configurable = () => (
    <InputPassword
        errorMessage={text('Error message', 'Help, something went wrong!')}
        hasError={boolean('Has error', InputPassword.defaultProps.hasError)}
        isDisabled={boolean('Is disabled', InputPassword.defaultProps.isDisabled)}
        isValid={boolean('Is valid', InputPassword.defaultProps.isValid)}
        label={text('Label', 'Your password')}
        name="A random name"
        variant={select('Variant', InputPassword.variants, InputPassword.defaultProps.variant)}
    />
);
