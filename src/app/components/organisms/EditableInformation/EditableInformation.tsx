/* eslint-disable @typescript-eslint/no-unused-vars */
import { Data, DatePickerFocuses } from './types';
import { editableData, EditableDataProps } from './editableData/editableData';
import { getStatus, getValue, isEditableData } from './utils/informationDataFunctions';
import { InformationTable, InformationTableData, InformationTableProps } from '../InformationTable';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import CardStatus from '../../molecules/CardStatus/CardStatus';
import { ConfirmDialog } from '../EditablePanel';
import { DropdownSelectOption } from '../DropdownSelect/DropdownSelect';
import { EditablePanel } from '../EditablePanel/EditablePanel';
import { generateValuesArray } from './utils/generateValuesArray';
import { IconType } from '../../../types';
import { PanelHeaderProps } from '../../molecules/PanelHeader/PanelHeader';

export interface EditableInformationProps<T extends DropdownSelectOption>
    extends Omit<PanelHeaderProps, 'children' | 'options'> {
    amountOfColumns?: InformationTableProps['amountOfColumns'];
    cancelConfirmDialog?: ConfirmDialog;
    data: Data<T>;
    dateFormat?: string;
    errors?: ReactNode;
    iconCancel?: IconType;
    iconEdit?: IconType;
    iconSave?: IconType;
    iconType: IconType;
    isBeingSaved?: boolean;
    isDisabled?: boolean;
    isLoading: boolean;
    onCancel?: () => void;
    onChange?: (data: unknown) => void;
    onEdit?: () => void;
    onSave?: (data: unknown) => void;
    saveConfirmDialog?: ConfirmDialog;
    textCancel: string;
    textEdit: string;
    textSave: string;
}

export const EditableInformation = <T extends DropdownSelectOption>({
    amountOfColumns,
    data,
    dateFormat = 'dd. D MMM YYYY',
    cancelConfirmDialog,
    errors,
    iconCancel,
    iconEdit,
    iconSave,
    iconType,
    isDisabled = false,
    isLoading = false,
    onCancel,
    onChange,
    onEdit,
    onSave,
    saveConfirmDialog,
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
    const [originalValues, setOriginalValues] = useState<EditableDataProps<DropdownSelectOption>['values']>({});
    const [updatedValues, setUpdatedValues] = useState<EditableDataProps<DropdownSelectOption>['values']>({});

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

    const onDatePickerFocusChangeCallback = useCallback(
        (name, focused) => {
            setDatePickerFocuses({
                ...datePickerFocuses,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                [name]: focused,
            });
        },
        [datePickerFocuses]
    );

    const onDropdownSelectChangeCallback = useCallback(
        (option: T, name: string, propertyNameOfId: string): void => {
            const newValues = {
                ...updatedValues,
                [name]: option.label,
                [propertyNameOfId]: option.value,
            };

            setUpdatedValues(newValues);

            if (onChange) {
                onChange(newValues);
            }
        },
        [updatedValues]
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
                data.map((element) => ({
                    label: element.label,
                    value: getValue(element, dateFormat),
                }))
            );
        } else if (isBeingEdited && Object.keys(updatedValues).length > 0) {
            const newData = editableData({
                data,
                dateFormat,
                datePickerFocuses,
                isBeingEdited,
                onChange: onChangeCallback,
                onDatePickerFocusChange: onDatePickerFocusChangeCallback,
                onDropdownSelectChange: onDropdownSelectChangeCallback,
                values: updatedValues,
            }) as InformationTableData[];

            setInformationTableData(newData);
        }
    }, [
        data,
        dateFormat,
        datePickerFocuses,
        isBeingEdited,
        isEditable,
        isLoading,
        updatedValues,
        onChangeCallback,
        onDatePickerFocusChangeCallback,
    ]);

    return (
        <EditablePanel
            cancelConfirmDialog={cancelConfirmDialog}
            iconCancel={iconCancel}
            iconEdit={iconEdit}
            iconSave={iconSave}
            iconType={iconType}
            isDisabled={!isEditable}
            onCancel={onCancelCallback}
            onEdit={onEditCallback}
            onSave={onSaveCallback}
            saveConfirmDialog={saveConfirmDialog}
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
