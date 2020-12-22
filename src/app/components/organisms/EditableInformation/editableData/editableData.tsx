import { Dropdown, DropdownProps, DropdownVariant } from '../../../molecules/Dropdown';
import { DropdownMultiSelect, DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import DropdownSelect, { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { EditableDataComponent, InputType, InputVariant } from '../../../../types';
import { EditableInformationData, ScorePickerDataProps, ValueTypes } from '../types';
import { generateDropdownSelectOptionLabel, getValueOfEditableDataComponent } from '../utils/informationDataFunctions';
import { SingleDatePicker, SingleDatePickerVariant } from '../../DatePicker';
import TimePicker, { TimePickerProps } from '../../../molecules/TimePicker/TimePicker';
import { InformationTableProps } from '../../InformationTable';
import Input from '../../../molecules/Input/Input';
import InputCurrency from '../../InputCurrency/InputCurrency';
import { parseInputValue } from '../../../../utils/functions/parseInputValue';
import React from 'react';
import ScorePicker from '../../../molecules/ScorePicker/ScorePicker';
import { SelectionControl } from '../../../molecules/SelectionControl';

export interface EditableDataProps<T extends DropdownSelectOption, U extends DropdownMultiSelectOption> {
    data: EditableInformationData<T, U>;
    dateFormat: string;
    datePickerFocuses: {
        [key: string]: boolean;
    };
    isBeingEdited: boolean;
    onChange: (name: string, value: ValueTypes<T, U>) => void;
    onDatePickerFocusChange: (name: string, focused: boolean) => void;
    onDropdownSelectChange: (option: T, name: string, propertyNameOfId: string) => void;
    values: {
        [key: string]: ValueTypes<T, U>;
    };
}

export const editableData = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>({
    data,
    dateFormat,
    datePickerFocuses,
    isBeingEdited,
    onDatePickerFocusChange,
    onDropdownSelectChange,
    onChange,
    values,
}: EditableDataProps<T, U>): InformationTableProps['data'] =>
    data
        .filter((dataInstance) => isBeingEdited || !dataInstance.isVisibleOnlyOnEdit)
        .map((dataInstance) => {
            const { isDisabled, isEditable, isRequired, label } = dataInstance;

            if (!isBeingEdited || !('name' in dataInstance) || ('name' in dataInstance && !isEditable)) {
                return {
                    isDisabled,
                    label,
                    value: getValueOfEditableDataComponent(dataInstance, dateFormat),
                };
            }

            const { name } = dataInstance;

            if (dataInstance.component === EditableDataComponent.CHECKBOX) {
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

            if (dataInstance.component === EditableDataComponent.DATEPICKER) {
                return {
                    label,
                    value: (
                        <SingleDatePicker
                            date={values[name] as moment.Moment | null}
                            id={name}
                            isDisabled={isDisabled}
                            isFocused={datePickerFocuses[name]}
                            isOutsideRange={dataInstance.isOutsideRange}
                            label={dataInstance.placeholder}
                            onDateChange={(date): void => {
                                onChange(name, date);
                            }}
                            onFocusChange={({ focused }): void => {
                                onDatePickerFocusChange(name, Boolean(focused));
                            }}
                            placeholder={dataInstance.placeholder}
                            variant={SingleDatePickerVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.DROPDOWN) {
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

            if (dataInstance.component === EditableDataComponent.DROPDOWNMULTISELECT) {
                return {
                    label,
                    value: (
                        <DropdownMultiSelect
                            allSelectedLabel={dataInstance.allSelectedLabel}
                            buttonCancelText={dataInstance.buttonCancelText}
                            buttonConfirmText={dataInstance.buttonConfirmText}
                            deselectAllLabel={dataInstance.deselectAllLabel}
                            isDisabled={isDisabled}
                            maxHeight={dataInstance.maxHeight}
                            minHeight={dataInstance.minHeight}
                            name={name}
                            onConfirm={(_, options) => onChange(name, options)}
                            options={dataInstance.options}
                            selectAllLabel={dataInstance.selectAllLabel}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.DROPDOWNSELECT) {
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

            if (dataInstance.component === EditableDataComponent.INPUT) {
                return {
                    label,
                    value: (
                        <Input
                            hasError={isRequired && Boolean(name) && !values[name]}
                            isDisabled={isDisabled}
                            label={dataInstance.placeholder}
                            maxLength={dataInstance.maxLength}
                            name={name}
                            onBlur={(event): void => {
                                if (dataInstance.onBlur) {
                                    dataInstance.onBlur(event);
                                }
                            }}
                            onChange={({ currentTarget }): void => {
                                onChange(currentTarget.name, currentTarget.value);
                            }}
                            onFocus={(event): void => {
                                if (dataInstance.onFocus) {
                                    dataInstance.onFocus(event);
                                }
                            }}
                            type={dataInstance.type}
                            value={values[name] as string | undefined}
                            variant={InputVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.INPUTCURRENCY) {
                return {
                    label,
                    value: (
                        <InputCurrency
                            allowEmpty={!isRequired}
                            isDisabled={isDisabled}
                            locale={dataInstance.locale}
                            name={name}
                            onChange={({ currentTarget }): void => {
                                onChange(currentTarget.name, currentTarget.value);
                            }}
                            value={values[name] as string | undefined}
                            variant={InputVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.INPUTNUMBER) {
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

            if (dataInstance.component === EditableDataComponent.SCOREPICKER) {
                return {
                    label,
                    value: (
                        <ScorePicker
                            isDisabled={isDisabled}
                            label={dataInstance.placeholder}
                            name={name}
                            onChange={onChange}
                            value={values[name] as ScorePickerDataProps['value']}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.TEXTAREA) {
                return {
                    label,
                    value: (
                        <Input
                            hasError={isRequired && Boolean(name) && !values[name]}
                            isDisabled={isDisabled}
                            isTextarea
                            label={dataInstance.placeholder}
                            maxLength={dataInstance.maxLength || 1024}
                            name={name}
                            onChange={({ currentTarget }): void => {
                                onChange(currentTarget.name, currentTarget.value);
                            }}
                            value={values[name] as string | undefined}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.TIMEPICKER) {
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
