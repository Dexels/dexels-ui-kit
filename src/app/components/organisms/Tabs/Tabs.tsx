import React, {
    FunctionComponent,
    ReactNode,
    ReactText,
    useState,
} from 'react';
import {
    StyledTabs,
    TabHeader,
    TabHeaderList,
    TabPanel,
} from './Tabs.sc';
import { Elevation } from '../../../types';

export interface Tab {
    content: ReactNode;
    isDisabled?: boolean;
    title: ReactText;
}

export interface TabsProps {
    children?: never;
    className?: string;
    elevation?: Elevation;
    hasFullWidthTabHeaders?: boolean;
    initiallyActiveTabIndex?: number;
    tabs: Tab[];
}

const setInitiallyActiveTabIndex = (tab: Tab): false | Tab => (
    !tab.isDisabled && tab
);

export const Tabs: FunctionComponent<TabsProps> = ({
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
                        onClick={(): void => {
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
