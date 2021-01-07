import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import Label from './Label';

export default { title: 'atoms/Label' };

export const Configurable: FunctionComponent = () => (
    <Label
        hasAlternativeTextStyle={boolean('Has alternative textstyle', false)}
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
