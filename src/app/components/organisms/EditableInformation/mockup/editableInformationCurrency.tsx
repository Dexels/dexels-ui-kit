import { EditableInformationData, EditableInputCurrencyDataProps } from '../types';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { EditableDataComponent } from '../../../../types';

export const editableInformationCurrency = <
    T extends DropdownSelectOption,
    U extends DropdownMultiSelectOption
>(): EditableInformationData<T, U> => {
    const result: EditableInformationData<T, U> = [];

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        errorMessage: 'Value should be between 1 and 10 euros only',
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
        errorMessage: 'Value should be between 0 and 10 euros only',
        isDisabled: false,
        isEditable: true,
        label: 'EditableCurrency',
        max: 10,
        min: 0,
        name: 'EditableCurrency',
        value: '0.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        errorMessage: 'This field is required',
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'EditableCurrency2',
        name: 'EditableCurrency2',
        value: '123.51',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        errorMessage: 'This field is required',
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'EditableCurrencyComma',
        name: 'EditableCurrencyComma',
        value: '451,123.87',
    } as EditableInputCurrencyDataProps);

    result.push({
        component: EditableDataComponent.INPUTCURRENCY,
        errorMessage: 'This field is required',
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
