import { boolean, text } from '@storybook/addon-knobs';
import { getSelectedElements, getSelectedText } from '../../../utils/functions/arrayObjectFunctions';
import React, { FunctionComponent, SyntheticEvent, useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { data } from './mockup/data';
import DropdownMultiSelect from './DropdownMultiSelect';
import { DropdownMultiSelectOption } from './types';
import { DropdownVariant } from '../../molecules/Dropdown';

export default { title: 'organisms/DropdownMultiSelect' };

const TEXT_OPTION_ALL_SELECTED = 'All fruits selected';
const TEXT_OPTION_DESELECT_ALL = 'Deselect all fruits';
const TEXT_OPTION_SELECT_ALL = 'Select all fruits';

const generateValue = (options: DropdownMultiSelectOption[]): string => {
    const selectedOptions = getSelectedElements(options, 'isSelected');

    return getSelectedText(selectedOptions, 'label');
};

const BaseComponent = (
    options: DropdownMultiSelectOption[],
    variant: DropdownVariant = DropdownVariant.COMPACT,
    maxHeight = '',
    label = ''
): JSX.Element => {
    const [optionValues, setOptionValues] = useState(options);
    const [value, setValue] = useState(generateValue(options));

    useEffect(() => {
        setValue(generateValue(optionValues));
    }, [optionValues]);

    const onConfirmCallback = (_: SyntheticEvent, updatedOptions: DropdownMultiSelectOption[]): void => {
        setOptionValues(updatedOptions);
    };

    return (
        <>
            <DropdownMultiSelect
                allSelectedLabel={text('all selected label', TEXT_OPTION_ALL_SELECTED)}
                buttonCancelText={text('ButtonCancel text', 'Cancel')}
                buttonConfirmText={text('Button confirm text', 'Ok')}
                deselectAllLabel={text('de-select all label', TEXT_OPTION_DESELECT_ALL)}
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', false)}
                isDisabled={boolean('Is disabled', false)}
                isValid={boolean('Is valid', false)}
                label={label}
                maxHeight={maxHeight}
                name="the-best-fruit"
                onCancel={action('On cancel')}
                onChange={action('On change')}
                onConfirm={onConfirmCallback}
                options={optionValues}
                placeholder="Select the best fruits"
                selectAllLabel={text('select all label', TEXT_OPTION_SELECT_ALL)}
                variant={variant}
            />
            {value && (
                <div style={{ margin: '20px 0 0' }}>
                    {'Selected items:'}
                    {optionValues
                        .filter((item) => item.isSelected)
                        .map((item) => {
                            return <p key={item.value}>{`${item.value as string} - ${item.label}`}</p>;
                        })}
                    {'Selected items as string:'}
                    {value}
                </div>
            )}
        </>
    );
};

export const ConfigurableCompactVariant: FunctionComponent = () => (
    <>
        <p>{'What is the best fruit?'}</p>
        {BaseComponent(data)}
    </>
);

export const ConfigurableOutlineVariant: FunctionComponent = () =>
    BaseComponent(data, DropdownVariant.OUTLINE, '150px', 'What are the best fruits?');
