import {
    CheckboxDataProps,
    DropdownDataProps,
    EditableDatePickerDataProps,
    EditableDropdownDataProps,
    EditableDropdownMultiSelectDataProps,
    EditableDropdownSelectDataProps,
    EditableInformationData,
    EditableInformationDataType,
    EditableInputCurrencyDataProps,
    EditableInputDataProps,
    EditableInputNumberDataProps,
    InputDataProps,
    ValueTypes,
} from '../types';
import { EditableDataComponent, InputType, Locale, Status } from '../../../../types';
import { InputColor, InputColorProps } from '../../InputColor/InputColor';
import {
    isEmpty,
    isValidInputEmail,
    isValidInputNumber,
    isValidInputTelephone,
    isValidInputText,
    isValidInputURI,
    isValidURI,
} from '../../../../utils/functions/validateFunctions';
import React, { ReactNode } from 'react';
import { convertToLocaleValue } from '../../../../utils/functions/financialFunctions';
import { convertToValidURIValue } from '../../../../utils/functions/linkFunctions';
import { DEFAULT_LOCALE } from '../../../../../global/constants';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { getSelectedText } from '../../../../utils/functions/arrayObjectFunctions';
import Link from '../../../atoms/Link/Link';
import moment from 'moment';

export const getStatus = (hasError: boolean, isLoading?: boolean, isDisabled?: boolean): Status => {
    if (hasError) {
        return Status.INVALID;
    }

    if (isLoading || isDisabled) {
        return Status.DISABLED;
    }

    return Status.DEFAULT;
};

export const getValueOfEditableDataComponent = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    element: EditableInformationDataType<T, U>,
    dateFormat: string,
    locale = DEFAULT_LOCALE,
    localeCurrency?: Locale
): ReactNode => {
    const { component, value } = element;

    const textValue =
        component === EditableDataComponent.DROPDOWN || component === EditableDataComponent.CHECKBOX
            ? (element as DropdownDataProps | CheckboxDataProps).textValue
            : undefined;

    if (component === EditableDataComponent.IMMUTABLE) {
        return value;
    }

    // a numeric value is allowed to be 0
    if (Number.isNaN(value) && !value) {
        return '-';
    }

    if (
        component === EditableDataComponent.INPUT &&
        (element as InputDataProps).type &&
        (element as InputDataProps).type === InputType.URI &&
        isValidURI(value as string)
    ) {
        return <Link href={convertToValidURIValue(value as string)}>{value}</Link>;
    }

    if (component === EditableDataComponent.DROPDOWNMULTISELECT && Array.isArray(value)) {
        return getSelectedText(value as U[], 'label');
    }

    if (component === EditableDataComponent.DATEPICKER && moment.isMoment(value)) {
        return value.format(dateFormat);
    }

    if (component === EditableDataComponent.INPUTCOLOR && typeof value === 'string') {
        return <InputColor isDisabled name={(element as InputColorProps).name} value={value} />;
    }

    if (component === EditableDataComponent.INPUTCURRENCY && value) {
        return convertToLocaleValue((value as string) || '', localeCurrency || locale);
    }

    if (component === EditableDataComponent.SCOREPICKER && Array.isArray(value)) {
        return `${value[0] as string} - ${value[1] as string}`;
    }

    if (component === EditableDataComponent.TIMEPICKER && Array.isArray(value)) {
        return value[0] && value[1] ? `${value[0] as string}:${value[1] as string}` : '-';
    }

    return textValue || value;
};

export const generateDropdownSelectOptionLabel = (selectOptionText: string, option: string, type: string): string =>
    selectOptionText.replace(`{{option}}`, option).replace(`{{type}}`, type);

export const isEditableData = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>
): boolean =>
    data.some(
        (dataInstance: EditableInformationDataType<T, U>) =>
            typeof dataInstance === 'object' &&
            dataInstance !== null &&
            'component' in dataInstance &&
            dataInstance.isEditable
    );

export const isValidEditableInput = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>,
    values: { [key: string]: ValueTypes<T, U> },
    locale: Locale
): boolean =>
    data.every((item): boolean => {
        if (item.component === EditableDataComponent.INPUTCURRENCY) {
            const tempMoneyValueName = `${(item as EditableInputCurrencyDataProps).name}_currency_temp_value`;

            if (tempMoneyValueName in values) {
                return isValidInputNumber(
                    values[tempMoneyValueName]?.toString() || null,
                    locale,
                    item.isRequired || false,
                    (item as EditableInputCurrencyDataProps).min,
                    (item as EditableInputCurrencyDataProps).max
                );
            }
        }

        switch (item.component) {
            /* eslint-disable padding-line-between-statements */
            case EditableDataComponent.DROPDOWN:
            case EditableDataComponent.DROPDOWNSELECT:
            case EditableDataComponent.DROPDOWNMULTISELECT:
            case EditableDataComponent.DATEPICKER:
                return (
                    !item.isRequired ||
                    !isEmpty(
                        values[
                            (
                                item as
                                    | EditableDropdownDataProps
                                    | EditableDropdownSelectDataProps<T>
                                    | EditableDropdownMultiSelectDataProps<U>
                                    | EditableDatePickerDataProps
                            ).name
                        ] || null
                    )
                );

            case EditableDataComponent.INPUT:
                if ((item as EditableInputDataProps).type === InputType.EMAIL) {
                    return isValidInputEmail(
                        values[(item as EditableInputDataProps).name]?.toString() || null,
                        item.isRequired || false
                    );
                }

                if ((item as EditableInputDataProps).type === InputType.TELEPHONE) {
                    return isValidInputTelephone(
                        values[(item as EditableInputDataProps).name]?.toString() || null,
                        item.isRequired || false
                    );
                }

                if ((item as EditableInputDataProps).type === InputType.URI) {
                    return isValidInputURI(
                        values[(item as EditableInputDataProps).name]?.toString() || null,
                        item.isRequired || false
                    );
                }

                return isValidInputText(
                    values[(item as EditableInputDataProps).name]?.toString() || null,
                    item.isRequired || false,
                    (item as EditableInputDataProps).minLength,
                    (item as EditableInputDataProps).maxLength
                );

            /* eslint-disable padding-line-between-statements */
            case EditableDataComponent.INPUTNUMBER:
            case EditableDataComponent.INPUTCURRENCY:
                return isValidInputNumber(
                    values[(item as EditableInputNumberDataProps).name]?.toString() || null,
                    locale,
                    item.isRequired || false,
                    (item as EditableInputNumberDataProps).min,
                    (item as EditableInputNumberDataProps).max
                );

            default:
                return true;
        }
    });
