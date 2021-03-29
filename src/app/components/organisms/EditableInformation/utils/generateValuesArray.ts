import { toCents, toMoneyValue } from '../../../../utils/functions/financialFunctions';
import { DEFAULT_LOCALE } from '../../../../../global/constants';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { EditableDataComponent } from '../../../../types';
import { EditableDataProps } from '../editableData/editableData';
import { EditableInformationData } from '../types';

export const generateValuesArray = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>,
    locale = DEFAULT_LOCALE
): EditableDataProps<T, U>['values'] =>
    data.reduce((accumulator, dataInstance) => {
        if ('name' in dataInstance) {
            // for dropdown Select we need to keep 2 values: text value and Id.
            if (dataInstance.component === EditableDataComponent.DROPDOWNSELECT) {
                return {
                    ...accumulator,
                    [dataInstance.name]: dataInstance.value,
                    [dataInstance.nameId]: dataInstance.valueId,
                };
            }

            if (dataInstance.component === EditableDataComponent.DROPDOWNMULTISELECT) {
                return {
                    ...accumulator,
                    [dataInstance.name]: dataInstance.options,
                };
            }

            if (dataInstance.component === EditableDataComponent.INPUTCURRENCY) {
                return {
                    ...accumulator,
                    [dataInstance.name]: toMoneyValue(
                        toCents(dataInstance.value || ''),
                        locale || DEFAULT_LOCALE,
                        true
                    ).toString(),
                };
            }

            return {
                ...accumulator,
                [dataInstance.name]: dataInstance.value,
            };
        }

        return accumulator;
    }, {});
