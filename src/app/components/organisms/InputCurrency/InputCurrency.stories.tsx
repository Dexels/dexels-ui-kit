import { AdornmentPosition, InputVariant, Locale } from '../../../types';
import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import InputCurrency from './InputCurrency';

export default { title: 'organisms/InputCurrency' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <InputCurrency
            adornmentPosition={select('Adornment Position', AdornmentPosition, AdornmentPosition.LEFT)}
            errorMessage={text('Error message', 'Invalid currency!')}
            hasValidColor={boolean('Has valid color', false)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            label={text('Label', 'Amount')}
            locale={select('Locale', Locale, Locale.NL)}
            name="a-inputcurrency-name"
            onBlur={action('On blur')}
            onChange={(event): void => {
                setValue(event.currentTarget.value);
            }}
            onClick={action('On click')}
            onFocus={action('On focus')}
            onKeyDown={action('On keydown')}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
