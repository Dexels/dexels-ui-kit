import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import SelectOption from './SelectOption';

export default { title: 'atoms/SelectOption' };

export const Configurable: FunctionComponent = () => (
    <SelectOption
        isDisabled={boolean('Is disabled', false)}
        isHidden={boolean('Is hidden', false)}
        value={text('Value', 'The value')}
    >
        {text('Label', 'This is a label, awesome!')}
    </SelectOption>
);
