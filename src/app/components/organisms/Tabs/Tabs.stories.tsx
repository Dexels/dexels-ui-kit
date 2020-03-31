import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import Tabs from './Tabs';

export default { title: 'organisms/Tabs' };

const comp = <Button onClick={action('On click')}>{'Button for Panel 1'}</Button>;

export const Configurable: FunctionComponent = () => (
    <Tabs
        hasFullWidthTabHeaders={boolean('Has fullwidth tab headers', true)}
        tabs={[
            {
                content: comp,
                isDisabled: true,
                title: 'Tab 1',
            },
            {
                content: 'Tab 2 content',
                title: 'Tab 2',
            },
            {
                content: 'Tab 3 content',
                title: 'Tab 3',
            },
        ]}
    />
);
