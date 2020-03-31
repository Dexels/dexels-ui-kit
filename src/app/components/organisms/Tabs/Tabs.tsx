import React, { FunctionComponent, ReactNode, useState } from 'react';
import { TabHeader, TabHeaders, TabPanel } from './Tabs.sc';

export interface Tab {
    content: ReactNode;
    isDisabled?: boolean;
    title: ReactNode;
}

export interface TabsProps {
    children?: never;
    hasFullWidthTabHeaders?: boolean;
    initiallyActiveTabIndex?: number;
    tabs: Tab[];
}

const getInitiallyActiveTabIndex = (tabs: Tab[], initiallyActiveTabIndex?: number): number => {
    if (typeof initiallyActiveTabIndex === 'number') {
        return initiallyActiveTabIndex;
    }

    return tabs.findIndex(({ isDisabled }) => !isDisabled);
};

export const Tabs: FunctionComponent<TabsProps> = ({
    hasFullWidthTabHeaders = true,
    initiallyActiveTabIndex,
    tabs,
}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(getInitiallyActiveTabIndex(tabs, initiallyActiveTabIndex));

    return (
        <>
            <TabHeaders>
                {tabs.length > 0 &&
                    tabs.map(({ isDisabled = false, title }: Tab, index: number) => (
                        <TabHeader
                            isActive={activeTabIndex === index}
                            isDisabled={isDisabled}
                            isFullWidth={hasFullWidthTabHeaders}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            onClick={(): void => {
                                setActiveTabIndex(index);
                            }}
                        >
                            {title}
                        </TabHeader>
                    ))}
            </TabHeaders>
            {tabs[activeTabIndex] && <TabPanel>{tabs[activeTabIndex].content}</TabPanel>}
        </>
    );
};

export default Tabs;
