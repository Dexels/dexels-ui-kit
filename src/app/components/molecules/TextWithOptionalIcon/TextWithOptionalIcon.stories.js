import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import TextWithOptionalIcon from './TextWithOptionalIcon';

export default { title: 'molecules/TextWithOptionalIcon' };

export const Configurable = () => (
    <TextWithOptionalIcon>
        {text('Text', 'Configure me!')}
    </TextWithOptionalIcon>
);

export const ConfigurableWithIcon = () => (
    <TextWithOptionalIcon
        direction={select('Direction', TextWithOptionalIcon.directions, TextWithOptionalIcon.defaultProps.direction)}
        iconColor={select('Icon color', TextWithOptionalIcon.iconColors, TextWithOptionalIcon.iconColors.grey100)}
        iconType={select('Icon type', TextWithOptionalIcon.iconTypes, TextWithOptionalIcon.iconTypes.CHECK)}
    >
        {text('Text', 'Configure me!')}
    </TextWithOptionalIcon>
);
