import { CheckboxDataProps, Data, DataType, DropdownDataProps } from '../types';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import moment from 'moment';
import { ReactNode } from 'react';
import { Status } from '../../../../types';

export const getStatus = (hasError: boolean, isDisabled: boolean, isLoading?: boolean): Status => {
    if (hasError) {
        return Status.INVALID;
    }

    if (isDisabled || isLoading) {
        return Status.DISABLED;
    }

    return Status.DEFAULT;
};

export const getValue = <T extends DropdownSelectOption>(element: DataType<T>, dateFormat: string): ReactNode => {
    const { component, value } = element;

    const textValue =
        component === 'Dropdown' || component === 'Checkbox'
            ? (element as DropdownDataProps | CheckboxDataProps).textValue
            : undefined;

    // a numeric value is allowed to be 0
    if (Number.isNaN(value) && !value) {
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

export const generateDropdownSelectOptionLabel = (selectOptionText: string, option: string, type: string): string =>
    selectOptionText.replace(`{{option}}`, option).replace(`{{type}}`, type);

export const isEditableData = <T extends DropdownSelectOption>(data: Data<T>): boolean =>
    data.some(
        (dataInstance: DataType<T>) =>
            typeof dataInstance === 'object' &&
            dataInstance !== null &&
            'component' in dataInstance &&
            dataInstance.isEditable
    );
