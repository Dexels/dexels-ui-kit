import { DropdownSelectOption, DropdownSelectProps } from '../DropdownSelect/DropdownSelect';
import { DropdownProps } from '../../molecules/Dropdown';
import { InputProps } from '../../molecules/Input/Input';
import { ReactNode } from 'react';
import { ScorePickerProps } from '../../molecules/ScorePicker/ScorePicker';
import { SelectionControlProps } from '../../molecules/SelectionControl';
import { SingleDatePickerProps } from '../DatePicker';
import { TimePickerProps } from '../../molecules/TimePicker/TimePicker';

export interface BaseDataProps {
    isDisabled?: boolean;
    isEditable?: boolean;
    isRequired?: boolean;
    isVisibleOnlyOnEdit?: boolean;
    label: ReactNode;
}

export interface CheckboxDataProps extends BaseDataProps {
    component: 'Checkbox';
    textValue: string;
    value: SelectionControlProps['isChecked'];
}

export interface EditableCheckboxDataProps extends CheckboxDataProps {
    errorMessage?: SelectionControlProps['errorMessage'];
    name: SelectionControlProps['name'];
    placeholder?: SelectionControlProps['label'];
}

export interface DatePickerDataProps extends BaseDataProps {
    component: 'DatePicker';
    value: SingleDatePickerProps['date'];
}

export interface EditableDatePickerDataProps extends DatePickerDataProps {
    name: string;
    placeholder?: SingleDatePickerProps['label'];
}

export interface DropdownDataProps extends BaseDataProps {
    component: 'Dropdown';
    textValue?: string;
    value: DropdownProps['value'];
}

export interface EditableDropdownDataProps extends DropdownDataProps {
    name: DropdownProps['name'];
    options: DropdownProps['options'];
}

export interface DropdownSelectDataProps<T extends DropdownSelectOption> extends BaseDataProps {
    component: 'DropdownSelect';
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

export interface InputNumberDataProps extends BaseDataProps {
    component: 'InputNumber';
    value: number;
}

export interface EditableInputNumberDataProps extends InputNumberDataProps {
    max?: InputProps['max'];
    min?: InputProps['min'];
    name: InputProps['name'];
    placeholder?: InputProps['label'];
}

export interface InputDataProps extends BaseDataProps {
    component: 'Input';
    value: InputProps['value'];
}

export interface EditableInputDataProps extends InputDataProps {
    maxLength?: InputProps['maxLength'];
    name: InputProps['name'];
    placeholder?: InputProps['label'];
    type?: InputProps['type'];
}

export interface TimePickerDataProps extends BaseDataProps {
    component: 'TimePicker';
    value: TimePickerProps['value'];
}

export interface EditableTimePickerDataProps extends TimePickerDataProps {
    minuteStep?: TimePickerProps['minuteStep'];
    name: TimePickerProps['name'];
}

export interface ScorePickerDataProps extends BaseDataProps {
    component: 'ScorePicker';
    value: ScorePickerProps['value'];
}

export interface EditableScorePickerDataProps extends ScorePickerDataProps {
    name: ScorePickerProps['name'];
}

export interface TextareaDataProps extends BaseDataProps {
    component: 'Textarea';
    value: InputProps['value'];
}

export interface EditableTextareaDataProps extends TextareaDataProps {
    maxLength?: InputProps['maxLength'];
    name: InputProps['name'];
    placeholder?: InputProps['label'];
}

export type DataType<T extends DropdownSelectOption> =
    | CheckboxDataProps
    | DatePickerDataProps
    | DropdownDataProps
    | DropdownSelectDataProps<T>
    | EditableCheckboxDataProps
    | EditableDatePickerDataProps
    | EditableDropdownDataProps
    | EditableDropdownSelectDataProps<T>
    | EditableInputDataProps
    | EditableInputNumberDataProps
    | EditableTimePickerDataProps
    | EditableScorePickerDataProps
    | EditableTextareaDataProps
    | InputDataProps
    | InputNumberDataProps
    | ScorePickerDataProps
    | TextareaDataProps
    | TimePickerDataProps;

export type Data<T extends DropdownSelectOption> = Array<DataType<T>>;

export type ComponentTypes<T extends DropdownSelectOption> =
    | CheckboxDataProps['component']
    | DatePickerDataProps['component']
    | DropdownDataProps['component']
    | DropdownSelectDataProps<T>['component']
    | InputDataProps['component']
    | InputNumberDataProps['component']
    | ScorePickerDataProps['component']
    | TextareaDataProps['component']
    | TimePickerDataProps['component'];

export type ValueTypes<T extends DropdownSelectOption> =
    | EditableCheckboxDataProps['value']
    | EditableDatePickerDataProps['value']
    | EditableDropdownDataProps['value']
    | EditableDropdownSelectDataProps<T>['value']
    | EditableInputDataProps['value']
    | EditableInputNumberDataProps['value']
    | EditableScorePickerDataProps['value']
    | EditableTextareaDataProps['value']
    | EditableTimePickerDataProps['value'];

export interface DatePickerFocuses {
    [key: string]: boolean;
}
