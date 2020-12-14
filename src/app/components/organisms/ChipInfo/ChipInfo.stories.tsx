import React, { FunctionComponent } from 'react';
import { select, text } from '@storybook/addon-knobs';
import ChipInfo from './ChipInfo';
import { IconType } from '../../../types';

export default { title: 'organisms/ChipInfo' };

export const Configurable: FunctionComponent = () => (
    <ChipInfo iconType={select('Icon type', IconType, IconType.CHECK)} text={text('Text', 'Configure me!')} />
);
