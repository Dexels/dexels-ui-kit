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
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <StyledTabs elevation={elevation}>
            <TabHeaderList>
                {tabs.length > 0 && tabs.map((tab, index) => (
                    <TabHeader
                        isActive={activeTabIndex === index}
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
            <TabPanel>
                {tabs[activeTabIndex].content}
            </TabPanel>
        </StyledTabs>
    );
};

Tabs.elevations = ELEVATIONS;

Tabs.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Tabs.elevations)),
    hasFullWidthTabHeaders: PropTypes.bool,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
    })).isRequired,
};

Tabs.defaultProps = {
    elevation: Tabs.elevations.LEVEL_1,
    hasFullWidthTabHeaders: true,
};

export default Tabs;
