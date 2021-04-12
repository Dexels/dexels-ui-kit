import { IconCustomizable, IconCustomizableSize } from '../../../molecules/IconCustomizable';
import { DropdownSelectOption } from '../DropdownSelect';
import { IconType } from '../../../../types';
import React from 'react';

export const dropdownSelectOptions: DropdownSelectOption[] = [
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER10} />,
        label: 'Bánana',
        value: 'BANANA',
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER09} />,
        label: 'Apple',
        value: 'APPLE',
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER10} />,
        label: 'Pëach',
        searchValue: 'Pëac',
        value: 'PEACH',
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER11} />,
        label: 'Orange',
        value: 'ORANGE',
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER12} />,
        label: 'Pear',
        value: 'PEAR',
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER15} />,
        label: 'Strawberry',
        value: 'STRAWBERRY',
    },
    {
        adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER16} />,
        label: 'Pineapple',
        value: 'PINEAPPLE',
    },
];
