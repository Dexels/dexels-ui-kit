import React, { useState } from 'react';
import MenuItem from './MenuItem';

export default { title: 'molecules/MenuItem' };

export const Configurable = () => {
    const [isExpanded, setExpanded] = useState('');
    const [isSelected, setSelected] = useState('');

    const handleOnClick = (item) => {
        if (isExpanded === item) {
            setExpanded('');
        } else {
            setExpanded(item);
        }

        setSelected(item);
    };

    return (
        <>
            <MenuItem
                hasDivider
                iconType={'MATCHOWN'}
                isExpanded={isExpanded === 'Matches'}
                isParentElement
                isSelected={isSelected === 'Matches'}
                onClick={() => handleOnClick('Matches')}
                title={'Matches'}
            />
            <MenuItem
                isExpanded={isExpanded === 'Matches'}
                isSelected={isSelected === 'Fields'}
                onClick={() => setSelected('Fields')}
                title={'Fields'}
            />
            <MenuItem
                hasDivider
                iconType={'LIGHTBULB'}
                isExpanded={isExpanded === 'Competitions'}
                isParentElement
                isSelected={isSelected === 'Competitions'}
                onClick={() => handleOnClick('Competitions')}
                title={'Competitions'}
            />
            <MenuItem
                isExpanded={isExpanded === 'Competitions'}
                isSelected={isSelected === 'Teams'}
                onClick={() => setSelected('Teams')}
                title={'Teams'}
            />
            <MenuItem
                isExpanded={isExpanded === 'Competitions'}
                isSelected={isSelected === 'Officials'}
                onClick={() => setSelected('Officials')}
                title={'Officials'}
            />
        </>
    );
};
