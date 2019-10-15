import React, { useState } from 'react';
import {
    StyledTabs,
    TabHeader,
    TabHeaderList,
    TabPanel,
} from './Tabs.sc';
import { ELEVATIONS } from '../../../utils/constants';
import PropTypes from 'prop-types';

function setInitiallyActiveTabIndex(tab) {
    return !tab.isDisabled && tab;
}

const Tabs = ({
    elevation,
    hasFullWidthTabHeaders,
    initiallyActiveTabIndex,
    tabs,
}) => {
    const [activeTabIndex, setActiveTabIndex] = initiallyActiveTabIndex ? useState(initiallyActiveTabIndex)
        : useState(tabs.findIndex(setInitiallyActiveTabIndex));

    return (
        <StyledTabs elevation={elevation}>
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
    elevation: Tabs.elevations.LEVEL_1,
    hasFullWidthTabHeaders: true,
    initiallyActiveTabIndex: null,
};

export default Tabs;
