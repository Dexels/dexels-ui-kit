import React, { FunctionComponent, ReactNode, SyntheticEvent, useState } from 'react';
import { StyledTabs, TabHeader, TabHeaders, TabPanel } from './Tabs.sc';

export interface Tab {
    content: ReactNode;
    isDisabled?: boolean;
    title: ReactNode;
}

export interface TabsProps {
    children?: never;
    className?: string;
    hasFullWidthTabHeaders?: boolean;
    initiallyActiveTabIndex?: number;
    onClickTab?: (event: SyntheticEvent, tabIndex: number) => void;
    tabs: Tab[];
}

const getInitiallyActiveTabIndex = (tabs: Tab[], initiallyActiveTabIndex?: number): number => {
    if (typeof initiallyActiveTabIndex === 'number') {
        return initiallyActiveTabIndex;
    }

    return tabs.findIndex(({ isDisabled }) => !isDisabled);
};

export const Tabs: FunctionComponent<TabsProps> = ({
    className,
    hasFullWidthTabHeaders = true,
    initiallyActiveTabIndex,
    onClickTab,
    tabs,
}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(getInitiallyActiveTabIndex(tabs, initiallyActiveTabIndex));

    return (
        <StyledTabs className={className}>
            <TabHeaders>
                {tabs.length > 0 &&
                    tabs.map(({ isDisabled = false, title }: Tab, index: number) => (
                        <TabHeader
                            isActive={activeTabIndex === index}
                            isDisabled={isDisabled}
                            isFullWidth={hasFullWidthTabHeaders}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            onClick={(event: SyntheticEvent): void => {
                                setActiveTabIndex(index);

                                if (onClickTab) {
                                    onClickTab(event, index);
                                }
                            }}
                        >
                            {title}
                        </TabHeader>
                    ))}
                {/* When not using full width, we need to add a dummy tab to make sure the background and bottom border are shown */}
                {!hasFullWidthTabHeaders && (
                    <TabHeader
                        isActive={false}
                        isDisabled
                        isFullWidth={false}
                        key={tabs.length + 1}
                    />
                )}
            </TabHeaders>
            {tabs[activeTabIndex] && <TabPanel>{tabs[activeTabIndex].content}</TabPanel>}
        </StyledTabs>
    );
};

export default Tabs;
