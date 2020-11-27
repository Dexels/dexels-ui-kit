import { Data, ValueTypes } from '../types';
import { Dropdown, DropdownProps, DropdownVariant } from '../../../molecules/Dropdown';
import DropdownSelect, { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { generateDropdownSelectOptionLabel, getValue } from '../utils/informationDataFunctions';
import { InputType, InputVariant } from '../../../../types';
import { SingleDatePicker, SingleDatePickerVariant } from '../../DatePicker';
import TimePicker, { TimePickerProps } from '../../../molecules/TimePicker/TimePicker';
import { InformationTableProps } from '../../InformationTable';
import Input from '../../../molecules/Input/Input';
import { parseInputValue } from '../../../../utils/functions/parseInputValue';
import React from 'react';
import { SelectionControl } from '../../../molecules/SelectionControl';

export interface EditableDataProps<T extends DropdownSelectOption> {
    data: Data<T>;
    dateFormat: string;
    datePickerFocuses: {
        [key: string]: boolean;
    };
    isBeingEdited: boolean;
    onChange: (name: string, value: ValueTypes<T>) => void;
    onDatePickerFocusChange: (name: string, focused: boolean) => void;
    onDropdownSelectChange: (option: T, name: string, propertyNameOfId: string) => void;
    values: {
        [key: string]: ValueTypes<T>;
    };
}

export const editableData = <T extends DropdownSelectOption>({
    data,
    dateFormat,
    datePickerFocuses,
    isBeingEdited,
    onDatePickerFocusChange,
    onDropdownSelectChange,
    onChange,
    values,
}: EditableDataProps<T>): InformationTableProps['data'] =>
    data
        .filter((dataInstance) => isBeingEdited || !dataInstance.isVisibleOnlyOnEdit)
        .map((dataInstance) => {
            const { isDisabled, isEditable, isRequired, label } = dataInstance;

            if (!isBeingEdited || !('name' in dataInstance) || ('name' in dataInstance && !isEditable)) {
                return {
                    isDisabled,
                    label,
                    value: getValue(dataInstance, dateFormat),
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
                            label={dataInstance.placeholder}
                            name={name}
                            onChange={(): void => {
                                onChange(name, !values[name]);
                            }}
                            value={name}
                        />
                    ),
                };
            }

            if (dataInstance.component === 'DatePicker') {
                return {
                    label,
                    value: (
                        <SingleDatePicker
                            date={values[name] as moment.Moment | null}
                            id={name}
                            isDisabled={isDisabled}
                            isFocused={datePickerFocuses[name]}
                            label={dataInstance.placeholder}
                            onDateChange={(date): void => {
                                onChange(name, date);
                            }}
                            onFocusChange={({ focused }): void => {
                                onDatePickerFocusChange(name, Boolean(focused));
                            }}
                            variant={SingleDatePickerVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === 'TimePicker') {
                return {
                    label,
                    value: (
                        <TimePicker
                            isDisabled={isDisabled}
                            name={name}
                            onChange={onChange}
                            value={values[name] as TimePickerProps['value']}
                        />
                    ),
                };
            }

            if (dataInstance.component === 'Dropdown') {
                return {
                    label,
                    textValue: dataInstance.textValue,
                    value: (
                        <Dropdown
                            hasError={isRequired && Boolean(name) && !values[name]}
                            isDisabled={isDisabled}
                            name={name}
                            onChange={({ currentTarget }): void => {
                                onChange(currentTarget.name, currentTarget.value);
                            }}
                            options={dataInstance.options}
                            value={values[name] as DropdownProps['value']}
                            variant={DropdownVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === 'DropdownSelect') {
                return {
                    label,
                    textValue: dataInstance.value,
                    value: (
                        <DropdownSelect
                            defaultValue={dataInstance.defaultValue}
                            footerText={dataInstance.footerText}
                            hasError={isRequired && Boolean(name) && !values[name]}
                            iconType={dataInstance.iconType}
                            isDisabled={isDisabled}
                            name={dataInstance.name}
                            noResultsMessage={dataInstance.noResultsMessage}
                            onChange={(option: T) => onDropdownSelectChange(option, name, dataInstance.nameId)}
                            optionLabel={generateDropdownSelectOptionLabel(
                                dataInstance.optionLabel,
                                values[name] as string,
                                dataInstance.type
                            )}
                            options={dataInstance.options}
                            value={values[name] as string}
                            variant={InputVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === 'InputNumber') {
                return {
                    label,
                    value: (
                        <Input
                            hasError={isRequired && Boolean(name) && values[name] === undefined}
                            isDisabled={isDisabled}
                            label={dataInstance.placeholder}
                            max={dataInstance.max}
                            min={dataInstance.min}
                            name={name}
                            onChange={({ currentTarget }): void => {
                                onChange(currentTarget.name, parseInputValue(currentTarget));
                            }}
                            type={InputType.NUMBER}
                            value={values[name]?.toString()}
                            variant={InputVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === 'Input') {
                return {
                    label,
                    value: (
                        <Input
                            hasError={isRequired && Boolean(name) && !values[name]}
                            isDisabled={isDisabled}
                            label={dataInstance.placeholder}
                            maxLength={dataInstance.maxLength}
                            name={name}
                            onChange={({ currentTarget }): void => {
                                onChange(currentTarget.name, currentTarget.value);
                            }}
                            type={dataInstance.type}
                            value={values[name] as string | undefined}
                            variant={InputVariant.COMPACT}
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
