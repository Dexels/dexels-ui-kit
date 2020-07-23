import { AdornmentPosition, IconType, InputType, InputVariant } from '../../../types';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../../atoms/Icon/Icon';
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
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="an-input-name"
            onChange={({ currentTarget }): void => {
                setValue(parseInputValue(currentTarget));
            }}
            type={select('Type', InputType, InputType.TEXT)}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};

export const ConfigurableWithAdornment: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <Input
            adornment={<Icon type={IconType.MONEY} />}
            adornmentPosition={select('Adornment Position', AdornmentPosition, AdornmentPosition.LEFT)}
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isTextarea={boolean('Is textarea', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="an-input-name"
            onChange={({ currentTarget }): void => {
                setValue(parseInputValue(currentTarget));
            }}
            type={select('Type', InputType, InputType.TEXT)}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};

export const ConfigurableClickable: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <Input
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isTextarea={boolean('Is textarea', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="an-input-name"
            onChange={({ currentTarget }): void => {
                setValue(parseInputValue(currentTarget));
            }}
            onClick={action('On click')}
            type={select('Type', InputType, InputType.TEXT)}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};

export const ConfigurableMinAndMaxNumbers: FunctionComponent = () => {
    const [value, setValue] = useState('10');

    return (
        <Input
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This input can only contain numbers')}
            max={number('Max', 100)}
            min={number('Min', 0)}
            name="an-input-name"
            onChange={({ currentTarget }): void => {
                setValue(parseInputValue(currentTarget));
            }}
            type={InputType.NUMBER}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};

export const ConfigurableTextarea: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <Input
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isTextarea
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a textarea, write some text')}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="a-textarea-name"
            onChange={({ currentTarget }): void => {
                setValue(parseInputValue(currentTarget));
            }}
            type={select('Type', InputType, InputType.TEXT)}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};

export const ConfigurableTextareaClickable: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <Input
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isTextarea
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a textarea, write some text')}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="a-textarea-name"
            onChange={({ currentTarget }): void => {
                setValue(parseInputValue(currentTarget));
            }}
            onClick={action('On click')}
            type={select('Type', InputType, InputType.TEXT)}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
