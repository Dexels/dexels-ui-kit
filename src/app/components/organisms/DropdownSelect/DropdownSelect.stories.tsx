import { boolean, select, text } from '@storybook/addon-knobs';
import DropdownSelect, { DropdownOptionProps } from './DropdownSelect';
import { IconType, InputVariant } from '../../../types';
import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../../atoms/Icon/Icon';

export default { title: 'organisms/DropdownSelect' };

const options: DropdownOptionProps[] = [
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER1} />,
        label: 'Bánana',
        value: 'BANANA',
    },
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER2} />,
        label: 'Apple',
        value: 'APPLE',
    },
    {
        adornment: <Icon type={IconType.CLUBPLACEHOLDER4} />,
        label: 'Pëach',
        searchValue: 'Pëac',
        value: 'PEACH',
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

    const onClickOptionCallback = (_: SyntheticEvent, option: DropdownOptionProps): void => {
        // eslint-disable-next-line no-console
        console.log('Clicked row:', option);

        action(`On click => ${option.label}`);
    };

    return (
        <DropdownSelect
            errorMessage={text('Error message', 'Help, something went wrong!')}
            instructionMessage={text('Instructions', 'Choose a fruit or type yourself a fruit!')}
            isDisabled={boolean('Is disabled', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            name="an-input-name"
            noResultsMessage={text('No results message', 'No fruit is found!')}
            onClickOption={onClickOptionCallback}
            options={options}
            staticOptionPrefix={text('Static option prefix', 'Use')}
            staticOptionSuffix={text('Static option suffix', 'as choozen fruit')}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
