import { Data } from '../types';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { EditableDataProps } from '../editableData/editableData';

export const generateValuesArray = <T extends DropdownSelectOption>(
    data: Data<T>
): EditableDataProps<DropdownSelectOption>['values'] =>
    data.reduce((accumulator, dataInstance) => {
        if ('name' in dataInstance) {
            // for dropdown Select we need to keep 2 values: text value and Id.
            if ('nameId' in dataInstance) {
                return {
                    ...accumulator,
                    [dataInstance.name]: dataInstance.value,
                    [dataInstance.nameId]: dataInstance.valueId,
                };
            }

            return {
                ...accumulator,
                [dataInstance.name]: dataInstance.value,
            };
        }

        return accumulator;
    }, {});
