import { AdornmentPosition, IconType, InputType, InputVariant, Locale } from '../../../types';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../../atoms/Icon/Icon';
import Input from './Input';

export default { title: 'molecules/Input' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <Input
            autoFocus={boolean('Auto focus', true)}
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            hasTransparentBackground={boolean('Has transparent background', true)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            isTextarea={boolean('Is textarea', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            locale={select('Locale', Locale, Locale.NL)}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="an-input-name"
            onBlur={action('On blur')}
            onChange={({ currentTarget }): void => {
                setValue(currentTarget.value);
            }}
            onFocus={action('On focus')}
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
            adornment={<Icon type={IconType.CURRENCY_EU} />}
            adornmentPosition={select('Adornment Position', AdornmentPosition, AdornmentPosition.LEFT)}
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            hasTransparentBackground={boolean('Has transparent background', true)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            isTextarea={boolean('Is textarea', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            locale={select('Locale', Locale, Locale.NL)}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="an-input-name"
            onBlur={action('On blur')}
            onChange={({ currentTarget }): void => {
                setValue(currentTarget.value);
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
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            hasTransparentBackground={boolean('Has transparent background', true)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            isTextarea={boolean('Is textarea', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            locale={select('Locale', Locale, Locale.NL)}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="an-input-name"
            onBlur={action('On blur')}
            onChange={({ currentTarget }): void => {
                setValue(currentTarget.value);
            }}
            onClick={action('On click')}
            type={select('Type', InputType, InputType.TEXT)}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};

export const ConfigurableMinNumberAndRequired: FunctionComponent = () => {
    const [value, setValue] = useState('-1');

    return (
        <Input
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            hasTransparentBackground={boolean('Has transparent background', true)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', true)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This input can only contain numbers greater or equal to 0')}
            locale={select('Locale', Locale, Locale.NL)}
            min={number('Min', 0)}
            name="IsRequiredButBadNumber"
            onBlur={action('On blur')}
            onChange={({ currentTarget }): void => {
                setValue(currentTarget.value);
            }}
            type={InputType.NUMBER}
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
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            hasTransparentBackground={boolean('Has transparent background', true)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This input can only contain numbers')}
            locale={select('Locale', Locale, Locale.NL)}
            max={number('Max', 10)}
            min={number('Min', 0)}
            name="an-input-name"
            onBlur={action('On blur')}
            onChange={({ currentTarget }): void => {
                setValue(currentTarget.value);
            }}
            type={InputType.NUMBER}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};

export const ConfigurableAddress: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <Input
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            hasTransparentBackground={boolean('Has transparent background', true)}
            isDisabled={boolean('Is disabled', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This input has an empty string and maxlength')}
            locale={select('Locale', Locale, Locale.NL)}
            maxLength={number('Max', 32)}
            name="address"
            onBlur={action('On blur')}
            onChange={({ currentTarget }): void => {
                setValue(currentTarget.value);
            }}
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
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            hasTransparentBackground={boolean('Has transparent background', true)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            isTextarea
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a textarea, write some text')}
            locale={select('Locale', Locale, Locale.NL)}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="a-textarea-name"
            onBlur={action('On blur')}
            onChange={({ currentTarget }): void => {
                setValue(currentTarget.value);
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
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            hasTransparentBackground={boolean('Has transparent background', true)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            isTextarea
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a textarea, write some text')}
            locale={select('Locale', Locale, Locale.NL)}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="a-textarea-name"
            onBlur={action('On blur')}
            onChange={({ currentTarget }): void => {
                setValue(currentTarget.value);
            }}
            onClick={action('On click')}
            type={select('Type', InputType, InputType.TEXT)}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
