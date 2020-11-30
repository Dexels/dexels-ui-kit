import { Data } from '../types';
import { DropdownMultiSelectOption } from '../../DropdownMultiSelect';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { EditableDataComponent } from '../../../../types';
import { EditableDataProps } from '../editableData/editableData';

export const generateValuesArray = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: Data<T, U>
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

            return {
                ...accumulator,
                [dataInstance.name]: dataInstance.value,
            };
        }

        return accumulator;
    }, {});
