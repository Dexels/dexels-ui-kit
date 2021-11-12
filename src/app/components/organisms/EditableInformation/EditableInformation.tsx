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
    amountOfRows?: InformationTableProps['amountOfRows'];
    cancelConfirmDialog?: ConfirmDialog;
    data: EditableInformationData<T, U>;
    dateFormat?: string;
    errors?: string[];
    hasAutoFocus?: boolean;
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
    localeCurrency?: Locale;
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
    amountOfRows = 4,
    data,
    dateFormat = 'dd. D MMM YYYY',
    cancelConfirmDialog,
    errors,
    hasAutoFocus = true,
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
    localeCurrency, // If absent, use locale
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
    const [datePickerFocuses, setDatePickerFocuses] = useState<DatePickerFocuses>({});
    const [isValidInputData, setIsValidInputData] = useState(true);
    const hasError = errors !== undefined;
    const [informationTableData, setInformationTableData] = useState<InformationTableData[]>([]);
    const [isBeingEdited, setIsBeingEdited] = useState(isEditing);
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [localeValue, setLocaleValue] = useState<Locale>(locale);
    const [localeCurrencyValue, setLocaleCurrencyValue] = useState<Locale>(localeCurrency || locale);
    const [originalValues, setOriginalValues] = useState<EditableDataProps<T, U>['values']>({});
    const [updatedValues, setUpdatedValues] = useState<EditableDataProps<T, U>['values']>({});

    useEffect(() => {
        setIsBeingEdited(isEditing);
    }, [isEditing]);

    useEffect(() => {
        setLocaleValue(locale);
    }, [locale]);

    useEffect(() => {
        setLocaleCurrencyValue(localeCurrency || locale);
    }, [localeCurrency, locale]);

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
            // Note: if in the onChange prop we cause a re-render of this component with an updated originalValues then areEqualObjects will always return false.
            // In that case it will be needed to either call areEqualObjects outside with the real originalValues or keep the value of isDataChanged in the onChange in a local state
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
        (name: string, value: ValueTypes<T, U>, callExternOnChange = true, isCurrency = false) => {
            let newValues = {
                ...updatedValues,
            };

            // if it is a temporary value of currency add temp property in values for validation purposes
            if (isCurrency && !callExternOnChange) {
                newValues = {
                    ...newValues,
                    [`${name}_currency_temp_value`]: value,
                };
            }

            if (isCurrency && callExternOnChange) {
                // definitive value of currency, delete the temp one for correct validation
                delete newValues[`${name}_currency_temp_value`];
            }

            if (!isCurrency || callExternOnChange) {
                newValues = {
                    ...newValues,
                    [name]: value,
                };
            }

            setUpdatedValues(newValues);

            if (callExternOnChange && onChange) {
                onChange(newValues, !areEqualObjects(newValues, originalValues));
            }
        },
        [localeValue, onChange, originalValues, updatedValues]
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

    // When updated values are changed due to validation
    useEffect(() => {
        if (!isEmpty(data) && !isEmpty(updatedValues)) {
            setIsValidInputData(isValidEditableInput(data, updatedValues, localeValue));
        }
    }, [data, localeValue, updatedValues]);

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

            const values = generateValuesArray(data);

            // initialize 2 arrays of Values
            setOriginalValues(values);
            setUpdatedValues(values);
        }
    }, [data, isEditable]);

    useEffect(() => {
        if (isLoading || isEmpty(data)) {
            setInformationTableData(
                Array(amountOfColumns * amountOfRows).fill({
                    label: <Skeleton width="60%" />,
                    value: <Skeleton width="90%" />,
                })
            );
        } else if (!isEditable || isDisabled) {
            setInformationTableData(
                data.map((element) => ({
                    label: element.label,
                    value: getValueOfEditableDataComponent(element, dateFormat, !isEditable || isDisabled, localeValue),
                }))
            );
        } else if (!isEmpty(updatedValues)) {
            const newData = editableData({
                data,
                dateFormat,
                datePickerFocuses,
                hasAutoFocus,
                hasError,
                isBeingEdited,
                locale: localeValue,
                localeCurrency: localeCurrencyValue,
                onChange: onChangeCallback,
                onDatePickerFocusChange: onDatePickerFocusChangeCallback,
                onDropdownChange: onDropdownChangeCallback,
                values: updatedValues,
            }) as InformationTableData[];

            setInformationTableData(newData);
        }
    }, [
        amountOfColumns,
        amountOfRows,
        data,
        dateFormat,
        datePickerFocuses,
        hasAutoFocus,
        hasError,
        isBeingEdited,
        isDisabled,
        isEditable,
        isLoading,
        localeValue,
        localeCurrencyValue,
        updatedValues,
        onChangeCallback,
        onDatePickerFocusChangeCallback,
        onDropdownChangeCallback,
    ]);

    const cardData = (
        <InformationTable
            amountOfColumns={amountOfColumns}
            amountOfRows={amountOfRows}
            data={informationTableData}
            errors={errors}
            isDisabled={isDisabled}
            warnings={warnings}
        />
    );

    return onEdit || onSave ? (
        <EditablePanel
            cancelConfirmDialog={cancelConfirmDialog}
            hasButtons={onSave !== undefined}
            hasError={hasError || !isValidInputData}
            iconCancel={iconCancel}
            iconEdit={iconEdit}
            iconSave={iconSave}
            iconType={iconType}
            isButtonDisabled={isButtonDisabled}
            isDisabled={isDisabled || isLoading}
            isEditing={isBeingEdited}
            isLoading={isLoading}
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
            isLoading={isLoading}
            status={status || getStatus(hasError || (isBeingEdited && !isValidInputData), isLoading, isDisabled)}
            title={title}
        >
            {cardData}
        </PanelStatus>
    );
};

export default EditableInformation;
