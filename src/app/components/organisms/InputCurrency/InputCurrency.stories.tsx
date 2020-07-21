import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import InputCurrency from './InputCurrency';
import { InputVariant } from '../../../types';

export default { title: 'organisms/InputCurrency' };

export const Configurable: FunctionComponent = () => {
    return (
        <InputCurrency
            allowEmpty={boolean('Allow empty', true)}
            errorMessage={text('Error message', 'Invalid currency!')}
            hasValidColor={boolean('Has valid color', false)}
            isDisabled={boolean('Is disabled', false)}
            label={text('Label', 'Amount')}
            name="a-inputcurrency-name"
            value=""
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
