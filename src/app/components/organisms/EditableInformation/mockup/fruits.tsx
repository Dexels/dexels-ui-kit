import { IconCustomizable, IconCustomizableSize } from '../../../molecules/IconCustomizable';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { IconType } from '../../../../types';
import React from 'react';

export interface Fruit extends DropdownSelectOption, DropdownMultiSelectOption {
    isSelected: boolean;
}

export const fruits: Fruit[] = [
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER10} />,
        isSelected: true,
        label: 'Banana',
        value: 1,
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER09} />,
        isSelected: false,
        label: 'Apple',
        value: 2,
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER10} />,
        isSelected: false,
        label: 'Pear',
        value: 3,
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER12} />,
        isSelected: false,
        label: 'Peach',
        value: 4,
    },
];
