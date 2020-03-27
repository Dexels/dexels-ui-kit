import { boolean, select, text } from '@storybook/addon-knobs';
import { Direction, IconSize, IconType } from '../../../types';
import React, { FunctionComponent } from 'react';
import TextWithOptionalIcon from './TextWithOptionalIcon';

export default { title: 'molecules/TextWithOptionalIcon' };

export const Configurable: FunctionComponent = () => (
    <TextWithOptionalIcon isCapitalized={boolean('Is capitalized', false)}>
        {text('Text', 'Configure me!')}
    </TextWithOptionalIcon>
);

export const ConfigurableWithIcon: FunctionComponent = () => (
    <TextWithOptionalIcon
        direction={select('Direction', Direction, Direction.LTR)}
        iconSize={select('Icon size', IconSize, IconSize.LARGE)}
        iconType={select('Icon type', IconType, IconType.CHECK)}
        isCapitalized={boolean('Is capitalized', false)}
    >
        {text('Text', 'Configure me!')}
    </TextWithOptionalIcon>
);
