import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import MenuItem from './MenuItem';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export default { title: 'molecules/MenuItem' };

export const Configurable = () => {
    const [isExpanded, setExpanded] = useState('');

    return (
        <>
            <MenuItem
                isDisabled={boolean('Is disabled', MenuItem.defaultProps.isDisabled)}
                isExpanded={isExpanded === 'Matches'}
                isParentElement
                onClick={() => {
                    if (isExpanded === 'Matches') {
                        setExpanded('');
                    } else {
                        setExpanded('Matches');
                    }
                }}
            >
                <TextWithOptionalIcon
                    iconType={TextWithOptionalIcon.iconTypes.MATCHOWN}
                    isCapitalized={false}
                >
                    {'Matches'}
                </TextWithOptionalIcon>
            </MenuItem>
            <MenuItem
                isDisabled={boolean('Is disabled', MenuItem.defaultProps.isDisabled)}
                isExpanded={isExpanded === 'Matches'}
                isParentElement={false}
                onClick={() => {}}
            >
                <TextWithOptionalIcon
                    iconType={TextWithOptionalIcon.iconTypes.FLAG}
                    isCapitalized={false}
                >
                    {'Fields'}
                </TextWithOptionalIcon>
            </MenuItem>
            <MenuItem
                isDisabled={boolean('Is disabled', MenuItem.defaultProps.isDisabled)}
                isExpanded={isExpanded === 'Competitions'}
                isParentElement
                onClick={() => {
                    if (isExpanded === 'Competitions') {
                        setExpanded('');
                    } else {
                        setExpanded('Competitions');
                    }
                }}
            >
                <TextWithOptionalIcon
                    iconType={TextWithOptionalIcon.iconTypes.LIGHTBULB}
                    isCapitalized={false}
                >
                    {'Competitions'}
                </TextWithOptionalIcon>
            </MenuItem>
            <MenuItem
                isDisabled={boolean('Is disabled', MenuItem.defaultProps.isDisabled)}
                isExpanded={isExpanded === 'Competitions'}
                isParentElement={false}
                onClick={() => {}}
            >
                <TextWithOptionalIcon
                    iconType={TextWithOptionalIcon.iconTypes.EVENTREDCARD}
                    isCapitalized={false}
                >
                    {'Teams'}
                </TextWithOptionalIcon>
            </MenuItem>
        </>
    );
};
