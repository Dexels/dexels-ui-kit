import Icon from './Icon';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default { title: 'atoms/Icon' };

export const Configurable = () => (
    <Icon type={select('Type', Icon.types, Icon.types.ArrowDown)} />
);
