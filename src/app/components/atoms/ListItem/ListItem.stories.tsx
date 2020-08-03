import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import ListItem from './ListItem';

export default { title: 'atoms/ListItem' };

export const Configurable: FunctionComponent = () => (
    <ListItem isDisabled={boolean('Is disabled', false)} isFocused={boolean('Is focused', false)}>
        {text('ListItem', 'This is a list item, awesome!')}
    </ListItem>
);
