import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import InputCurrency from './InputCurrency';
import { InputVariant } from '../../../types';

export default { title: 'organisms/InputCurrency' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <InputCurrency
            allowEmpty={boolean('Allow empty', true)}
            errorMessage={text('Error message', 'Invalid currency!')}
            hasValidColor={boolean('Has valid color', false)}
            isDisabled={boolean('Is disabled', false)}
            label={text('Label', 'Amount')}
            name="a-inputcurrency-name"
            onChange={(event): void => {
                setValue(event.currentTarget.value);
            }}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
