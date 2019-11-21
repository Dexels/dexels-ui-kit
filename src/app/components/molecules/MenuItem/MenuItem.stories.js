import React, { useState } from 'react';
import MenuItem from './MenuItem';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export default { title: 'molecules/MenuItem' };

export const Configurable = () => {
    const [isVisible, setVisible] = useState('');
    const [isSelected, setSelected] = useState('');

    const handleOnClick = (item) => {
        if (isVisible === item) {
            setVisible('');
        } else {
            setVisible(item);
        }

        setSelected(item);
    };

    return (
        <>
            <MenuItem
                hasDivider
                iconType={TextWithOptionalIcon.iconTypes.SHIRT}
                isParentItem
                isSelected={isSelected === 'Tournament'}
                isVisible={isVisible === 'Tournament'}
                onClick={() => handleOnClick('Tournament')}
                title={'Tournament'}
            />
            <MenuItem
                hasChildrenItems
                hasDivider
                iconType={TextWithOptionalIcon.iconTypes.MATCHOWN}
                isParentItem
                isSelected={isSelected === 'Matches'}
                isVisible={isVisible === 'Matches'}
                onClick={() => handleOnClick('Matches')}
                title={'Matches'}
            />
            <MenuItem
                isSelected={isSelected === 'Fields'}
                isVisible={isVisible === 'Matches'}
                onClick={() => setSelected('Fields')}
                title={'Fields'}
            />
            <MenuItem
                hasChildrenItems
                hasDivider
                iconType={TextWithOptionalIcon.iconTypes.LIGHTBULB}
                isParentItem
                isSelected={isSelected === 'Competitions'}
                isVisible={isVisible === 'Competitions'}
                onClick={() => handleOnClick('Competitions')}
                title={'Competitions'}
            />
            <MenuItem
                isSelected={isSelected === 'Teams'}
                isVisible={isVisible === 'Competitions'}
                onClick={() => setSelected('Teams')}
                title={'Teams'}
            />
            <MenuItem
                isSelected={isSelected === 'Officials'}
                isVisible={isVisible === 'Competitions'}
                onClick={() => setSelected('Officials')}
                title={'Officials'}
            />
        </>
    );
};
