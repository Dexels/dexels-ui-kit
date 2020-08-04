import { boolean, select, text } from '@storybook/addon-knobs';
import DropdownSelect, { DropdownOptionProps } from './DropdownSelect';
import { IconCustomizable, IconCustomizableSize } from '../../molecules/IconCustomizable';
import { IconType, InputVariant } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';

export default { title: 'organisms/DropdownSelect' };

const options: DropdownOptionProps[] = [
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

export const Configurable: FunctionComponent = () => {
    const [value] = useState('');

    return (
        <DropdownSelect
            errorMessage={text('Error message', 'Help, something went wrong!')}
            instructionMessage={text('Instructions', 'Choose a fruit or type yourself a fruit!')}
            isDisabled={boolean('Is disabled', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            name="an-input-name"
            noResultsMessage={text('No results message', 'No fruit is found!')}
            onClickOption={action('On click')}
            options={options}
            staticOptionPrefix={text('Static option prefix', 'Use')}
            staticOptionSuffix={text('Static option suffix', 'as chosen fruit')}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
