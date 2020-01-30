import { boolean, text } from '@storybook/addon-knobs';
import Label from './Label';
import React from 'react';

export default { title: 'atoms/Label' };

export const Configurable = () => (
    <Label
        hasError={boolean('Has error', Label.defaultProps.hasError)}
        isActive={boolean('Is active', Label.defaultProps.isActive)}
        isDisabled={boolean('Is disabled', Label.defaultProps.isDisabled)}
        isFocused={boolean('Is focused', Label.defaultProps.isFocused)}
        isSmall={boolean('Is small', Label.defaultProps.isSmall)}
        isTruncatable={boolean('Is truncatable', Label.defaultProps.isTruncatable)}
        isValid={boolean('Is valid', Label.defaultProps.isValid)}
    >
        {text('Label', 'This is a label, awesome!')}
    </Label>
);
