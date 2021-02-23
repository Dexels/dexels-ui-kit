import { boolean, select } from '@storybook/addon-knobs';
import React, { FunctionComponent, SyntheticEvent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Tabs from './Tabs';

export default { title: 'organisms/Tabs' };

const comp = <Button onClick={action('On click')}>{'Button for Panel 1'}</Button>;

const getTab = (event: SyntheticEvent, tabIndex: number): number => {
    // eslint-disable-next-line no-console
    console.log('Clicked tab:', tabIndex);
    // eslint-disable-next-line no-console
    console.log('Event:', event);

    return tabIndex;
};

export const Configurable: FunctionComponent = () => (
    <Tabs
        hasFullWidthTabHeaders={boolean('Has fullwidth tab headers', true)}
        hasPadding={boolean('Has padding', false)}
        initiallyActiveTabIndex={select('Active tab', [1, 2], 1)}
        isSmall={boolean('Is small', false)}
        onClickTab={getTab}
        tabs={[
            {
                content: comp,
                isDisabled: true,
                title: 'Tab 1',
            },
            {
                content: 'Tab 2 content',
                title: 'Tab 2 with longer text',
            },
            {
                content: 'Tab 3 content',
                title: 'Tab 3',
            },
        ]}
    />
);
