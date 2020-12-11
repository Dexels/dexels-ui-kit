import { DropdownMultiSelectOption, DropdownMultiSelectProps } from '../DropdownMultiSelect';
import { DropdownSelectOption, DropdownSelectProps } from '../DropdownSelect/DropdownSelect';
import { DropdownProps } from '../../molecules/Dropdown';
import { EditableDataComponent } from '../../../types';
import { InputCurrencyProps } from '../../../../lib';
import { InputProps } from '../../molecules/Input/Input';
import { ReactNode } from 'react';
import { ScorePickerProps } from '../../molecules/ScorePicker/ScorePicker';
import { SelectionControlProps } from '../../molecules/SelectionControl';
import { SingleDatePickerProps } from '../DatePicker';
import { TimePickerProps } from '../../molecules/TimePicker/TimePicker';

export interface BaseDataProps {
    component: EditableDataComponent;
    isDisabled?: boolean;
    isEditable?: boolean;
    isRequired?: boolean;
    isVisibleOnlyOnEdit?: boolean;
    label: ReactNode;
}

export interface CheckboxDataProps extends BaseDataProps {
    component: EditableDataComponent.CHECKBOX;
    textValue: string;
    value: SelectionControlProps['isChecked'];
}

export interface EditableCheckboxDataProps extends CheckboxDataProps {
    errorMessage?: SelectionControlProps['errorMessage'];
    name: SelectionControlProps['name'];
    placeholder?: SelectionControlProps['label'];
}

export interface DatePickerDataProps extends BaseDataProps {
    component: EditableDataComponent.DATEPICKER;
    value: SingleDatePickerProps['date'];
}

export interface EditableDatePickerDataProps extends DatePickerDataProps {
    name: string;
    placeholder?: SingleDatePickerProps['label'];
}

export interface DropdownDataProps extends BaseDataProps {
    component: EditableDataComponent.DROPDOWN;
    textValue?: string;
    value: DropdownProps['value'];
}

export interface EditableDropdownDataProps extends DropdownDataProps {
    name: DropdownProps['name'];
    options: DropdownProps['options'];
}

export interface DropdownSelectDataProps<T extends DropdownSelectOption> extends BaseDataProps {
    component: EditableDataComponent.DROPDOWNSELECT;
    value: DropdownSelectProps<T>['value'];
}

export interface EditableDropdownSelectDataProps<T extends DropdownSelectOption> extends DropdownSelectDataProps<T> {
    defaultValue?: string;
    footerText: DropdownSelectProps<T>['footerText'];
    iconType: DropdownSelectProps<T>['iconType'];
    name: DropdownSelectProps<T>['name'];
    nameId: string;
    noResultsMessage: DropdownSelectProps<T>['noResultsMessage'];
    optionLabel: string;
    options: DropdownSelectProps<T>['options'];
    type: string;
    valueId: string;
}

export interface DropdownMultiSelectDataProps<T extends DropdownMultiSelectOption> extends BaseDataProps {
    component: EditableDataComponent.DROPDOWNMULTISELECT;
    value: T[];
}

export interface EditableDropdownMultiSelectDataProps<T extends DropdownMultiSelectOption>
    extends DropdownMultiSelectDataProps<T> {
    allSelectedLabel: DropdownMultiSelectProps<T>['allSelectedLabel'];
    buttonCancelText?: DropdownMultiSelectProps<T>['buttonCancelText'];
    buttonConfirmText?: DropdownMultiSelectProps<T>['buttonConfirmText'];
    deselectAllLabel: DropdownMultiSelectProps<T>['deselectAllLabel'];
    maxHeight?: DropdownMultiSelectProps<T>['maxHeight'];
    minHeight?: DropdownMultiSelectProps<T>['minHeight'];
    name: DropdownMultiSelectProps<T>['name'];
    noOptionsText?: DropdownMultiSelectProps<T>['noOptionsText'];
    options: DropdownMultiSelectProps<T>['options'];
    selectAllLabel: DropdownMultiSelectProps<T>['selectAllLabel'];
}

