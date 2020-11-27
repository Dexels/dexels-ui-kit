/* eslint-disable @typescript-eslint/no-unused-vars */
import { Data, DatePickerFocuses } from './types';
import { editableData, EditableDataProps } from './editableData/editableData';
import { generateValuesArray, getStatus, isEditableData } from './utils/editableInformationFunctions';
import { InformationTable, InformationTableData, InformationTableProps } from '../InformationTable';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import CardStatus from '../../molecules/CardStatus/CardStatus';
import { DropdownOption } from '../../molecules/Dropdown';
import { EditablePanel } from '../EditablePanel/EditablePanel';
import { IconType } from '../../../types';
import { PanelHeaderProps } from '../../molecules/PanelHeader/PanelHeader';

export interface EditableInformationProps<T extends DropdownOption>
    extends Omit<PanelHeaderProps, 'children' | 'options'> {
    amountOfColumns?: InformationTableProps['amountOfColumns'];
    data: Data<T>;
    dateFormat?: string;
    errors?: ReactNode;
    iconType: IconType;
    isBeingSaved?: boolean;
    isDisabled?: boolean;
    isLoading: boolean;
    onCancel?: () => void;
    onChange?: (data: unknown) => void;
    onEdit?: () => void;
    onSave?: (data: unknown) => void;
    textCancel: string;
    textEdit: string;
    textSave: string;
}

export const EditableInformation = <T extends DropdownOption>({
    amountOfColumns,
    data,
    dateFormat = 'dd. D MMM YYYY',
    errors,
    iconType,
    isDisabled = false,
    isLoading = false,
    onCancel,
    onChange,
    onEdit,
    onSave,
    textCancel,
    textEdit,
    textSave,
    title,
}: EditableInformationProps<T>): JSX.Element => {
    const [datePickerFocuses, setDatePickerFocuses] = useState<DatePickerFocuses>({});

    const hasError = errors !== undefined;
    const [informationTableData, setInformationTableData] = useState<InformationTableData[]>([]);
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [originalValues, setOriginalValues] = useState<EditableDataProps<DropdownOption>['values']>({});
    const [updatedValues, setUpdatedValues] = useState<EditableDataProps<DropdownOption>['values']>({});

    const onEditCallback = useCallback(() => {
        setIsBeingEdited(!isBeingEdited);

        if (onEdit) {
            onEdit();
        }
    }, [onEdit]);

    const onSaveCallback = useCallback(() => {
        if (onSave) {
            onSave(updatedValues);
        }
    }, [onSave, updatedValues]);

    const onCancelCallback = useCallback(() => {
        setIsBeingEdited(false);
        setUpdatedValues(originalValues);

        if (onCancel) {
            onCancel();
        }
    }, [originalValues, onCancel]);

    const onChangeCallback = useCallback(
        (name, value) => {
            // eslint-disable-next-line no-console
            console.log('[onChangeCallback]', name, value);

            const newValues = {
                ...updatedValues,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                [name]: value,
            };

            setUpdatedValues(newValues);

            if (onChange) {
                onChange(newValues);
            }
        },
        [onChange, updatedValues]
    );

    useEffect(() => {
        setIsEditable(isEditableData(data));
    }, [data]);

    useEffect(() => {
        if (isEditable) {
            setDatePickerFocuses(
                data.reduce((accumulator, dataInstance) => {
                    if (dataInstance.component === 'DatePicker' && 'name' in dataInstance) {
                        return {
                            ...accumulator,
                            [dataInstance.name]: false,
                        };
                    }

                    return accumulator;
                }, {})
            );

            const values = generateValuesArray(data);

            // initialize 2 arrays of Values
            setOriginalValues(values);
            setUpdatedValues(values);
        }
    }, [data, isEditable]);

    useEffect(() => {
        if (!isBeingEdited || isLoading || !isEditable) {
            setInformationTableData(
                data.map(({ label, value }) => ({
                    label,
                    value,
                }))
            );
        } else if (isBeingEdited && Object.keys(updatedValues).length > 0) {
            const newData = editableData({
                data,
                dateFormat,
                datePickerFocuses,
                isBeingEdited,
                onChange: onChangeCallback,
                values: updatedValues,
            }) as InformationTableData[];

            setInformationTableData(newData);
        }
    }, [data, isEditable, isBeingEdited, isLoading, updatedValues]);

    return (
        <EditablePanel
            iconType={iconType}
            onCancel={onCancelCallback}
            onEdit={onEditCallback}
            onSave={onSaveCallback}
            status={getStatus(hasError, isDisabled)}
            textCancel={textCancel}
            textEdit={textEdit}
            textSave={textSave}
            title={title}
        >
            <CardStatus status={getStatus(hasError, isDisabled, isLoading)}>
                <InformationTable amountOfColumns={amountOfColumns} data={informationTableData} />
            </CardStatus>
            {errors}
        </EditablePanel>
    );
};

export default EditableInformation;
