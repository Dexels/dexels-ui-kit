import {
    CheckboxDataProps,
    DropdownDataProps,
    EditableInformationData,
    EditableInformationDataType,
    EditableInputCurrencyDataProps,
    EditableInputDataProps,
    EditableInputNumberDataProps,
    ValueTypes,
} from '../types';
import { convertToLocaleValue, formatMoney } from '../../../../utils/functions/financialFunctions';
import { EditableDataComponent, Locale, Status } from '../../../../types';
import { isEmpty, isValidMoney, isValidNumber } from '../../../../utils/functions/validateFunctions';
import { DEFAULT_LOCALE } from '../../../../../global/constants';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { getSelectedText } from '../../../../utils/functions/arrayObjectFunctions';
import { isDotDecimalCountry } from '../../../../utils/functions/localeFunctions';
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
    locale = DEFAULT_LOCALE
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
        // Check if we can just format the value, or we might need to manipulate it a bit
        const localeValue = !isDotDecimalCountry(locale)
            ? convertToLocaleValue(value.toString(), locale)
            : value.toString();

        return formatMoney(localeValue, locale);
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

export const validateInput = (data: EditableInputDataProps): boolean => Boolean(data.isRequired) && isEmpty(data.value);

export const validateInputCurrency = (value: string, locale: Locale, isRequired: boolean): boolean => {
    console.log(value, locale, isRequired && isEmpty(value), value === '0');
    console.log(isValidMoney(value || '', locale));

    if (isRequired && (isEmpty(value) || value === '0')) {
        return false;
    }

    if (!isRequired && (isEmpty(value) || value === '0')) {
        return true;
    }

    // Can not be undefined/null, because of previous check ...
    return isValidMoney(value || '', locale);
};

export const validateInputNumber = (data: EditableInputNumberDataProps): boolean => {
    if (data.isRequired && (isEmpty(data.value) || data.value === 0)) {
        return false;
    }

    if (data.min && data.min > 0) {
        return data.value < data.min;
    }

    if (data.max && data.max > 0) {
        return data.value > data.max;
    }

    return isValidNumber(data.value.toString(), true, data.locale);
};

export const validateEditableInput = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>,
    values: { [key: string]: ValueTypes<T, U> }
): boolean => {
    if (data.length) {
        let i = 0;
        let isValid = true;

        // console.log('validateInput', isValid);
        // console.log('data', data);
        // console.log('values', values);

        // Check all items, but only if still valid
        while (isValid && i < data.length) {
            const item = data[i];
            console.log('item', item);

            // if (item.component === EditableDataComponent.INPUT && isValid) {
            //     isValid = validateInput(item as EditableInputDataProps);
            //     console.log('validateInput result 1a', isValid);
            // }

            if (item.component === EditableDataComponent.INPUTCURRENCY && isValid) {
                console.log('value', values[(item as EditableInputCurrencyDataProps).name]);

                isValid = validateInputCurrency(
                    values[(item as EditableInputCurrencyDataProps).name]?.toString() || '',
                    (item as EditableInputCurrencyDataProps).locale,
                    Boolean((item as EditableInputCurrencyDataProps).isRequired)
                );
            }

            // if (item.component === EditableDataComponent.INPUTNUMBER && isValid) {
            //     isValid = validateInputNumber(item as EditableInputNumberDataProps);
            //     console.log('validateInput result 1c', isValid);
            // }

            i += 1;
        }

        console.log('validateInput result 2', isValid);

        return isValid;
    }

    return true;
};
