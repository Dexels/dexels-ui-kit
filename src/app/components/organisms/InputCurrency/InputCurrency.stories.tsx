import { AdornmentPosition, InputVariant, Locale } from '../../../types';
import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import InputCurrency from './InputCurrency';

export default { title: 'organisms/InputCurrency' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState('0.51');

    return (
        <InputCurrency
            adornmentPosition={select('Adornment Position', AdornmentPosition, AdornmentPosition.LEFT)}
            errorMessage={text('Error message', 'Invalid currency!')}
            hasError={boolean('Has error', false)}
            hasNegativeAmountColor={boolean('Has Negative Amount Color', true)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            isValid={boolean('Is valid', false)}
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
