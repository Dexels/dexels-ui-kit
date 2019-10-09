import Colors from './Colors';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default { title: 'atoms/Colors' };

export const Configurable = () => (
    <Colors color={select('Color', Colors.colors, Colors.colors.black)} />
);
