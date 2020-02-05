import { array, select, text } from '@storybook/addon-knobs';
import { Elevation, IconType } from '../../../types';
import CardNoResults from './CardNoResults';
import React from 'react';

export default { title: 'molecules/CardNoResults' };

export const Configurable = () => (
    <CardNoResults
        elevation={select('Elevation', Elevation, CardNoResults.defaultProps.elevation)}
        header={text('Header', 'Some header text')}
        iconType={select('Type', IconType, IconType.SEARCH)}
        itemPrefix={text('Item prefix', '-')}
        items={array('Items', ['Item 1', 'Item 2'])}
        title={text('Title', 'Some title text')}
    />
);
