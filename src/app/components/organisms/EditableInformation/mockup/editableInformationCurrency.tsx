import {
    EditableInformationData,
    EditableInformationDataType,
    EditableInputCurrencyDataProps,
    ValueTypes,
} from '../types';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { EditableDataComponent } from '../../../../types';
import React from 'react';

export const updateValuesOfCurrency = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>,
    values: { [key: string]: ValueTypes<T, U> }
): EditableInformationData<T, U> => {
    const newData = data.map((element: EditableInformationDataType<T, U>) => {
        if ('name' in element && element.name in values) {
            return {
                ...element,
                value: values[element.name],
            };
        }

        return element;
    });

    return newData as EditableInformationData<T, U>;
};

export const editableInformationCurrency = <
    T extends DropdownSelectOption,
    U extends DropdownMultiSelectOption
>(): EditableInformationData<T, U> => {
    const result: EditableInformationData<T, U> = [];

    const onBlurCallback = (event: React.FocusEvent<HTMLInputElement>): void => {
        // eslint-disable-next-line no-console
        console.log('onBlurCallback', event);
    };

    const onFocusCallback = (event: React.FocusEvent<HTMLInputElement>): void => {
        // eslint-disable-next-line no-console
        console.log('onFocusCallback', event);
    };

    const onKeyDownCallback = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        // eslint-disable-next-line no-console
        console.log('onKeyDownCallback', event);
    };

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Currency',
        max: 10,
        min: 0,
        name: 'EditableCurrency',
        onBlur: onBlurCallback,
        onFocus: onFocusCallback,
        onKeyDown: onKeyDownCallback,
        value: '0.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Currency2',
        name: 'EditableCurrency2',
        onBlur: onBlurCallback,
        onFocus: onFocusCallback,
        onKeyDown: onKeyDownCallback,
        value: '123.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Currency (comma)',
        name: 'EditableCurrencyComma',
        onBlur: onBlurCallback,
        onFocus: onFocusCallback,
        onKeyDown: onKeyDownCallback,
        value: '451,123.87',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'NegativeCurrency',
        name: 'NegativeCurrency',
        onBlur: onBlurCallback,
        onFocus: onFocusCallback,
        onKeyDown: onKeyDownCallback,
        value: '-108',
    } as EditableInputCurrencyDataProps);

    return result;
};

export default editableInformationCurrency;
