import { DropdownOption, DropdownProps } from '../../molecules/Dropdown';
import { DropdownSelectProps } from '../DropdownSelect/DropdownSelect';
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

export interface DropdownSelectDataProps<T extends DropdownOption> extends BaseDataProps {
    component: 'DropdownSelect';
    value: DropdownSelectProps<T>['value'];
}

export interface EditableDropdownSelectDataProps<T extends DropdownOption> extends DropdownSelectDataProps<T> {
    defaultValue?: string;
    footerText: ReactNode;
    iconType: DropdownSelectProps<T>['iconType'];
    name: DropdownSelectProps<T>['name'];
    nameId: string;
    noResultsMessage: DropdownSelectProps<T>['noResultsMessage'];
    options: DropdownSelectProps<T>['options'];
    type: string;
    valueId: string;
}

export interface InputDataProps extends BaseDataProps {
    component: 'Input';
    value: InputProps['value'];
}

export interface EditableInputDataProps extends InputDataProps {
    maxLength?: InputProps['maxLength'];
    min?: InputProps['min'];
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

export type DataType<T extends DropdownOption> =
    | CheckboxDataProps
    | DatePickerDataProps
    | DropdownDataProps
    | DropdownSelectDataProps<T>
    | EditableCheckboxDataProps
    | EditableDatePickerDataProps
    | EditableDropdownDataProps
    | EditableDropdownSelectDataProps<T>
    | EditableInputDataProps
    | EditableTimePickerDataProps
    | EditableScorePickerDataProps
    | EditableTextareaDataProps
    | InputDataProps
    | ScorePickerDataProps
    | TextareaDataProps
    | TimePickerDataProps;

export type Data<T extends DropdownOption> = Array<DataType<T>>;

export type ComponentTypes<T extends DropdownOption> =
    | CheckboxDataProps['component']
    | DatePickerDataProps['component']
    | DropdownDataProps['component']
    | DropdownSelectDataProps<T>['component']
    | InputDataProps['component']
    | ScorePickerDataProps['component']
    | TextareaDataProps['component']
    | TimePickerDataProps['component'];

export type ValueTypes<T extends DropdownOption> =
    | EditableCheckboxDataProps['value']
    | EditableDatePickerDataProps['value']
    | EditableDropdownDataProps['value']
    | EditableDropdownSelectDataProps<T>['value']
    | EditableInputDataProps['value']
    | EditableScorePickerDataProps['value']
    | EditableTextareaDataProps['value']
    | EditableTimePickerDataProps['value'];

export interface DatePickerFocuses {
    [key: string]: boolean;
}
