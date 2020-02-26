import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import { InputType, InputVariant } from '../../../types';
import React, { useState } from 'react';
import Input from './Input';
import { parseInputValue } from '../../../utils/functions/parseInputValue';

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
            max={number('Max', 100)}
            min={number('Min', 0)}
            name="a-input-name"
            onChange={({ currentTarget }) => {
                setValue(parseInputValue(currentTarget));
            }}
            type={select('Type', InputType, Input.defaultProps.type)}
            value={value}
            variant={select('Variant', InputVariant, Input.defaultProps.variant)}
        />
    );
};
