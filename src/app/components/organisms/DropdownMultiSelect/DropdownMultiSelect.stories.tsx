import {
    areAllOptionsSelected,
    getSelectedElements,
    getSelectedText,
    isAnyOptionSelected,
    setAllElementsDeselected,
    setAllElementsSelected,
    setElementSelected,
} from '../../../utils/functions/arrayObjectFunctions';
import { boolean, text } from '@storybook/addon-knobs';
import { data, Options } from './mockup/data';
import React, { FunctionComponent, useState } from 'react';
import { cloneArray } from '../../../utils/functions/arrayFunctions';
import DropdownMultiSelect from './DropdownMultiSelect';
import { DropdownOptionAllTexts } from './types';
import { DropdownVariant } from '../../molecules/Dropdown';
import SelectionControl from '../../molecules/SelectionControl/SelectionControl';

export default { title: 'organisms/DropdownMultiSelect' };

const TEXT_OPTION_ALL_SELECTED = 'All fruits selected';
const TEXT_OPTION_DESELECT_ALL = 'Deselect all fruits';
const TEXT_OPTION_SELECT_ALL = 'Select all fruits';
const originalOptionValues = cloneArray(data);

const getSelectAllOption = (
    options: Options,
    textOptionDeselectAll: string,
    textOptionSelectAll: string
): {
    text: string;
    value: DropdownOptionAllTexts;
} => {
    const hasSelected = isAnyOptionSelected(options);
    const allSelected = areAllOptionsSelected(options);

    if (allSelected) {
        return {
            text: textOptionDeselectAll,
            value: DropdownOptionAllTexts.ON,
        };
    }

    if (hasSelected) {
        return {
            text: textOptionDeselectAll,
            value: DropdownOptionAllTexts.INDETERMINATE,
        };
    }

    return {
        text: textOptionSelectAll,
        value: DropdownOptionAllTexts.OFF,
    };
};

const BaseComponent = (
    options: Options,
    originalOptions: Options,
    variant: DropdownVariant = DropdownVariant.COMPACT,
    maxHeight = '',
    label = ''
): JSX.Element => {
    const [optionValues, setOptionValues] = useState(options);
    const [isOpen, setIsOpen] = useState(false);

    const value = areAllOptionsSelected(optionValues)
        ? TEXT_OPTION_ALL_SELECTED
        : getSelectedText(getSelectedElements(optionValues));

    const [selectAllOption, setSelectAllOption] = useState(
        getSelectAllOption(optionValues, TEXT_OPTION_DESELECT_ALL, TEXT_OPTION_SELECT_ALL)
    );

    const setStates = (values: Options): void => {
        setOptionValues(cloneArray(values));

        setSelectAllOption(getSelectAllOption(values, TEXT_OPTION_DESELECT_ALL, TEXT_OPTION_SELECT_ALL));
    };

    const onChangeAll = (): void => {
        setStates(
            (isAnyOptionSelected(optionValues)
                ? setAllElementsDeselected(optionValues)
                : setAllElementsSelected(optionValues)) as Options
        );
    };

    return (
        <>
            <DropdownMultiSelect
                buttonCancelText={text('ButtonCancel text', 'Cancel')}
                buttonConfirmText={text('Button confirm text', 'Ok')}
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', false)}
                isDisabled={boolean('Is disabled', false)}
                isOpen={isOpen}
                isValid={boolean('Is valid', false)}
                label={label}
                maxHeight={maxHeight}
                name="the-best-fruit"
                onCancel={(): void => {
                    setStates(originalOptions);
                    setIsOpen(false);
                }}
                onClick={(): void => {
                    setIsOpen(!isOpen);
                }}
                onConfirm={(): void => {
                    setIsOpen(false);
                }}
                optionAll={
                    <SelectionControl
                        isChecked={selectAllOption.value === DropdownOptionAllTexts.ON}
                        isIndeterminate={selectAllOption.value === DropdownOptionAllTexts.INDETERMINATE}
                        label={selectAllOption.text}
                        name="DROPDOWN_MULTISELECT_OPTION_ALL"
                        onChange={onChangeAll}
                        value={selectAllOption.value}
                    />
                }
                options={optionValues.map((item) => (
                    <SelectionControl
                        isChecked={item.Selected}
                        key={item.Id}
                        label={item.Description}
                        name={`DROPDOWN_MULTISELECT_OPTION_${item.Id}`}
                        onChange={(): void => {
                            setStates(setElementSelected(optionValues, item) as Options);
                        }}
                        value={item.Id}
                    />
                ))}
                placeholder="Select the best fruits"
                value={value}
                variant={variant}
            />
            {!isOpen && (
                <div style={{ margin: '20px 0 0' }}>
                    {'Selected items:'}
                    {getSelectedElements(optionValues).map((item) => (
                        <p key={item.Id}>{`${item.Id} - ${item.Description}`}</p>
                    ))}
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
        {BaseComponent(data, originalOptionValues)}
    </>
);

export const ConfigurableOutlineVariant: FunctionComponent = () =>
    BaseComponent(data, originalOptionValues, DropdownVariant.OUTLINE, '150px', 'What are the best fruits?');
