import React, { useState } from 'react';
import {
    StyledTabs,
    TabHeader,
    TabHeaderList,
    TabPanel,
} from './Tabs.sc';
import { ELEVATIONS } from '../../../utils/constants';
import PropTypes from 'prop-types';

const setInitiallyActiveTabIndex = (tab) => (
    !tab.isDisabled && tab
);

const Tabs = ({
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
                {tabs.length > 0 && tabs.map((tab, index) => (
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

Tabs.propTypes = {
    className: PropTypes.string,
    elevation: PropTypes.oneOf(Object.values(Tabs.elevations)),
    hasFullWidthTabHeaders: PropTypes.bool,
    initiallyActiveTabIndex: PropTypes.number,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.node.isRequired,
        isDisabled: PropTypes.bool,
        title: PropTypes.node.isRequired,
    })).isRequired,
};

Tabs.defaultProps = {
    className: '',
    elevation: Tabs.elevations.LEVEL_1,
    hasFullWidthTabHeaders: true,
    initiallyActiveTabIndex: null,
};

export default Tabs;
