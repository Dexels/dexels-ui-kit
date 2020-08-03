import { boolean, select, text } from '@storybook/addon-knobs';
import DropdownSelect, { DropdownOptionProps } from './DropdownSelect';
import { IconType, InputVariant } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import { Icon } from '../../atoms/Icon/Icon';

export default { title: 'organisms/DropdownSelect' };

const options: DropdownOptionProps[] = [
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER1} />,
        label: 'Banana',
        value: 'BANANA',
    },
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER2} />,
        label: 'Apple',
        value: 'APPLE',
    },
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER3} />,
        label: 'Orange',
        value: 'ORANGE',
    },
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER4} />,
        label: 'Pear',
        value: 'PEAR',
    },
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER5} />,
        label: 'Strawberry',
        value: 'STRAWBERRY',
    },
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER5} />,
        label: 'Pineapple',
        value: 'PINEAPPLE',
    },
];

export const Configurable: FunctionComponent = () => {
    const [value] = useState('');

    return (
        <DropdownSelect
            errorMessage={text('Error message', 'Help, something went wrong!')}
            isDisabled={boolean('Is disabled', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            name="an-input-name"
            options={options}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
