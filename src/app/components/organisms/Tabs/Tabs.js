import React, { useState } from 'react';
import {
    StyledTabs,
    TabHeader,
    TabHeaderList,
    TabPanel,
} from './Tabs.sc';
import Card from '../../atoms/Card/Card';
import PropTypes from 'prop-types';

const Tabs = ({ elevation, hasFullwidthTabHeader, tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <StyledTabs elevation={elevation}>
            <TabHeaderList>
                {tabs.length > 0 && tabs.map((tab, index) => (
                    <TabHeader
                        hasFullwidthTabHeader={hasFullwidthTabHeader}
                        isActive={activeTabIndex === index}
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

Tabs.elevations = Card.elevations;

Tabs.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Tabs.elevations)),
    hasFullwidthTabHeader: PropTypes.bool,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.node.isRequired,
            title: PropTypes.node.isRequired,
        }),
    ).isRequired,
};

Tabs.defaultProps = {
    elevation: Tabs.elevations.LEVEL_1,
    hasFullwidthTabHeader: true,
};

export default Tabs;
