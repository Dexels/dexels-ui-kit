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
    EditableTextareaReadOnlyDataProps,
    EditableTimePickerDataProps,
    TimePickerDataProps,
    ValueTypes,
} from '../types';
import { EditableDataComponent, IconType, InputType } from '../../../../types';
import { Fruit, fruits } from './fruits';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import moment from 'moment';

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
        component: EditableDataComponent.DATEPICKER,
        isEditable: true,
        isVisibleOnlyOnEdit: true,
        label: 'NullDate',
        name: 'NullDate',
        value: null,
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
        component: EditableDataComponent.INPUTNUMBER,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'BadNumber',
        min: 0,
        name: 'BadNumber',

        value: -1,
    } as EditableInputNumberDataProps);

    result.push({
        component: EditableDataComponent.INPUT,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Input (null value)',
        name: 'InputNull',

        value: null,
    } as EditableInputDataProps);

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
        nameTextValue: 'DropdownId',
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
        value: 'text here\nmore text\n\nwhite spaces',
    } as EditableTextareaDataProps);

    result.push({
        component: EditableDataComponent.TEXTAREA_READONLY,
        label: 'Textarea ReactNode',
        name: 'NonEditableTextAreaReactNode',
        value: 'Bondssport:<br/>- Voetbal - Algemeen/Veld<br/>Verenigingssport:<br/>- Balgooien - Maandag/ACTIE<br/><br/>Er is/zijn één of meer verenigingssporten vastgelegd.<br/><br/>Voormalige of huidige vereniging:<br/>- Spero (BBKT07Z)<br/>- Relatiecode: HDHDHDGU (Niet gevonden)<br/><br/>Aangevraagd lidsoort: Bondslid<br/><br/>Aangevraagd lidsoort: Verenigingslid',
    } as EditableTextareaReadOnlyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Currency',
        name: 'EditableCurrency',

        value: '0.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Currency2',
        name: 'EditableCurrency2',

        value: '123.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Currency (comma)',
        name: 'EditableCurrencyComma',

        value: '451,123.87',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'NegativeCurrency',
        name: 'NegativeCurrency',

        value: '-108',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.DATEPICKER,
        isEditable: true,
        isOutsideRange: () => false,
        label: 'Editable Date',
        name: 'EditableDate',
        value: moment('1950-06-03'),
    } as EditableDatePickerDataProps);

    result.push({
        component: EditableDataComponent.DATEPICKER,
        dateFormat: 'D MMM YYYY',
        isEditable: true,
        isOutsideRange: () => false,
        label: 'Date format (D MMM YYYY)',
        name: 'FormatDate',
        value: moment('1970-06-03'),
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
        component: EditableDataComponent.INPUT,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Telephone',
        maxLength: 20,
        name: 'EditableTelephone',
        type: InputType.TELEPHONE,
        value: '06-12345678',
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
