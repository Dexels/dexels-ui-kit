import React, { useState } from 'react';
import {
    StyledTabs,
    TabHeader,
    TabHeaderList,
    TabPanel,
} from './Tabs.sc';
import { Elevation } from '../../../types';

export interface Tab {
    content: React.ReactNode;
    isDisabled?: boolean;
    title: React.ReactText;
}

export interface TabsProps {
    className?: string;
    elevation?: Elevation;
    hasFullWidthTabHeaders?: boolean;
    initiallyActiveTabIndex?: number;
    tabs: Tab[];
}

const setInitiallyActiveTabIndex = (tab: Tab) => (
    !tab.isDisabled && tab
);

export const Tabs: React.FunctionComponent<TabsProps> = ({
    className,
    elevation = Elevation.LEVEL_1,
    hasFullWidthTabHeaders = true,
    initiallyActiveTabIndex,
    tabs,
}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(
        initiallyActiveTabIndex || tabs.findIndex(setInitiallyActiveTabIndex),
    );

    return (
        <StyledTabs className={className} elevation={elevation}>
            <TabHeaderList>
                {tabs.length > 0 && tabs.map(({ isDisabled = false, title }: Tab, index: number) => (
                    <TabHeader
                        isActive={activeTabIndex === index}
                        isDisabled={isDisabled}
                        isFullWidth={hasFullWidthTabHeaders}
                        key={title}
                        onClick={() => {
                            setActiveTabIndex(index);
                        }}
                    >
                        {title}
                    </TabHeader>
                ))}
            </TabHeaderList>
            {tabs[activeTabIndex] && (
                <TabPanel>
                    {tabs[activeTabIndex].content}
                </TabPanel>
            )}
        </StyledTabs>
    );
};

export default Tabs;
