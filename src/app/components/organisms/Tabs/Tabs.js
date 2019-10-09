import React, { useState } from 'react';
import {
    StyledTabs,
    TabHeader,
    TabHeaderList,
    TabPanel,
    TabsComponent,
} from './Tabs.sc';
import Card from '../../atoms/Card/Card';
import PropTypes from 'prop-types';

const Tabs = ({
    elevation,
    tabs,
}) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <StyledTabs
            elevation={elevation}
        >
            <TabsComponent>
                <TabHeaderList>
                    {tabs.length > 0 && tabs.map((item, idx) => (
                        <TabHeader
                            isActive={activeTab === idx}
                            onClick={() => {
                                setActiveTab(idx);
                            }}
                        >
                            {item.title}
                        </TabHeader>
                    ))}
                </TabHeaderList>
                <TabPanel>
                    {tabs.length > 0 && tabs.map((item, idx) => {
                        if (activeTab === idx) {
                            return item.content;
                        }

                        return null;
                    })}
                </TabPanel>
            </TabsComponent>
        </StyledTabs>
    );
};

Tabs.elevations = Card.elevations;

Tabs.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Tabs.elevations)),
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.object.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

Tabs.defaultProps = {
    elevation: Tabs.elevations.LEVEL_1,
};

export default Tabs;
