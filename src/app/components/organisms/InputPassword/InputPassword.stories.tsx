import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import InputPassword from './InputPassword';
import { InputVariant } from '../../../types';

export default { title: 'organisms/InputPassword' };

export const Configurable = () => {
    const [value, setValue] = useState('');

    return (
        <InputPassword
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', InputPassword.defaultProps.hasError)}
            isDisabled={boolean('Is disabled', InputPassword.defaultProps.isDisabled)}
            isValid={boolean('Is valid', InputPassword.defaultProps.isValid)}
            label={text('Label', 'Your password')}
            name="a-inputpassword-name"
            onChange={(event) => {
                setValue(event.currentTarget.value);
            }}
            value={value}
            variant={select('Variant', InputVariant, InputPassword.defaultProps.variant)}
        />
    );
};
