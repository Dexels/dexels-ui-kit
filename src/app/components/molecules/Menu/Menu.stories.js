import React, { useState } from 'react';
import MenuItem from './MenuItem/MenuItem';
import { menuItems } from './mockup/menuItems';
import notes from './notes.md';
import SubMenuItem from './SubMenuItem/SubMenuItem';

export default {
    parameters: {
        notes,
    },
    title: 'molecules/Menu',
};

export const Configurable = () => {
    const [expandedItem, setExpandedItem] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const handleSetExpandedItem = (item, parentItem = null) => {
        let expandedItemTmp = '';

        if (expandedItem === parentItem) {
            expandedItemTmp = parentItem;
        }

        if (expandedItem !== item && !parentItem) {
            expandedItemTmp = item;
        }

        setExpandedItem(expandedItemTmp);
    };

    const handleOnClick = (item, parentItem = null) => {
        handleSetExpandedItem(item, parentItem);
        setSelectedItem(item);
    };

    return (
        menuItems.map((item) => (
            <MenuItem
                iconType={item.iconType}
                isActive={selectedItem === item.text}
                isDisabled={item.isDisabled}
                isExpanded={expandedItem === item.text}
                key={item.text}
                onClick={item.onClick ? item.onClick : () => handleOnClick(item.text)}
                text={item.text}
            >
                {item.children && item.children.map((child) => (
                    <SubMenuItem
                        isActive={selectedItem === child.text}
                        isDisabled={child.isDisabled}
                        key={child.text}
                        onClick={child.onClick ? child.onClick : () => handleOnClick(child.text, item.text)}
                        text={child.text}
                    />
                ))}
            </MenuItem>
        ))
    );
};
