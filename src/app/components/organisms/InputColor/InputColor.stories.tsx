import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { InputColor } from './InputColor';

export default { title: 'organisms/InputColor' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState('#009FFD');

    return (
        <InputColor
            isDisabled={boolean('Is disabled', false)}
            name="a-inputcolor-name"
            onChange={(event): void => {
                console.log('[onChange]', event.currentTarget.value);
                setValue(event.currentTarget.value);
            }}
            onClick={action('On click')}
            value={value}
        />
    );
};

export const ConfigurableWithoutDefaultValue: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <InputColor
            isDisabled={boolean('Is disabled', false)}
            name="a-inputcolor-name"
            onChange={(event): void => {
                console.log('[onChange]', event.currentTarget.value);
                setValue(event.currentTarget.value);
            }}
            onClick={action('On click')}
            value={value}
        />
    );
};
