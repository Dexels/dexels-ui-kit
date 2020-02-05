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
import React, { useState } from 'react';
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

const getSelectAllOption = (options: Options, textOptionDeselectAll: string, textOptionSelectAll: string) => {
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
    label = '',
) => {
    const [optionValues, setOptionValues] = useState(options);
    const [isOpen, setIsOpen] = useState(false);

    const value = areAllOptionsSelected(optionValues)
        ? TEXT_OPTION_ALL_SELECTED : getSelectedText(getSelectedElements(optionValues));

    const [selectAllOption, setSelectAllOption] = useState(getSelectAllOption(
        optionValues,
        TEXT_OPTION_DESELECT_ALL,
        TEXT_OPTION_SELECT_ALL,
    ));

    const setStates = (values: Options) => {
        setOptionValues(cloneArray(values));

        setSelectAllOption(
            getSelectAllOption(
                values,
                TEXT_OPTION_DESELECT_ALL,
                TEXT_OPTION_SELECT_ALL,
            ),
        );
    };

    const onChangeAll = () => {
        setStates(isAnyOptionSelected(optionValues)
            ? setAllElementsDeselected(optionValues)
            : setAllElementsSelected(optionValues));
    };

    return (
        <>
            <DropdownMultiSelect
                buttonCancelText={text('ButtonCancel text', 'Cancel')}
                buttonConfirmText={text('Button confirm text', 'Ok')}
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', DropdownMultiSelect.defaultProps.hasError)}
                isDisabled={boolean('Is disabled', DropdownMultiSelect.defaultProps.isDisabled)}
                isOpen={isOpen}
                isValid={boolean('Is valid', DropdownMultiSelect.defaultProps.isValid)}
                label={label}
                maxHeight={maxHeight}
                name="the-best-fruit"
                onCancel={() => {
                    setStates(originalOptions);
                    setIsOpen(false);
                }}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                onConfirm={() => {
                    setIsOpen(false);
                }}
                optionAll={(
                    <SelectionControl
                        isChecked={selectAllOption.value === DropdownOptionAllTexts.ON}
                        isIndeterminate={selectAllOption.value === DropdownOptionAllTexts.INDETERMINATE}
                        label={selectAllOption.text}
                        name="DROPDOWN_MULTISELECT_OPTION_ALL"
                        onChange={onChangeAll}
                        value={selectAllOption.value}
                    />
                )}
                options={optionValues.map((item) => (
                    <SelectionControl
                        isChecked={item.Selected}
                        key={item.Id}
                        label={item.Description}
                        name={`DROPDOWN_MULTISELECT_OPTION_${item.Id}`}
                        onChange={() => {
                            setStates(setElementSelected(optionValues, item));
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
                        <p key={item.Id}>
                            {`${item.Id} - ${item.Description}`}
                        </p>
                    ))}
                    {'Selected items as string:'}
                    {value}
                </div>
            )}
        </>
    );
};

export const ConfigurableCompactVariant = () => (
    <>
        <p>
            {'What is the best fruit?'}
        </p>
        {BaseComponent(
            data,
            originalOptionValues,
        )}
    </>
);

export const ConfigurableOutlineVariant = () => (
    BaseComponent(
        data,
        originalOptionValues,
        DropdownVariant.OUTLINE,
        '150px',
        'What are the best fruits?',
    )
);
