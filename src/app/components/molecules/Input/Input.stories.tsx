import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import { InputType, InputVariant } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import Input from './Input';
import { parseInputValue } from '../../../utils/functions/parseInputValue';

export default { title: 'molecules/Input' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <Input
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isTextarea={boolean('Is textarea', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            max={number('Max', 100)}
            min={number('Min', 0)}
            name="a-input-name"
            onChange={({ currentTarget }): void => {
                setValue(parseInputValue(currentTarget));
            }}
            type={select('Type', InputType, InputType.NUMBER)}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
