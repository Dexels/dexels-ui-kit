/* eslint-disable @typescript-eslint/no-unused-vars */
import { boolean, select, text } from '@storybook/addon-knobs';
import { editableInformationCurrency, updateValuesOfCurrency } from './mockup/editableInformationCurrency';
import { editableInformationData, updateValuesOfData } from './mockup/editableInformationData';
import { EditableInformationData, ValueTypes } from './types';
import { IconType, Locale, Status } from '../../../types';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { DropdownMultiSelectOption } from '../DropdownMultiSelect';
import { DropdownSelectOption } from '../DropdownSelect/DropdownSelect';
import EditableInformation from './EditableInformation';

export default { title: 'organisms/EditableInformation' };

const theData = (isCurrencyOnly = false): EditableInformationData<DropdownSelectOption, DropdownMultiSelectOption> =>
    isCurrencyOnly ? editableInformationCurrency() : editableInformationData();

const BaseComponent = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>,
    isEditingMode = false,
    withDialogs = false,
    isEditable = true,
    errors = (undefined as unknown) as string[],
    warnings = (undefined as unknown) as string[],
    isCurrencyOnly = false
): JSX.Element => {
    const [updatedData, setUpdatedData] = useState<EditableInformationData<T, U>>(data);
    const [isSaving, setIsSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(isEditingMode);
    const [saveErrors, setSaveErrors] = useState<Array<string>>((undefined as unknown) as string[]);
    const [saveWarnings, setSaveWarnings] = useState<Array<string>>((undefined as unknown) as string[]);

    useEffect(() => {
        setIsEditing(saveErrors && saveErrors.length !== 0);
    }, [saveErrors]);

    const onSaveCallback = (newData: { [key: string]: ValueTypes<T, U> }, isDataChanged?: boolean): void => {
        // eslint-disable-next-line no-console
        console.log('onSaveCallback -> isDataChanged : ', isDataChanged);
        setIsSaving(true);
        setIsEditing(isEditingMode);

        setUpdatedData(
            isCurrencyOnly ? updateValuesOfCurrency(updatedData, newData) : updateValuesOfData(updatedData, newData)
        );

        // Show loading state for 5 seconds
        setTimeout(() => {
            if (errors && errors.length) {
                setSaveErrors(errors);
            }

            if (warnings && warnings.length) {
                setSaveWarnings(warnings);
            }

            setIsSaving(false);
        }, 5000);
    };

    const onCancelCallback = () => {
        setSaveErrors((undefined as unknown) as string[]);
    };

    const onChangeCallback = (newData: unknown) => {
        // eslint-disable-next-line no-console
        console.log('onChangeCallback', newData);
    };

    const onValidationCallback = (isValidData: boolean) => {
        // eslint-disable-next-line no-console
        console.log('onValidationCallback', isValidData);
    };

    return (
        <EditableInformation
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            cancelConfirmDialog={
                withDialogs
                    ? {
                          buttonCancelText: 'No',
                          buttonConfirmText: 'Yes',
                          iconType: IconType.HANGER,
                          status: Status.INVALID,
                          text: 'Are you sure you want to cancel? you will loose all the changes you have made',
                      }
                    : undefined
            }
            data={updatedData}
            errors={saveErrors}
            iconType={select('Icon Type', IconType, IconType.CALENDAR)}
            isButtonDisabled={boolean('Is button disabled', false)}
            isDisabled={boolean('Is disabled', false)}
            isEditing={isEditing}
            isLoading={boolean('Is loading', false)}
            isSaving={isSaving}
            locale={select('Locale', Locale, DEFAULT_LOCALE)} // Doesn't change dateFormat
            onCancel={onCancelCallback}
            onChange={onChangeCallback}
            onEdit={isEditable ? action('onEdit') : undefined}
            onSave={isEditable ? onSaveCallback : undefined}
            onValidation={isEditable ? onValidationCallback : undefined}
            saveConfirmDialog={
                withDialogs
                    ? {
                          buttonCancelText: 'No',
                          buttonConfirmText: 'Yes',
                          iconType: IconType.HANGER,
                          status: Status.DEFAULT,
                          text: 'Are you sure you want to save?',
                      }
                    : undefined
            }
            status={select('Status', Status, undefined)} // In storybook it looks like the first element is selected, but that's not true
            textCancel={text('Text Cancel', 'Cancel')}
            textEdit={text('Text Edit', 'Edit')}
            textSave={text('Text Save', 'Save')}
            title={text('Title', 'Information')}
            warnings={saveWarnings}
        />
    );
};

export const Configurable: FunctionComponent = () => BaseComponent(theData());

export const ConfigurableEditingDefault: FunctionComponent = () => BaseComponent(theData(), true);

export const ConfigurableWithConfirmationDialogs: FunctionComponent = () => BaseComponent(theData(), false, true);

export const ConfigurableInformationNotEditable: FunctionComponent = () =>
    BaseComponent(
        theData().map((element) => ({
            ...element,
            isEditable: false,
        })),
        false,
        false,
        false
    );

export const ConfigurableWithErrorsAfterSaving: FunctionComponent = () =>
    BaseComponent(theData(), false, false, true, ['Error number 1', 'Error number 2']);

export const ConfigurableWithWarningsAfterSaving: FunctionComponent = () =>
    BaseComponent(theData(), false, false, true, undefined, ['Warning number 1', 'Warning number 2']);

export const ConfigurableCurrencyOnly: FunctionComponent = () =>
    BaseComponent(theData(true), false, false, true, undefined, undefined, true);
