import {
    CheckboxDataProps,
    DatePickerDataProps,
    EditableDropdownDataProps,
    EditableDropdownMultiSelectDataProps,
    EditableDropdownSelectDataProps,
    EditableInformationData,
    EditableInputCurrencyDataProps,
    EditableInputDataProps,
    EditableInputNumberDataProps,
    EditableScorePickerDataProps,
    EditableTextareaDataProps,
    TimePickerDataProps,
} from '../types';
import { EditableDataComponent, IconType } from '../../../../types';
import { Fruit, fruits } from './fruits';
import moment from 'moment';

export const editableInformationDataWithErrorMessages = <T extends Fruit, U extends Fruit>(): EditableInformationData<
    T,
    U
> => {
    const result: EditableInformationData<T, U> = [];

    result.push({
        component: EditableDataComponent.DATEPICKER,
        errorMessage: 'Error in date picker',
        hasError: true,
        isEditable: true,
        isVisibleOnlyOnEdit: true,
        label: 'Date',
        name: 'Date',
        value: moment(),
    } as DatePickerDataProps);

    result.push({
        component: EditableDataComponent.TIMEPICKER,
        errorMessage: 'Error in time picker',
        hasError: true,
        isEditable: true,
        label: 'Time',
        name: 'Time',
        value: ['12', '00'],
    } as TimePickerDataProps);

    result.push({
        component: EditableDataComponent.CHECKBOX,
        errorMessage: 'Error in checkbox',
        hasError: true,
        isEditable: true,
        label: 'Checkbox 1',
        name: 'Checkbox',
        textValue: 'Yes',
        value: true,
    } as CheckboxDataProps);

    result.push({
        component: EditableDataComponent.INPUTNUMBER,
        errorMessage: 'Error in type number',
        hasError: true,
        isEditable: true,
        isRequired: true,
        label: 'Number',
        min: 0,
        name: 'Number',
        value: 0,
    } as EditableInputNumberDataProps);

    result.push({
        component: EditableDataComponent.INPUT,
        errorMessage: 'Error in input',
        hasError: true,
        isEditable: true,
        isRequired: true,
        label: 'Input',
        name: 'Input',
        value: 'Erik',
    } as EditableInputDataProps);

    result.push({
        component: EditableDataComponent.DROPDOWN,
        errorMessage: 'Error in dropdown',
        hasError: true,
        isEditable: true,
        isRequired: true,
        label: 'Dropdown',
        name: 'Dropdown',
        nameTextValue: ' DropdownId',
        options: fruits,
        textValue: 'Banana',
        value: '1',
    } as EditableDropdownDataProps);

    result.push({
        component: EditableDataComponent.SCOREPICKER,
        errorMessage: 'Error in score picker',
        hasError: true,
        isEditable: true,
        label: 'Score',
        name: 'Score',
        placeholder: ['home', 'away'],
        value: ['2', '0'],
    } as EditableScorePickerDataProps);

    result.push({
        component: EditableDataComponent.TEXTAREA,
        errorMessage: 'Error in textarea',
        hasError: true,
        ignoreOutlineVariant: true,
        isEditable: true,
        label: 'Textarea',
        name: 'EditableTextArea',
        value: 'text here',
    } as EditableTextareaDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        errorMessage: 'Error in type currency',
        hasError: true,
        isEditable: true,
        isRequired: true,
        label: 'Currency',
        name: 'EditableCurrency',
        value: '0.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.DROPDOWNSELECT,
        errorMessage: 'Error in dropdown select',
        footerText: 'Select',
        hasError: true,
        iconType: IconType.CLUBPLACEHOLDER1,
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
        allSelectedLabel: 'All selected',
        buttonCancelText: 'Cancel',
        buttonConfirmText: 'ok',
        component: EditableDataComponent.DROPDOWNMULTISELECT,
        deselectAllLabel: 'Deselect all',
        errorMessage: 'Error in dropdown multiselect',
        hasError: true,
        isEditable: true,
        isRequired: true,
        label: 'DropdownMultiSelect',
        name: 'DropdownMultiSelect',
        options: fruits,
        selectAllLabel: 'Select all',
    } as EditableDropdownMultiSelectDataProps<U>);

    return result;
};

export default editableInformationDataWithErrorMessages;
