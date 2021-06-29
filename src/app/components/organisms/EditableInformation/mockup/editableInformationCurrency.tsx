import {
    EditableInformationData,
    EditableInformationDataType,
    EditableInputCurrencyDataProps,
    ValueTypes,
} from '../types';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { EditableDataComponent } from '../../../../types';

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

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'EditableCurrencyRequiredDefaultZero',
        max: 10,
        min: 1,
        name: 'EditableCurrencyRequiredDefaultZero',
        value: '0',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'EditableCurrency',
        max: 10,
        min: 0,
        name: 'EditableCurrency',
        value: '0.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'EditableCurrency2',
        name: 'EditableCurrency2',
        value: '123.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'EditableCurrencyComma',
        name: 'EditableCurrencyComma',
        value: '451,123.87',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'NegativeCurrency',
        name: 'NegativeCurrency',
        value: '-108',
    } as EditableInputCurrencyDataProps);

    return result;
};

export default editableInformationCurrency;
