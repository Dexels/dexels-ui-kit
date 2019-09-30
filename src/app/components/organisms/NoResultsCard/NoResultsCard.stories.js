import { array, select, text } from '@storybook/addon-knobs';
import NoResultsCard from './NoResultsCard';
import React from 'react';

export default { title: 'organisms/NoResultsCard' };

export const Configurable = () => (
    <NoResultsCard
        elevation={select('Elevation', NoResultsCard.elevations, NoResultsCard.defaultProps.elevation)}
        header={text('Header', 'Some header text')}
        height={text('Set height in px or %', NoResultsCard.defaultProps.height)}
        iconType={select('Type', NoResultsCard.iconTypes, NoResultsCard.iconTypes.SEARCH)}
        items={array('Items', ['Item 1', 'Item 2'])}
        title={text('Title', 'Some title text')}
        width={text('Set width in px or %', NoResultsCard.defaultProps.width)}
    />
);
