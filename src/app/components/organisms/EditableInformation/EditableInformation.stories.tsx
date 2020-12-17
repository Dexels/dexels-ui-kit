/* eslint-disable @typescript-eslint/no-unused-vars */
import { boolean, select, text } from '@storybook/addon-knobs';
import { editableInformationData, updateValuesOfData } from './mockup/editableInformationData';
import { EditableInformationData, ValueTypes } from './types';
import { IconType, Status } from '../../../types';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { DropdownMultiSelectOption } from '../DropdownMultiSelect';
import { DropdownSelectOption } from '../DropdownSelect/DropdownSelect';
import EditableInformation from './EditableInformation';

export default { title: 'organisms/EditableInformation' };

const theData = editableInformationData();

const BaseComponent = <T extends DropdownSelectOption, U extends DropdownMultiSelectOption>(
    data: EditableInformationData<T, U>,
    isEditingMode = false,
    withDialogs = false,
    isEditable = true,
    errors = (undefined as unknown) as string[]
): JSX.Element => {
    const [updatedData, setUpdatedData] = useState<EditableInformationData<T, U>>(data);
    const [isSaving, setIsSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(isEditingMode);
    const [saveErrors, setSaveErrors] = useState<Array<string>>((undefined as unknown) as string[]);

    useEffect(() => {
        setIsEditing(saveErrors && saveErrors.length !== 0);
    }, [saveErrors]);

    const onSaveCallback = (newData: { [key: string]: ValueTypes<T, U> }): void => {
        setIsSaving(true);
        setUpdatedData(updateValuesOfData(updatedData, newData));

        // Show loading state for 5 seconds
        setTimeout(() => {
            if (errors && errors.length) {
                setSaveErrors(errors);
            }

            setIsSaving(false);
        }, 5000);
    };

    const onCancelcallback = () => {
        setSaveErrors((undefined as unknown) as string[]);
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
            onCancel={onCancelcallback}
            onEdit={isEditable ? action('onEdit') : undefined}
            onSave={isEditable ? onSaveCallback : undefined}
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
            textCancel={text('Text Cancel', 'Cancel')}
            textEdit={text('Text Edit', 'Edit')}
            textSave={text('Text Save', 'Save')}
            title={text('Title', 'Information')}
        />
    );
};

export const Configurable: FunctionComponent = () => BaseComponent(theData);

export const ConfigurableEditingDefault: FunctionComponent = () => BaseComponent(theData, true);

export const ConfigurableWithConfirmationDialogs: FunctionComponent = () => BaseComponent(theData, false, true);

export const ConfigurableInformationNotEditable: FunctionComponent = () =>
    BaseComponent(
        theData.map((element) => ({
            ...element,
            isEditable: false,
        })),
        false,
        false,
        false
    );

export const ConfigurableWithErrorsAfterSaving: FunctionComponent = () =>
    BaseComponent(theData, false, false, true, ['Error number 1', 'Error number 2']);
