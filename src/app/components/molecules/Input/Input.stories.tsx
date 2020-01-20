import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Input from './Input';

export default { title: 'molecules/Input' };

export const Configurable = () => {
    const [value, setValue] = useState('');

    return (
        <Input
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', Input.defaultProps.hasError)}
            isDisabled={boolean('Is disabled', Input.defaultProps.isDisabled)}
            isTextarea={boolean('Is textarea', Input.defaultProps.isTextarea)}
            isValid={boolean('Is valid', Input.defaultProps.isValid)}
            label={text('Label', 'This is a label')}
            name="a-input-name"
            onChange={(event) => {
                setValue(event.currentTarget.value);
            }}
            type={select('Type', Input.types, Input.defaultProps.type)}
            value={value}
            variant={select('Variant', Input.variants, Input.defaultProps.variant)}
        />
    );
};
