import { boolean, text } from '@storybook/addon-knobs';
import Label from './Label';
import React from 'react';

export default { title: 'atoms/Label' };

export const Configurable = () => (
    <Label
        hasError={boolean('Has error', false)}
        isActive={boolean('Is active', false)}
        isDisabled={boolean('Is disabled', false)}
        isFocused={boolean('Is focused', false)}
        isSmall={boolean('Is small', false)}
        isTruncatable={boolean('Is truncatable', false)}
        isValid={boolean('Is valid', false)}
    >
        {text('Label', 'This is a label, awesome!')}
    </Label>
);
