import React, { FunctionComponent, ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import { StyledTabs, TabHeader, TabHeaders, TabHeaderText, TabPanel } from './Tabs.sc';
import { isEmpty } from '../../../utils/functions/validateFunctions';

export interface Tab {
    content: ReactNode;
    isDisabled?: boolean;
    padding?: { bottom: number; left: number; right: number; top: number };
    title: ReactNode;
}

export interface TabsProps {
    children?: never;
    className?: string;
    hasFullWidthTabHeaders?: boolean;
    hasPadding?: boolean;
    initiallyActiveTabIndex?: number;
    isChangeTabAllowed?: boolean;
    isSmall?: boolean;
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
    hasPadding = false,
    initiallyActiveTabIndex,
    isChangeTabAllowed = true,
    isSmall = false,
    onClickTab,
    tabs,
}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(getInitiallyActiveTabIndex(tabs, initiallyActiveTabIndex));
    const [localTabs, setLocalTabs] = useState<Tab[]>(tabs);

    useEffect(() => {
        if (!isEmpty(initiallyActiveTabIndex)) {
            setActiveTabIndex(getInitiallyActiveTabIndex(tabs, initiallyActiveTabIndex));
        }
    }, [initiallyActiveTabIndex]);

    useEffect(() => {
        setLocalTabs(tabs);
    }, [tabs]);

    return (
        <StyledTabs className={className} hasPadding={hasPadding} isSmall={isSmall}>
            <TabHeaders>
                {localTabs.length > 0 &&
                    localTabs.map(({ isDisabled = false, title }: Tab, index: number) => (
                        <TabHeader
                            isActive={activeTabIndex === index}
                            isChangeTabAllowed={isChangeTabAllowed}
                            isDisabled={isDisabled}
                            isFullWidth={hasFullWidthTabHeaders}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            onClick={(event: SyntheticEvent): void => {
                                if (isChangeTabAllowed) {
                                    setActiveTabIndex(index);
                                }

                                if (onClickTab) {
                                    onClickTab(event, index);
                                }
                            }}
                        >
                            <TabHeaderText>{title}</TabHeaderText>
                        </TabHeader>
                    ))}
                {/* When not using full width, we need to add a dummy tab to make sure the background and bottom border are shown */}
                {!hasFullWidthTabHeaders && (
                    <TabHeader
                        isActive={false}
                        isChangeTabAllowed={isChangeTabAllowed}
                        isDisabled
                        isFullWidth={false}
                        key={localTabs.length + 1}
                    />
                )}
            </TabHeaders>
            {localTabs[activeTabIndex] && (
                // eslint-disable-next-line object-property-newline
                <TabPanel padding={localTabs[activeTabIndex].padding || { bottom: 0, left: 0, right: 0, top: 0 }}>
                    {localTabs[activeTabIndex].content}
                </TabPanel>
            )}
        </StyledTabs>
    );
};

export default Tabs;
