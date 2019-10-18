import { select, text } from '@storybook/addon-knobs';
import Icon from './Icon';
import React from 'react';

export default { title: 'atoms/Icon' };

export const Configurable = () => (
    <Icon
        color={select('Icon color', Icon.colors, Icon.colors.grey100)}
        size={text('Size in px', '24px')}
        type={select('Type', Icon.types, Icon.types.ARROW_DOWN)}
    />
);
