import { boolean, text } from '@storybook/addon-knobs';
import Label from './Label';
import React from 'react';

export default { title: 'atoms/Label' };

export const Configurable = () => (
    <Label
        hasError={boolean('Has error', Label.defaultProps.hasError)}
        isActive={boolean('Is active', Label.defaultProps.isActive)}
        isDisabled={boolean('Is disabled', Label.defaultProps.isDisabled)}
        isFocussed={boolean('Is focussed', Label.defaultProps.isFocussed)}
        isHovered={boolean('Is hovered', Label.defaultProps.isHovered)}
        isSmall={boolean('Is small', Label.defaultProps.isSmall)}
        isValid={boolean('Is valid', Label.defaultProps.isValid)}
    >
        {text('Label', 'This is a label, awesome!')}
    </Label>
);
