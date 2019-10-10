import { array, select, text } from '@storybook/addon-knobs';
import CardNoResults from './CardNoResults';
import React from 'react';

export default { title: 'molecules/CardNoResults' };

export const Configurable = () => (
    <CardNoResults
        elevation={select('Elevation', CardNoResults.elevations, CardNoResults.defaultProps.elevation)}
        header={text('Header', 'Some header text')}
        iconColor={select('Icon color', CardNoResults.iconColors, CardNoResults.iconColors.purple100)}
        iconType={select('Type', CardNoResults.iconTypes, CardNoResults.iconTypes.SEARCH)}
        itemPrefix={text('Item prefix', '-')}
        items={array('Items', ['Item 1', 'Item 2'])}
        title={text('Title', 'Some title text')}
    />
);
