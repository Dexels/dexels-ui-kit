import React, { useState } from 'react';
import {
    StyledTabs,
    TabHeader,
    TabHeaderList,
    TabPanel,
} from './Tabs.sc';
import { ELEVATIONS } from '../../../utils/constants';
import PropTypes from 'prop-types';

const Tabs = ({ elevation, hasFullWidthTabHeaders, tabs }) => {
    let initiallyActiveTabIndex = null;

    (function setInitiallyActiveTabIndex() {
        let isTabSet = false;

        tabs.map((tab, index) => {
            if (!tab.disabled && !isTabSet) {
                isTabSet = true;
                initiallyActiveTabIndex = index;
            }

            return initiallyActiveTabIndex;
        });
    }());

    const [activeTabIndex, setActiveTabIndex] = useState(initiallyActiveTabIndex);

    return (
        <StyledTabs elevation={elevation}>
            <TabHeaderList>
                {tabs.length > 0 && tabs.map((tab, index) => (
                    <TabHeader
                        isActive={activeTabIndex === index}
                        isDisabled={tab.disabled}
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
    tabs: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.node.isRequired,
        disabled: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
    })).isRequired,
};

Tabs.defaultProps = {
    elevation: Tabs.elevations.LEVEL_1,
    hasFullWidthTabHeaders: true,
};

export default Tabs;
