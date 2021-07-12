import { boolean, select } from '@storybook/addon-knobs';
import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import Tabs, { Tab } from './Tabs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import { SelectionControl } from '../../molecules/SelectionControl';

export default { title: 'organisms/Tabs' };

const comp = <Button onClick={action('On click')}>{'Button for Panel 1'}</Button>;

const getTab = (event: SyntheticEvent, tabIndex: number): number => {
    // eslint-disable-next-line no-console
    console.log('Clicked tab:', tabIndex);
    // eslint-disable-next-line no-console
    console.log('Event:', event);

    return tabIndex;
};

export const Configurable: FunctionComponent = () => {
    const [hideTab2, setHideTab2] = useState(false);

    const getTabs = (): Tab[] => {
        const tabs: Tab[] = [];

        tabs.push({
            content: comp,
            isDisabled: true,
            title: 'Tab 1',
        });

        if (!hideTab2) {
            tabs.push({
                content: 'Tab 2 content',
                title: 'Tab 2 with longer text',
            });
        }

        tabs.push(
            {
                content: 'Tab 3 content',
                title: 'Tab 3',
            },
            {
                content: 'Tab 4 content',
                title: 'Tab 4',
            }
        );

        return tabs;
    };

    return (
        <>
            <div style={{ padding: '0 0 30px' }}>
                <SelectionControl
                    isChecked={hideTab2}
                    label={hideTab2 ? 'Show 2nd tab' : 'Hide 2nd tab'}
                    name="hideTab2"
                    onChange={(): void => {
                        setHideTab2(!hideTab2);
                    }}
                    value="hideTab2"
                />
            </div>
            <Tabs
                hasFullWidthTabHeaders={boolean('Has fullwidth tab headers', true)}
                hasPadding={boolean('Has padding', false)}
                initiallyActiveTabIndex={select('Active tab', [1, 2, 3], 1)}
                isChangeTabAllowed={boolean('Is change Tab allowed', true)}
                isSmall={boolean('Is small', false)}
                onClickTab={getTab}
                tabs={getTabs()}
            />
        </>
    );
};
