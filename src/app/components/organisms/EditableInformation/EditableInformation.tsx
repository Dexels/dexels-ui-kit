import { DatePickerFocuses, EditableInformationData, ValueTypes } from './types';
import { editableData, EditableDataProps } from './editableData/editableData';
import {
    getStatus,
    getValueOfEditableDataComponent,
    isEditableData,
    isValidEditableInput,
} from './utils/informationDataFunctions';
import { IconType, Locale, Status } from '../../../types';
import { InformationTable, InformationTableData, InformationTableProps } from '../InformationTable';
import React, { useCallback, useEffect, useState } from 'react';
import { areEqualObjects } from '../../../utils/functions/objectFunctions';
import CardStatus from '../../molecules/CardStatus/CardStatus';
import { ConfirmDialog } from '../EditablePanel';
import { convertToLocaleValue } from '../../../utils/functions/financialFunctions';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { DropdownMultiSelectOption } from '../DropdownMultiSelect';
import { DropdownOption } from '../../molecules/Dropdown';
import { EditablePanel } from '../EditablePanel/EditablePanel';
import { generateValuesArray } from './utils/generateValuesArray';
import { isEmpty } from '../../../utils/functions/validateFunctions';
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
    locale?: Locale;
    onCancel?: () => void;
    onChange?: (data: unknown, isDataChanged: boolean) => void;
    onEdit?: () => void;
    onSave?: (data: { [key: string]: ValueTypes<T, U> }, isDataChanged: boolean) => void;
    onValidation?: (isValidData: boolean) => void;
    saveConfirmDialog?: ConfirmDialog;
    status?: Status;
    textCancel?: string;
    textEdit?: string;
    textSave?: string;
    warnings?: string[];
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
    locale = DEFAULT_LOCALE,
    onCancel,
    onChange,
    onEdit,
    onSave,
    onValidation,
    saveConfirmDialog,
    status,
    textCancel,
    textEdit,
    textSave,
    title,
    warnings,
}: EditableInformationProps<T, U>): JSX.Element => {
    const DEFAULT_AMOUNT_ROWS = 4;
    const [datePickerFocuses, setDatePickerFocuses] = useState<DatePickerFocuses>({});
    const [isValidInputData, setIsValidInputData] = useState(true);
    const hasError = errors !== undefined;
    const [informationTableData, setInformationTableData] = useState<InformationTableData[]>([]);
    const [isBeingEdited, setIsBeingEdited] = useState(isEditing);
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [localeValue, setLocaleValue] = useState(locale);
    const [originalValues, setOriginalValues] = useState<EditableDataProps<T, U>['values']>({});
    const [updatedValues, setUpdatedValues] = useState<EditableDataProps<T, U>['values']>({});

    useEffect(() => {
        setIsBeingEdited(isEditing);
    }, [isEditing]);

    useEffect(() => {
        setLocaleValue(locale);
    }, [locale]);

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
            onSave(updatedValues, !areEqualObjects(originalValues, updatedValues));
        }
    }, [keepEditMode, onSave, originalValues, updatedValues]);

    const onCancelCallback = useCallback(() => {
        setIsBeingEdited(false);
        setUpdatedValues(originalValues);

        if (onCancel) {
            onCancel();
        }
    }, [originalValues, onCancel]);

    const onChangeCallback = useCallback(
        (name: string, value: ValueTypes<T, U>, isCurrency = false) => {
            let newValues = {
                ...updatedValues,
                [name]: value,
            };

            setUpdatedValues(newValues);

            newValues = {
                ...updatedValues,
                [name]: isCurrency && value ? convertToLocaleValue(value as string, localeValue) : value,
            };

            if (onChange) {
                onChange(newValues, !areEqualObjects(newValues, originalValues));
            }
        },
        [onChange, originalValues, updatedValues]
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
                onChange(newValues, !areEqualObjects(newValues, originalValues));
            }
        },
        [onChange, originalValues, updatedValues]
    );

    useEffect(() => {
        setIsEditable(isEditableData(data));
    }, [data]);

    // When updated values are changed do validation
    useEffect(() => {
        if (!isEmpty(data) && !isEmpty(updatedValues)) {
            setIsValidInputData(isValidEditableInput(data, updatedValues, localeValue));
        }
    }, [data, updatedValues]);

    // When validation of the input data is changed call onValidation to perform action needed outside the component
    useEffect(() => {
        if (onValidation) {
            onValidation(isValidInputData);
        }
    }, [isValidInputData]);

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

            const values = generateValuesArray(data, localeValue);

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
                    value: getValueOfEditableDataComponent(element, dateFormat, localeValue),
                }))
            );
        } else if (!isEmpty(updatedValues)) {
            const newData = editableData({
                data,
                dateFormat,
                datePickerFocuses,
                hasError,
                isBeingEdited,
                locale: localeValue,
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
        hasError,
        isBeingEdited,
        isEditable,
        isLoading,
        localeValue,
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
            warnings={warnings}
        />
    );

    return onEdit || onSave ? (
        <EditablePanel
            cancelConfirmDialog={cancelConfirmDialog}
            hasError={hasError || !isValidInputData}
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
            status={status || getStatus(hasError || (isBeingEdited && !isValidInputData))}
            textCancel={textCancel || ''}
            textEdit={textEdit || ''}
            textSave={textSave || ''}
            title={title}
        >
            <CardStatus
                status={status || getStatus(hasError || (isBeingEdited && !isValidInputData), isLoading, isDisabled)}
            >
                {cardData}
            </CardStatus>
        </EditablePanel>
    ) : (
        <PanelStatus
            hasTitleStatusAppearance={Boolean(status)}
            iconType={iconType}
            status={status || getStatus(hasError || (isBeingEdited && !isValidInputData), isLoading, isDisabled)}
            title={title}
        >
            {cardData}
        </PanelStatus>
    );
};

export default EditableInformation;
