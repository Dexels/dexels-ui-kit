import { ComponentTypes, Data, ValueTypes } from '../types';
import React, { ReactNode } from 'react';
import { DropdownOption } from '../../../molecules/Dropdown';
import { InformationTableProps } from '../../InformationTable';
import Input from '../../../molecules/Input/Input';
import { InputVariant } from '../../../../types';
import moment from 'moment';
import { SelectionControl } from '../../../molecules/SelectionControl';

export const getValue = <T extends DropdownOption>(
    component: ComponentTypes<T>,
    value: ValueTypes<T>,
    dateFormat: string,
    textValue?: string
): ReactNode => {
    if (!value) {
        return '-';
    }

    if (component === 'DatePicker' && moment.isMoment(value)) {
        return value.format(dateFormat);
    }

    if (component === 'ScorePicker' && Array.isArray(value)) {
        return `${value[0]} - ${value[1]}`;
    }

    if (component === 'TimePicker' && Array.isArray(value)) {
        return value[0] && value[1] ? `${value[0]}:${value[1]}` : '-';
    }

    return textValue || value;
};

export interface EditableDataProps<T extends DropdownOption> {
    data: Data<T>;
    dateFormat: string;
    datePickerFocuses: {
        [key: string]: boolean;
    };
    isBeingEdited: boolean;
    onChange: (name: string, value: ValueTypes<T>) => void;
    onDatePickerFocusChange?: (name: string, focused: boolean) => void;
    onDropdownSelectChange?: (option: DropdownOption, labelPropertyName: string, valuePropertyName: string) => void;
    values: {
        [key: string]: ValueTypes<T>;
    };
}

export const editableData = <T extends DropdownOption>({
    data,
    dateFormat,
    isBeingEdited,
    onChange,
    values,
}: EditableDataProps<T>): InformationTableProps['data'] =>
    data
        .filter((dataInstance) => isBeingEdited || !dataInstance.isVisibleOnlyOnEdit)
        .map((dataInstance) => {
            const { isDisabled, isEditable, isRequired, label, value } = dataInstance;

            const textValue =
                dataInstance.component === 'Dropdown' || dataInstance.component === 'Checkbox'
                    ? dataInstance.textValue
                    : undefined;

            if (!isBeingEdited || !('name' in dataInstance) || ('name' in dataInstance && !isEditable)) {
                return {
                    isDisabled,
                    label,
                    value: getValue(dataInstance.component, value, dateFormat, textValue),
                };
            }

            const { name } = dataInstance;

            if (dataInstance.component === 'Checkbox') {
                return {
                    label,
                    value: (
                        <SelectionControl
                            errorMessage={dataInstance.errorMessage}
                            hasError={isRequired && Boolean(name) && !values[name]}
                            hasVerticalCorrection
                            isChecked={values[name] as boolean}
                            isDisabled={isDisabled}
                            label={dataInstance.placeholder || label}
                            name={name}
                            onChange={(): void => {
                                onChange(name, !values[name]);
                            }}
                            value={name}
                        />
                    ),
                };
            }

            return {
                label,
                value: (
                    <Input
                        hasError={isRequired && Boolean(name) && !values[name]}
                        isDisabled={isDisabled}
                        name={name}
                        onChange={({ currentTarget }): void => {
                            onChange(currentTarget.name, currentTarget.value);
                        }}
                        value={values[name] as string | undefined}
                        variant={InputVariant.COMPACT}
                    />
                ),
            };
        });
