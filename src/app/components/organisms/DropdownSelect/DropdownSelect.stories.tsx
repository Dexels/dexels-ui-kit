import { boolean, select, text } from '@storybook/addon-knobs';
import DropdownSelect, { DropdownSelectOptionProps } from './DropdownSelect';
import { IconCustomizable, IconCustomizableSize } from '../../molecules/IconCustomizable';
import { IconType, InputVariant } from '../../../types';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { parseInputValue } from '../../../utils/functions/parseInputValue';

export default { title: 'organisms/DropdownSelect' };

const options: DropdownSelectOptionProps[] = [
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

// eslint-disable-next-line no-template-curly-in-string
const TYPEDTEXTTEMPLATE = "gebruik '{{${variableKey}}}' as choosen fruit";

export const Configurable: FunctionComponent = () => {
    const [value] = useState('');
    const [useTypedText, setUsedTypedText] = useState('');

    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget) {
            // eslint-disable-next-line no-template-curly-in-string
            setUsedTypedText(TYPEDTEXTTEMPLATE.replace('{{${variableKey}}}', parseInputValue(event.currentTarget)));
        }
    };

    return (
        <DropdownSelect
            errorMessage={text('Error message', 'Help, something went wrong!')}
            footerText={text('Instructions', 'Choose a fruit or type yourself a fruit!')}
            iconType={select('Type', IconType, IconType.CLUBPLACEHOLDER1)}
            isDisabled={boolean('Is disabled', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            name="an-input-name"
            noResultsMessage={text('No results message', 'No fruit is found!')}
            onChange={onChangeCallback}
            onConfirm={action('On click')}
            optionLabel={useTypedText}
            options={options}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
