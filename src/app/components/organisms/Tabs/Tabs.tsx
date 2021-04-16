import React, { FunctionComponent, ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import { StyledTabs, TabHeader, TabHeaders, TabHeaderText, TabPanel } from './Tabs.sc';
import { isEmpty } from '../../../utils/functions/validateFunctions';

export interface Tab {
    content: ReactNode;
    isDisabled?: boolean;
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

    useEffect(() => {
        if (!isEmpty(initiallyActiveTabIndex)) {
            setActiveTabIndex(getInitiallyActiveTabIndex(tabs, initiallyActiveTabIndex));
        }
    }, [initiallyActiveTabIndex]);

    return (
        <StyledTabs className={className} hasPadding={hasPadding} isSmall={isSmall}>
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
                    <TabHeader isActive={false} isDisabled isFullWidth={false} key={tabs.length + 1} />
                )}
            </TabHeaders>
            {tabs[activeTabIndex] && <TabPanel>{tabs[activeTabIndex].content}</TabPanel>}
        </StyledTabs>
    );
};

export default Tabs;
