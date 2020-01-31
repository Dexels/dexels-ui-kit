import { boolean, select, text } from '@storybook/addon-knobs';
import { Direction, IconSize, IconType } from '../../../types';
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
        direction={select('Direction', Direction, TextWithOptionalIcon.defaultProps.direction)}
        iconSize={select(
            'Icon size', IconSize, TextWithOptionalIcon.defaultProps.iconSize,
        )}
        iconType={select('Icon type', IconType, IconType.CHECK)}
        isCapitalized={boolean('Is capitalized', TextWithOptionalIcon.defaultProps.isCapitalized)}
    >
        {text('Text', 'Configure me!')}
    </TextWithOptionalIcon>
);
