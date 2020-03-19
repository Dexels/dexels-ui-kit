import { array, select, text } from '@storybook/addon-knobs';
import { Elevation, IconType } from '../../../types';
import React, { FunctionComponent } from 'react';
import CardNoResults from './CardNoResults';

export default { title: 'molecules/CardNoResults' };

export const Configurable: FunctionComponent = () => (
    <CardNoResults
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        header={text('Header', 'Some header text')}
        iconType={select('Type', IconType, IconType.SEARCH)}
        itemPrefix={text('Item prefix', '-')}
        items={array('Items', ['Item 1', 'Item 2'])}
        title={text('Title', 'Some title text')}
    />
);