export interface InputNumberDataProps extends BaseDataProps {
    component: EditableDataComponent.INPUTNUMBER;
    value: number;
}

export interface EditableInputNumberDataProps extends InputNumberDataProps {
    max?: InputProps['max'];
    min?: InputProps['min'];
    name: InputProps['name'];
    placeholder?: InputProps['label'];
}

export interface InputDataProps extends BaseDataProps {
    component: EditableDataComponent.INPUT;
    value: InputProps['value'];
}

export interface EditableInputDataProps extends InputDataProps {
    maxLength?: InputProps['maxLength'];
    name: InputProps['name'];
    placeholder?: InputProps['label'];
    type?: InputProps['type'];
}

export interface TimePickerDataProps extends BaseDataProps {
    component: EditableDataComponent.TIMEPICKER;
    value: TimePickerProps['value'];
}

export interface EditableTimePickerDataProps extends TimePickerDataProps {
    minuteStep?: TimePickerProps['minuteStep'];
    name: TimePickerProps['name'];
}

export interface ScorePickerDataProps extends BaseDataProps {
    component: EditableDataComponent.SCOREPICKER;
    value: ScorePickerProps['value'];
}

export interface EditableScorePickerDataProps extends ScorePickerDataProps {
    name: ScorePickerProps['name'];
    placeholder: ScorePickerProps['label'];
}

export interface TextareaDataProps extends BaseDataProps {
    component: EditableDataComponent.TEXTAREA;
    value: InputProps['value'];
}

export interface EditableTextareaDataProps extends TextareaDataProps {
    maxLength?: InputProps['maxLength'];
    name: InputProps['name'];
    placeholder?: InputProps['label'];
}

export interface InputCurrencyDataProps extends BaseDataProps {
    component: EditableDataComponent.INPUTCURRENCY;
    value: InputCurrencyProps['value'];
}

export interface EditableInputCurrencyDataProps extends InputCurrencyDataProps {
    adornmentPosition?: InputCurrencyProps['adornmentPosition'];
    locale: InputCurrencyProps['locale'];
    name: InputCurrencyProps['name'];
    placeholder?: InputCurrencyProps['label'];
}

export type EditableInformationDataType<T extends DropdownSelectOption, U extends DropdownMultiSelectOption> =
    | CheckboxDataProps
    | DatePickerDataProps
    | DropdownDataProps
    | DropdownMultiSelectDataProps<U>
    | DropdownSelectDataProps<T>
    | EditableCheckboxDataProps
    | EditableDatePickerDataProps
    | EditableDropdownDataProps
    | EditableDropdownMultiSelectDataProps<U>
    | EditableDropdownSelectDataProps<T>
    | EditableInputCurrencyDataProps
    | EditableInputDataProps
    | EditableInputNumberDataProps
    | EditableTimePickerDataProps
    | EditableScorePickerDataProps
    | EditableTextareaDataProps
    | InputCurrencyDataProps
    | InputDataProps
    | InputNumberDataProps
    | ScorePickerDataProps
    | TextareaDataProps
    | TimePickerDataProps;

export type EditableInformationData<T extends DropdownSelectOption, U extends DropdownMultiSelectOption> = Array<
    EditableInformationDataType<T, U>
>;

export type ValueTypes<T extends DropdownSelectOption, U extends DropdownMultiSelectOption> =
    | EditableCheckboxDataProps['value']
    | EditableDatePickerDataProps['value']
    | EditableDropdownDataProps['value']
    | EditableDropdownMultiSelectDataProps<U>['options']
    | EditableDropdownSelectDataProps<T>['value']
    | EditableInputCurrencyDataProps['value']
    | EditableInputDataProps['value']
    | EditableInputNumberDataProps['value']
    | EditableScorePickerDataProps['value']
    | EditableTextareaDataProps['value']
    | EditableTimePickerDataProps['value'];

export interface DatePickerFocuses {
    [key: string]: boolean;
}