import React, { useState } from 'react';
import MenuItem from './MenuItem/MenuItem';
import SubMenuItem from './SubMenuItem/SubMenuItem';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export default { title: 'molecules/Menu' };

export const Configurable = () => {
    const [expandedItem, setExpandedItem] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const handleOnClick = (item) => {
        if (expandedItem === item) {
            setExpandedItem('');
        } else {
            setExpandedItem(item);
        }

        setSelectedItem(item);
    };

    return (
        <>
            <MenuItem
                hasDivider
                iconType={TextWithOptionalIcon.iconTypes.SHIRT}
                isSelected={selectedItem === 'Tournament'}
                onClick={() => handleOnClick('Tournament')}
                title={'Tournament'}
            />
            <MenuItem
                hasDivider
                iconType={TextWithOptionalIcon.iconTypes.MATCHOWN}
                isExpanded={expandedItem === 'Matches'}
                isSelected={selectedItem === 'Matches'}
                onClick={() => handleOnClick('Matches')}
                title={'Matches'}
            >
                <SubMenuItem
                    isSelected={selectedItem === 'Fields'}
                    onClick={() => setSelectedItem('Fields')}
                    title={'Fields'}
                />
            </MenuItem>
            <MenuItem
                hasDivider
                iconType={TextWithOptionalIcon.iconTypes.LIGHTBULB}
                isExpanded={expandedItem === 'Competitions'}
                isSelected={selectedItem === 'Competitions'}
                onClick={() => handleOnClick('Competitions')}
                title={'Competitions'}
            >
                <SubMenuItem
                    isSelected={selectedItem === 'Teams'}
                    onClick={() => setSelectedItem('Teams')}
                    title={'Teams'}
                />
                <SubMenuItem
                    isSelected={selectedItem === 'Officials'}
                    onClick={() => setSelectedItem('Officials')}
                    title={'Officials'}
                />
            </MenuItem>
        </>
    );
};
