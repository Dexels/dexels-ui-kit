import { convertToLocaleValue } from '../../../../utils/functions/financialFunctions';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { EditableDataComponent } from '../../../../types';
import { EditableDataProps } from '../editableData/editableData';
import { EditableInformationData } from '../types';
import { isDotDecimalCountry } from '../../../../utils/functions/localeFunctions';

export const generateValuesArray = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>
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
                // Check if we can just format the value, or we might need to manipulate it a bit
                const localeValue = !isDotDecimalCountry(dataInstance.locale)
                    ? convertToLocaleValue(dataInstance.value || '', dataInstance.locale)
                    : dataInstance.value || '';

                return {
                    ...accumulator,
                    [dataInstance.name]: localeValue,
                };
            }

            return {
                ...accumulator,
                [dataInstance.name]: dataInstance.value,
            };
        }

        return accumulator;
    }, {});
