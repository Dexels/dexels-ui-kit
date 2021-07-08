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
    ValueTypes,
} from '../types';
import { EditableDataComponent, InputType, Locale, Status } from '../../../../types';
import { formatMoney, toCents, toMoneyValue } from '../../../../utils/functions/financialFunctions';
import {
    isEmpty,
    isValidInputCurrency,
    isValidInputEmail,
    isValidInputNumber,
    isValidInputTelephone,
    isValidInputText,
} from '../../../../utils/functions/validateFunctions';
import { DEFAULT_LOCALE } from '../../../../../global/constants';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { getSelectedText } from '../../../../utils/functions/arrayObjectFunctions';
import moment from 'moment';
import { ReactNode } from 'react';

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

    // a numeric value is allowed to be 0
    if (Number.isNaN(value) && !value) {
        return '-';
    }

    if (component === EditableDataComponent.DROPDOWNMULTISELECT && Array.isArray(value)) {
        return getSelectedText(value as U[], 'label');
    }

    if (component === EditableDataComponent.DATEPICKER && moment.isMoment(value)) {
        return value.format(dateFormat);
    }

    if (component === EditableDataComponent.INPUTCURRENCY && value) {
        // Let localeCurrency prevail over locale when presnt
        return formatMoney(
            toMoneyValue(toCents(value.toString()), localeCurrency || locale, true),
            localeCurrency || locale
        );
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

                return isValidInputText(
                    values[(item as EditableInputDataProps).name]?.toString() || null,
                    item.isRequired || false,
                    (item as EditableInputDataProps).minLength,
                    (item as EditableInputDataProps).maxLength
                );

            case EditableDataComponent.INPUTCURRENCY:
                return isValidInputCurrency(
                    values[(item as EditableInputCurrencyDataProps).name]?.toString() || '',
                    locale,
                    item.isRequired || false,
                    (item as EditableInputCurrencyDataProps).min,
                    (item as EditableInputCurrencyDataProps).max
                );

            case EditableDataComponent.INPUTNUMBER:
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
