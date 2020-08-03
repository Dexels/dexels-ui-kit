import React, { FunctionComponent } from 'react';
import List from './List';
import ListItem from '../../atoms/ListItem/ListItem';

export default { title: 'molecules/List' };

const fruits = [
    {
        id: 1,
        name: 'Banana',
    },
    {
        id: 2,
        name: 'Apple',
    },
    {
        id: 3,
        name: 'Pear',
    },
    {
        id: 4,
        name: 'Mango',
    },
];

const optionArray = fruits.map((fruit) => <ListItem key={fruit.id}>{fruit.name}</ListItem>);

export const Configurable: FunctionComponent = () => <List>{optionArray}</List>;
