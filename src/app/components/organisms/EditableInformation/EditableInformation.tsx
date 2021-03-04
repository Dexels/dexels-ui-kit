import { DatePickerFocuses, EditableInformationData, ValueTypes } from './types';
import { editableData, EditableDataProps } from './editableData/editableData';
import { getStatus, getValueOfEditableDataComponent, isEditableData } from './utils/informationDataFunctions';
import { IconType, Status } from '../../../types';
import { InformationTable, InformationTableData, InformationTableProps } from '../InformationTable';
import React, { useCallback, useEffect, useState } from 'react';
import CardStatus from '../../molecules/CardStatus/CardStatus';
import { ConfirmDialog } from '../EditablePanel';
import { DropdownMultiSelectOption } from '../DropdownMultiSelect';
import { DropdownOption } from '../../molecules/Dropdown';
import { EditablePanel } from '../EditablePanel/EditablePanel';
import { generateValuesArray } from './utils/generateValuesArray';
import { PanelHeaderProps } from '../../molecules/PanelHeader/PanelHeader';
import { PanelStatus } from '../../molecules/PanelStatus/PanelStatus';
import { Skeleton } from '../../molecules/Skeleton/Skeleton';

export interface EditableInformationProps<T extends DropdownOption, U extends DropdownMultiSelectOption>
    extends Omit<PanelHeaderProps, 'children' | 'options'> {
    amountOfColumns?: InformationTableProps['amountOfColumns'];
    cancelConfirmDialog?: ConfirmDialog;
    data: EditableInformationData<T, U>;
    dateFormat?: string;
    errors?: string[];
    iconCancel?: IconType;
    iconEdit?: IconType;
    iconSave?: IconType;
    iconType: IconType;
    isButtonDisabled?: boolean;
    isDisabled?: boolean;
    isEditing?: boolean;
    isLoading?: boolean;
    isSaving?: boolean;
    keepEditMode?: boolean;
    onCancel?: () => void;
    onChange?: (data: unknown) => void;
    onEdit?: () => void;
    onSave?: (data: { [key: string]: ValueTypes<T, U> }) => void;
    saveConfirmDialog?: ConfirmDialog;
    status?: Status;
    textCancel?: string;
    textEdit?: string;
    textSave?: string;
}

export const EditableInformation = <T extends DropdownOption, U extends DropdownMultiSelectOption>({
    amountOfColumns = 2,
    data,
    dateFormat = 'dd. D MMM YYYY',
    cancelConfirmDialog,
    errors,
    iconCancel,
    iconEdit,
    iconSave,
    iconType,
    isButtonDisabled = false,
    isDisabled = false,
    isEditing = false,
    isLoading = false,
    isSaving = false,
    keepEditMode = false,
    onCancel,
    onChange,
    onEdit,
    onSave,
    saveConfirmDialog,
    status,
    textCancel,
    textEdit,
    textSave,
    title,
}: EditableInformationProps<T, U>): JSX.Element => {
    const DEFAULT_AMOUNT_ROWS = 4;
    const [datePickerFocuses, setDatePickerFocuses] = useState<DatePickerFocuses>({});
    const hasError = errors !== undefined;
    const [informationTableData, setInformationTableData] = useState<InformationTableData[]>([]);
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [originalValues, setOriginalValues] = useState<EditableDataProps<T, U>['values']>({});
    const [updatedValues, setUpdatedValues] = useState<EditableDataProps<T, U>['values']>({});

    useEffect(() => {
        setIsBeingEdited(hasError || isEditing);
    }, [hasError, isEditing]);

    const onEditCallback = useCallback(() => {
        setIsBeingEdited(true);

        if (onEdit) {
            onEdit();
        }
    }, [onEdit]);

    const onSaveCallback = useCallback(() => {
        if (!keepEditMode) {
            setIsBeingEdited(false);
        }

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
        (name: string, value: ValueTypes<T, U>) => {
            const newValues = {
                ...updatedValues,
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
        (name: string, focused: boolean) => {
            setDatePickerFocuses({
                ...datePickerFocuses,
                [name]: focused,
            });
        },
        [datePickerFocuses]
    );

    const onDropdownChangeCallback = useCallback(
        (option: T, name: string, propertyNameOfId?: string): void => {
            let newValues = {
                ...updatedValues,
                [name]: option.label,
            };

            if (propertyNameOfId) {
                newValues = {
                    ...updatedValues,
                    [name]: option.label,
                    [propertyNameOfId]: option.value,
                };
            }

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
        if (isLoading || !data.length) {
            setInformationTableData(
                Array(amountOfColumns * DEFAULT_AMOUNT_ROWS).fill({
                    label: <Skeleton width="60%" />,
                    value: <Skeleton width="90%" />,
                })
            );
        } else if (!isEditable) {
            setInformationTableData(
                data.map((element) => ({
                    label: element.label,
                    value: getValueOfEditableDataComponent(element, dateFormat),
                }))
            );
        } else if (Object.keys(updatedValues).length > 0) {
            const newData = editableData({
                data,
                dateFormat,
                datePickerFocuses,
                isBeingEdited,
                onChange: onChangeCallback,
                onDatePickerFocusChange: onDatePickerFocusChangeCallback,
                onDropdownChange: onDropdownChangeCallback,
                values: updatedValues,
            }) as InformationTableData[];

            setInformationTableData(newData);
        }
    }, [
        amountOfColumns,
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

    const cardData = (
        <InformationTable
            amountOfColumns={amountOfColumns}
            data={informationTableData}
            errors={errors}
            isDisabled={isDisabled}
        />
    );

    return onEdit || onSave ? (
        <EditablePanel
            cancelConfirmDialog={cancelConfirmDialog}
            iconCancel={iconCancel}
            iconEdit={iconEdit}
            iconSave={iconSave}
            iconType={iconType}
            isDisabled={isButtonDisabled || isDisabled || isLoading}
            isEditing={isBeingEdited}
            isSaving={isSaving}
            keepEditMode={keepEditMode}
            onCancel={onCancelCallback}
            onEdit={onEditCallback}
            onSave={onSaveCallback}
            saveConfirmDialog={saveConfirmDialog}
            status={status || getStatus(hasError)}
            textCancel={textCancel || ''}
            textEdit={textEdit || ''}
            textSave={textSave || ''}
            title={title}
        >
            <CardStatus status={status || getStatus(hasError, isLoading, isDisabled)}>{cardData}</CardStatus>
        </EditablePanel>
    ) : (
        <PanelStatus
            hasTitleStatusAppearance={Boolean(status)}
            iconType={iconType}
            status={status || getStatus(hasError, isLoading, isDisabled)}
            title={title}
        >
            {cardData}
        </PanelStatus>
    );
};

export default EditableInformation;
