import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import TextWithOptionalIcon from './TextWithOptionalIcon';

export default { title: 'molecules/TextWithOptionalIcon' };

export const Configurable = () => (
    <TextWithOptionalIcon
        isCapitalized={boolean('Is capitalized', TextWithOptionalIcon.defaultProps.isCapitalized)}
    >
        {text('Text', 'Configure me!')}
    </TextWithOptionalIcon>
);

export const ConfigurableWithIcon = () => (
    <TextWithOptionalIcon
        direction={select('Direction', TextWithOptionalIcon.directions, TextWithOptionalIcon.defaultProps.direction)}
        iconType={select('Icon type', TextWithOptionalIcon.iconTypes, TextWithOptionalIcon.iconTypes.CHECK)}
        isCapitalized={boolean('Is capitalized', TextWithOptionalIcon.defaultProps.isCapitalized)}
    >
        {text('Text', 'Configure me!')}
    </TextWithOptionalIcon>
);
