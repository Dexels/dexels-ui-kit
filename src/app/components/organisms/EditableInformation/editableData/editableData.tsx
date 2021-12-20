import { Dropdown, DropdownOption, DropdownProps, DropdownVariant } from '../../../molecules/Dropdown';
import { DropdownMultiSelect, DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { EditableDataComponent, InputType, InputVariant, Locale } from '../../../../types';
import { EditableInformationData, ScorePickerDataProps, ValueTypes } from '../types';
import { generateDropdownSelectOptionLabel, getValueOfEditableDataComponent } from '../utils/informationDataFunctions';
import { SingleDatePicker, SingleDatePickerVariant } from '../../DatePicker';
import TimePicker, { TimePickerProps } from '../../../molecules/TimePicker/TimePicker';
import { DEFAULT_LOCALE } from '../../../../../global/constants';
import DropdownSelect from '../../DropdownSelect/DropdownSelect';
import { InformationTableProps } from '../../InformationTable';
import Input from '../../../molecules/Input/Input';
import { InputColor } from '../../InputColor/InputColor';
import InputCurrency from '../../InputCurrency/InputCurrency';
import { isEmpty } from '../../../../utils/functions/validateFunctions';
import React from 'react';
import ScorePicker from '../../../molecules/ScorePicker/ScorePicker';
import { SelectionControl } from '../../../molecules/SelectionControl';

export interface EditableDataProps<T extends DropdownOption, U extends DropdownMultiSelectOption> {
    data: EditableInformationData<T, U>;
    dateFormat: string;
    datePickerFocuses: {
        [key: string]: boolean;
    };
    hasAutoFocus?: boolean;
    hasError?: boolean;
    isBeingEdited: boolean;
    locale?: Locale;
    localeCurrency?: Locale;
    onChange: (name: string, value: ValueTypes<T, U>, callExternOnChange?: boolean, isCurrency?: boolean) => void;
    onDatePickerFocusChange: (name: string, focused: boolean) => void;
    onDropdownChange: (option: T, name: string, propertyNameOfId?: string) => void;
    values: {
        [key: string]: ValueTypes<T, U>;
    };
}

export const editableData = <T extends DropdownOption, U extends DropdownMultiSelectOption>({
    data,
    dateFormat,
    datePickerFocuses,
    hasAutoFocus = true,
    hasError = false,
    isBeingEdited,
    locale = DEFAULT_LOCALE,
    localeCurrency,
    onDatePickerFocusChange,
    onDropdownChange,
    onChange,
    values,
}: EditableDataProps<T, U>): InformationTableProps['data'] => {
    let isFocusedInputSet = false;

    return data
        .filter((dataInstance) => isBeingEdited || !dataInstance.isVisibleOnlyOnEdit)
        .map((dataInstance) => {
            const { isDisabled, isEditable, isRequired, label } = dataInstance;

            const labelValue = isRequired ? (
                <>
                    {label}
                    {/* EV 2021-12-20: by request of Marrick, the required indicator is not visible in non edit mode */}
                    {/* I have the feeling this might change, hence this comment and the commented code */}
                    {/* <RequiredIndicator isDisabled={isDisabled} /> */}
                </>
            ) : (
                label
            );

            let autoFocus = false;

            if (hasAutoFocus && !isFocusedInputSet && isEditable) {
                autoFocus = true;
                isFocusedInputSet = true;
            }

            if (
                dataInstance.component === EditableDataComponent.IMMUTABLE ||
                !isBeingEdited ||
                !('name' in dataInstance) ||
                ('name' in dataInstance && !isEditable)
            ) {
                return {
                    isDisabled,
                    isRequired: isRequired || false,
                    isTextArea: dataInstance.component === EditableDataComponent.TEXTAREA,
                    label,
                    value: getValueOfEditableDataComponent(
                        dataInstance,
                        dateFormat,
                        isDisabled,
                        locale,
                        localeCurrency
                    ),
                };
            }

            const { name } = dataInstance;
            const hasInputError = isRequired && isEmpty(values[name]);

            if (dataInstance.component === EditableDataComponent.CHECKBOX) {
                return {
                    label: labelValue,
                    value: (
                        <SelectionControl
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
                            hasVerticalCorrection
                            isChecked={values[name] as boolean}
                            isDisabled={isDisabled}
                            isRequired={isRequired || false}
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
                    label: labelValue,
                    value: (
                        <SingleDatePicker
                            date={values[name] as moment.Moment | null}
                            displayFormat={dataInstance.dateFormat || dateFormat}
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
                            id={name}
                            isDisabled={isDisabled}
                            isFocused={datePickerFocuses[name]}
                            isOutsideRange={dataInstance.isOutsideRange}
                            onDateChange={(date): void => {
                                onChange(name, date);
                            }}
                            onFocusChange={({ focused }): void => {
                                onDatePickerFocusChange(name, Boolean(focused));
                            }}
                            parentContainer={dataInstance.parentContainer}
                            placeholder={dataInstance.placeholder}
                            variant={SingleDatePickerVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.DROPDOWN) {
                return {
                    label: labelValue,
                    textValue: dataInstance.textValue,
                    value: (
                        <Dropdown
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
                            isDisabled={isDisabled}
                            isRequired={isRequired || false}
                            name={name}
                            onChange={({ currentTarget }): void => {
                                onDropdownChange(
                                    {
                                        label: currentTarget.selectedOptions[0].textContent,
                                        value: currentTarget.value,
                                    } as T,
                                    dataInstance.nameTextValue || '',
                                    name
                                );
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
                    label: labelValue,
                    value: (
                        <DropdownMultiSelect
                            allSelectedLabel={dataInstance.allSelectedLabel}
                            buttonCancelText={dataInstance.buttonCancelText}
                            buttonConfirmText={dataInstance.buttonConfirmText}
                            deselectAllLabel={dataInstance.deselectAllLabel}
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
                            isDisabled={isDisabled}
                            isRequired={isRequired || false}
                            maxHeight={dataInstance.maxHeight}
                            minHeight={dataInstance.minHeight}
                            name={name}
                            noOptionsText={dataInstance.noOptionsText}
                            onConfirm={(_, options) => onChange(name, options)}
                            options={dataInstance.options}
                            placeholder={dataInstance.placeholder}
                            selectAllLabel={dataInstance.selectAllLabel}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.DROPDOWNSELECT) {
                return {
                    label: labelValue,
                    textValue: dataInstance.value,
                    value: (
                        <DropdownSelect
                            autoFocus={autoFocus}
                            defaultValue={dataInstance.defaultValue}
                            errorMessage={dataInstance.errorMessage}
                            footerText={dataInstance.footerText}
                            hasError={hasInputError || dataInstance.hasError}
                            iconType={dataInstance.iconType}
                            isDisabled={isDisabled}
                            isRequired={isRequired || false}
                            name={dataInstance.name}
                            noResultsMessage={dataInstance.noResultsMessage}
                            onChange={(option: T) => onDropdownChange(option, name, dataInstance.nameId)}
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
                    label: labelValue,
                    value: (
                        <Input
                            autoFocus={autoFocus && (!hasError || !dataInstance.onBlur)}
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
                            isDisabled={isDisabled}
                            isRequired={isRequired || false}
                            label={dataInstance.placeholder}
                            locale={locale}
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
                            onKeyDown={(event): void => {
                                if (dataInstance.onKeyDown) {
                                    dataInstance.onKeyDown(event);
                                }
                            }}
                            type={dataInstance.type}
                            value={values[name] as string | undefined}
                            variant={InputVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.INPUTCOLOR) {
                return {
                    label: labelValue,
                    value: (
                        <InputColor
                            isDisabled={isDisabled}
                            name={name}
                            onChange={({ currentTarget }): void => {
                                onChange(currentTarget.name, currentTarget.value);
                            }}
                            value={(values[name] as string) || ''}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.INPUTCURRENCY) {
                return {
                    label: labelValue,
                    value: (
                        <InputCurrency
                            autoFocus={autoFocus && (!hasError || !dataInstance.onBlur)}
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
                            isDisabled={isDisabled}
                            isRequired={isRequired}
                            locale={localeCurrency || locale}
                            max={dataInstance.max}
                            min={dataInstance.min}
                            name={name}
                            onBlur={(event): void => {
                                onChange(event.currentTarget.name, event.currentTarget.value, true, true);

                                if (dataInstance.onBlur) {
                                    dataInstance.onBlur(event);
                                }
                            }}
                            onChange={({ currentTarget }): void => {
                                onChange(currentTarget.name, currentTarget.value, false, true);
                            }}
                            onFocus={(event): void => {
                                if (dataInstance.onFocus) {
                                    dataInstance.onFocus(event);
                                }
                            }}
                            onKeyDown={(event): void => {
                                if (dataInstance.onKeyDown) {
                                    dataInstance.onKeyDown(event);
                                }
                            }}
                            value={(values[name] as string) || ''}
                            variant={InputVariant.COMPACT}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.INPUTNUMBER) {
                return {
                    label: labelValue,
                    value: (
                        <Input
                            autoFocus={autoFocus && (!hasError || !dataInstance.onBlur)}
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
                            isDisabled={isDisabled}
                            isRequired={isRequired}
                            label={dataInstance.placeholder}
                            locale={locale}
                            max={dataInstance.max}
                            min={dataInstance.min}
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
                            onKeyDown={(event): void => {
                                if (dataInstance.onKeyDown) {
                                    dataInstance.onKeyDown(event);
                                }
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
                    label: labelValue,
                    value: (
                        <ScorePicker
                            autoFocus={autoFocus}
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
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
                    label: labelValue,
                    value: (
                        <Input
                            autoFocus={autoFocus && (!hasError || !dataInstance.onBlur)}
                            errorMessage={dataInstance.errorMessage}
                            hasError={hasInputError || dataInstance.hasError}
                            ignoreOutlineVariant
                            isDisabled={isDisabled}
                            isRequired={isRequired}
                            isTextarea
                            label={dataInstance.placeholder}
                            locale={locale}
                            maxLength={dataInstance.maxLength || 1024}
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
                            onKeyDown={(event): void => {
                                if (dataInstance.onKeyDown) {
                                    dataInstance.onKeyDown(event);
                                }
                            }}
                            value={values[name] as string | undefined}
                        />
                    ),
                };
            }

            if (dataInstance.component === EditableDataComponent.TIMEPICKER) {
                return {
                    label: labelValue,
                    value: (
                        <TimePicker
                            autoFocus={autoFocus}
                            errorMessage={dataInstance.errorMessage}
                            hasError={dataInstance.hasError}
                            isDisabled={isDisabled}
                            name={name}
                            onChange={onChange}
                            value={values[name] as TimePickerProps['value']}
                        />
                    ),
                };
            }

            return {
                label: labelValue,
                value: (
                    <Input
                        autoFocus={autoFocus}
                        hasError={hasInputError}
                        isDisabled={isDisabled}
                        isRequired={isRequired}
                        locale={locale}
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
};
