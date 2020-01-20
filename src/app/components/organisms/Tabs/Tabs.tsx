import { Elevations, ElevationsMap } from '../../../types';
import React, { useState } from 'react';
import {
    StyledTabs,
    TabHeader,
    TabHeaderList,
    TabPanel,
} from './Tabs.sc';
import { ELEVATIONS } from '../../../utils/constants';

export interface Tab {
    content: React.ReactNode;
    isDisabled?: boolean;
    title: React.ReactText;
}

export interface TabsProps {
    className?: string;
    elevation?: Elevations;
    hasFullWidthTabHeaders?: boolean;
    initiallyActiveTabIndex?: number;
    tabs: Tab[];
}

interface TabsComponent extends React.FunctionComponent<TabsProps> {
    elevations: ElevationsMap;
}

const setInitiallyActiveTabIndex = (tab: Tab) => (
    !tab.isDisabled && tab
);

export const Tabs: TabsComponent = ({
    className,
    elevation,
    hasFullWidthTabHeaders,
    initiallyActiveTabIndex,
    tabs,
}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(
        initiallyActiveTabIndex || tabs.findIndex(setInitiallyActiveTabIndex),
    );

    return (
        <StyledTabs className={className} elevation={elevation}>
            <TabHeaderList>
                {tabs.length > 0 && tabs.map((tab: Tab, index: number) => (
                    <TabHeader
                        isActive={activeTabIndex === index}
                        isDisabled={tab.isDisabled}
                        isFullWidth={hasFullWidthTabHeaders}
                        key={tab.title}
                        onClick={() => {
                            setActiveTabIndex(index);
                        }}
                    >
                        {tab.title}
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

Tabs.elevations = ELEVATIONS;

Tabs.defaultProps = {
    className: '',
    elevation: Tabs.elevations.LEVEL_1,
    hasFullWidthTabHeaders: true,
    initiallyActiveTabIndex: null,
};

export default Tabs;
