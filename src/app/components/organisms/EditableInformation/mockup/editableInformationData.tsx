import {
    CheckboxDataProps,
    DatePickerDataProps,
    EditableDatePickerDataProps,
    EditableDropdownDataProps,
    EditableDropdownMultiSelectDataProps,
    EditableDropdownSelectDataProps,
    EditableInformationData,
    EditableInformationDataType,
    EditableInputCurrencyDataProps,
    EditableInputDataProps,
    EditableInputNumberDataProps,
    EditableScorePickerDataProps,
    EditableTextareaDataProps,
    EditableTimePickerDataProps,
    TimePickerDataProps,
    ValueTypes,
} from '../types';
import { EditableDataComponent, IconType, Locale } from '../../../../types';
import { IconCustomizable, IconCustomizableSize } from '../../../molecules/IconCustomizable';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import moment from 'moment';
import React from 'react';

export interface Fruit extends DropdownSelectOption, DropdownMultiSelectOption {
    isSelected: boolean;
}

export const updateValuesOfData = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>,
    values: { [key: string]: ValueTypes<T, U> }
): EditableInformationData<T, U> => {
    const newData = data.map((element: EditableInformationDataType<T, U>) => {
        if ('name' in element && element.name in values) {
            return {
                ...element,
                value: values[element.name],
            };
        }

        return element;
    });

    return newData as EditableInformationData<T, U>;
};

const fruits: Fruit[] = [
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

export const editableInformationData = <T extends Fruit, U extends Fruit>(): EditableInformationData<T, U> => {
    const result: EditableInformationData<T, U> = [];

    result.push({
        component: EditableDataComponent.DATEPICKER,
        isDisabled: true,
        isEditable: true,
        isVisibleOnlyOnEdit: true,
        label: 'Date',
        name: 'Date',
        value: moment(),
    } as DatePickerDataProps);

    result.push({
        component: EditableDataComponent.TIMEPICKER,
        isEditable: false,
        label: 'Time',
        name: 'Time',
        value: ['12', '00'],
    } as TimePickerDataProps);

    result.push({
        component: EditableDataComponent.CHECKBOX,
        isEditable: false,
        label: 'Checkbox 1',
        name: 'Checkbox',
        textValue: 'Yes',
        value: true,
    } as CheckboxDataProps);

    result.push({
        component: EditableDataComponent.INPUTNUMBER,
        isDisabled: false,
        isEditable: false,
        isRequired: true,
        label: 'Number',
        min: 0,
        name: 'Number',
        value: 0,
    } as EditableInputNumberDataProps);

    result.push({
        component: EditableDataComponent.INPUT,
        isDisabled: false,
        isEditable: false,
        isRequired: true,
        label: 'Input (not editable)',
        maxLength: 20,
        name: 'Input',
        value: 'Banana',
    } as EditableInputDataProps);

    result.push({
        component: EditableDataComponent.DROPDOWN,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Dropdown',
        name: 'Dropdown',
        options: fruits,
        textValue: 'Banana',
        value: '1',
    } as EditableDropdownDataProps);

    result.push({
        component: EditableDataComponent.SCOREPICKER,
        isEditable: false,
        label: 'Score',
        name: 'Score',
        placeholder: ['home', 'away'],
        value: ['2', '0'],
    } as EditableScorePickerDataProps);

    result.push({
        component: EditableDataComponent.TEXTAREA,
        isEditable: true,
        label: 'Textarea',
        name: 'EditableTextArea',
        value: 'text here',
    } as EditableTextareaDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Currency',
        locale: Locale.NL,
        name: 'EditableCurrency',
        value: '0',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.DATEPICKER,
        isEditable: true,
        label: 'Editable Date',
        name: 'EditableDate',
        value: moment(),
    } as EditableDatePickerDataProps);

    result.push({
        component: EditableDataComponent.TIMEPICKER,
        isEditable: true,
        label: 'Editable Time',
        name: 'EditableTime',
        value: ['10', '30'],
    } as EditableTimePickerDataProps);

    result.push({
        component: EditableDataComponent.CHECKBOX,
        isEditable: true,
        label: 'Checkbox 2',
        name: 'EditableCheckbox',
        textValue: 'Yes',
        value: true,
    } as CheckboxDataProps);

    result.push({
        component: EditableDataComponent.INPUTNUMBER,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Number Max 10',
        max: 10,
        min: 0,
        name: 'EditableNumber',
        value: 5,
    } as EditableInputNumberDataProps);

    result.push({
        component: EditableDataComponent.INPUT,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Editable Input',
        maxLength: 20,
        name: 'EditableInput',
        value: 'Apple',
    } as EditableInputDataProps);

    result.push({
        component: EditableDataComponent.DROPDOWNSELECT,
        footerText: 'Select',
        iconType: IconType.CLUBPLACEHOLDER1,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'DropdownSelect',
        name: 'DropdownSelect',
        nameId: 'DropdownSelectId',
        noResultsMessage: 'no results',
        optionLabel: "Use '{{option}}' as chosen {{type}}",
        options: fruits,
        type: 'fruit',
        value: 'Banana',
        valueId: '1',
    } as EditableDropdownSelectDataProps<T>);

    result.push({
        component: EditableDataComponent.SCOREPICKER,
        isEditable: true,
        label: 'Editable Score',
        name: 'EditableScore',
        placeholder: ['home', 'away'],
        value: ['2', '1'],
    } as EditableScorePickerDataProps);

    result.push({
        allSelectedLabel: 'All selected',
        buttonCancelText: 'Cancel',
        buttonConfirmText: 'ok',
        component: EditableDataComponent.DROPDOWNMULTISELECT,
        deselectAllLabel: 'Deselect all',
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'DropdownMultiSelect',
        name: 'DropdownMultiSelect',
        options: fruits,
        selectAllLabel: 'Select all',
    } as EditableDropdownMultiSelectDataProps<U>);

    return result;
};

export default editableInformationData;
