import { DatePickerFocuses, EditableInformationData, ValueTypes } from './types';
import { editableData, EditableDataProps } from './editableData/editableData';
import { getStatus, getValueOfEditableDataComponent, isEditableData } from './utils/informationDataFunctions';
import { InformationTable, InformationTableData, InformationTableProps } from '../InformationTable';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import CardStatus from '../../molecules/CardStatus/CardStatus';
import { ConfirmDialog } from '../EditablePanel';
import { DropdownMultiSelectOption } from '../DropdownMultiSelect';
import { DropdownSelectOption } from '../DropdownSelect/DropdownSelect';
import { EditablePanel } from '../EditablePanel/EditablePanel';
import { generateValuesArray } from './utils/generateValuesArray';
import { IconType } from '../../../types';
import { PanelHeaderProps } from '../../molecules/PanelHeader/PanelHeader';

export interface EditableInformationActionsProps<T extends DropdownSelectOption, U extends DropdownMultiSelectOption> {
    iconCancel?: IconType;
    iconEdit?: IconType;
    iconSave?: IconType;
    onCancel: () => void;
    onEdit: () => void;
    onSave: (data: { [key: string]: ValueTypes<T, U> }) => void;
    textCancel: string;
    textEdit: string;
    textSave: string;
}

export interface EditableInformationProps<T extends DropdownSelectOption, U extends DropdownMultiSelectOption>
    extends Omit<PanelHeaderProps, 'children' | 'options'> {
    actions?: EditableInformationActionsProps<T, U>;
    amountOfColumns?: InformationTableProps['amountOfColumns'];
    cancelConfirmDialog?: ConfirmDialog;
    data: EditableInformationData<T, U>;
    dateFormat?: string;
    errors?: ReactNode;
    iconType: IconType;
    isButtonDisabled?: boolean;
    isDisabled?: boolean;
    isEditing?: boolean;
    isLoading: boolean;
    onChange?: (data: unknown) => void;
    saveConfirmDialog?: ConfirmDialog;
}

export const EditableInformation = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>({
    actions,
    amountOfColumns,
    data,
    dateFormat = 'dd. D MMM YYYY',
    cancelConfirmDialog,
    errors,
    iconType,
    isButtonDisabled = false,
    isDisabled = false,
    isEditing = false,
    isLoading = false,
    onChange,
    saveConfirmDialog,
    title,
}: EditableInformationProps<T, U>): JSX.Element => {
    const [datePickerFocuses, setDatePickerFocuses] = useState<DatePickerFocuses>({});

    const hasError = errors !== undefined;
    const [informationTableData, setInformationTableData] = useState<InformationTableData[]>([]);
    const [isBeingEdited, setIsBeingEdited] = useState(isEditing);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const [originalValues, setOriginalValues] = useState<EditableDataProps<T, U>['values']>({});

    const [updatedValues, setUpdatedValues] = useState<EditableDataProps<T, U>['values']>({});

    const { iconCancel, iconEdit, iconSave, onCancel, onEdit, onSave, textCancel, textEdit, textSave } = actions || {
        iconCancel: undefined,
        iconEdit: undefined,
        iconSave: undefined,
        onCancel: undefined,
        onEdit: undefined,
        onSave: undefined,
        textCancel: '',
        textEdit: '',
        textSave: '',
    };

    const onEditCallback = useCallback(() => {
        setIsBeingEdited(true);

        if (onEdit) {
            onEdit();
        }
    }, [onEdit]);

    const onSaveCallback = useCallback(() => {
        setIsBeingEdited(false);

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
        if (isLoading || !isEditable) {
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

    const cardData = (
        <InformationTable amountOfColumns={amountOfColumns} data={informationTableData} isDisabled={isDisabled} />
    );

    return actions ? (
        <EditablePanel
            cancelConfirmDialog={cancelConfirmDialog}
            iconCancel={iconCancel}
            iconEdit={iconEdit}
            iconSave={iconSave}
            iconType={iconType}
            isDisabled={isButtonDisabled || isDisabled || isLoading}
            isEditing={isBeingEdited}
            onCancel={onCancelCallback}
            onEdit={onEditCallback}
            onSave={onSaveCallback}
            saveConfirmDialog={saveConfirmDialog}
            status={getStatus(hasError)}
            textCancel={textCancel}
            textEdit={textEdit}
            textSave={textSave}
            title={title}
        >
            <CardStatus status={getStatus(hasError, isLoading)}>{cardData}</CardStatus>
            {errors}
        </EditablePanel>
    ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
    );
};

export default EditableInformation;
