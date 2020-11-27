import { Data } from '../types';
import { DropdownOption } from '../../../molecules/Dropdown';
import { EditableDataProps } from '../editableData/editableData';
import { InformationTableData } from '../../InformationTable';
import { Status } from '../../../../types';

export const isEditableData = <T extends InformationTableData>(data: Array<T>): boolean =>
    data.some(
        (dataInstance: unknown) =>
            typeof dataInstance === 'object' && dataInstance !== null && 'component' in dataInstance
    );

export const getStatus = (hasError: boolean, isDisabled: boolean, isLoading?: boolean): Status => {
    if (hasError) {
        return Status.INVALID;
    }

    if (isDisabled || isLoading) {
        return Status.DISABLED;
    }

    return Status.DEFAULT;
};

export const generateValuesArray = <T extends DropdownOption>(
    data: Data<T>
): EditableDataProps<DropdownOption>['values'] =>
    data.reduce((accumulator, dataInstance) => {
        if ('name' in dataInstance) {
            // DropdownSelect
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
