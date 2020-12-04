import { boolean, select, text } from '@storybook/addon-knobs';
import { IconType, Status } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import EditableInformation from './EditableInformation';
import editableInformationData from './mockup/editableInformationData';
import Skeleton from '../../molecules/Skeleton/Skeleton';

const onSaveCallback = (data: unknown): void => {
    // eslint-disable-next-line no-console
    console.log('[payload]', data);
};

export default { title: 'organisms/EditableInformation' };

export const Configurable: FunctionComponent = () => {
    return (
        <EditableInformation
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            data={editableInformationData()}
            iconType={select('Icon Type', IconType, IconType.CALENDAR)}
            isButtonDisabled={boolean('Is button disabled', false)}
            isDisabled={boolean('Is disabled', false)}
            isLoading={boolean('Is loading', false)}
            onCancel={action('onCancel')}
            onEdit={action('onEdit')}
            onSave={onSaveCallback}
            textCancel={text('Text Cancel', 'Cancel')}
            textEdit={text('Text Edit', 'Edit')}
            textSave={text('Text Save', 'Save')}
            title={text('Title', 'Information')}
        />
    );
};

export const ConfigurableEditingDefault: FunctionComponent = () => {
    return (
        <EditableInformation
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            data={editableInformationData()}
            iconType={select('Icon Type', IconType, IconType.CALENDAR)}
            isButtonDisabled={boolean('Is button disabled', false)}
            isDisabled={boolean('Is disabled', false)}
            isEditing
            isLoading={boolean('Is loading', false)}
            onCancel={action('onCancel')}
            onEdit={action('onEdit')}
            onSave={onSaveCallback}
            textCancel={text('Text Cancel', 'Cancel')}
            textEdit={text('Text Edit', 'Edit')}
            textSave={text('Text Save', 'Save')}
            title={text('Title', 'Information')}
        />
    );
};

export const ConfigurableWithConfirmationDialogs: FunctionComponent = () => {
    return (
        <EditableInformation
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            cancelConfirmDialog={{
                buttonCancelText: 'No',
                buttonConfirmText: 'Yes',
                iconType: IconType.HANGER,
                status: Status.INVALID,
                text: 'Are you sure you want to cancel? you will loose all the changes you have made',
            }}
            data={editableInformationData()}
            iconType={select('Icon Type', IconType, IconType.CALENDAR)}
            isButtonDisabled={boolean('Is button disabled', false)}
            isDisabled={boolean('Is disabled', false)}
            isLoading={boolean('Is loading', false)}
            onCancel={action('onCancel')}
            onEdit={action('onEdit')}
            onSave={onSaveCallback}
            saveConfirmDialog={{
                buttonCancelText: 'No',
                buttonConfirmText: 'Yes',
                iconType: IconType.HANGER,
                status: Status.DEFAULT,
                text: 'Are you sure you want to save?',
            }}
            textCancel={text('Text Cancel', 'Cancel')}
            textEdit={text('Text Edit', 'Edit')}
            textSave={text('Text Save', 'Save')}
            title={text('Title', 'Information')}
        />
    );
};

export const ConfigurableInformationNotEditable: FunctionComponent = () => {
    return (
        <EditableInformation
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            data={editableInformationData().map((element) => ({
                ...element,
                isEditable: false,
            }))}
            iconType={select('Icon Type', IconType, IconType.CALENDAR)}
            isButtonDisabled={boolean('Is button disabled', false)}
            isLoading={boolean('Is loading', false)}
            title={text('Title', 'Information')}
        />
    );
};

export const ConfigurableLoading: FunctionComponent = () => {
    return (
        <EditableInformation
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            data={Array(8).fill({
                label: <Skeleton width="60%" />,
                value: <Skeleton width="90%" />,
            })}
            iconType={select('Icon Type', IconType, IconType.CALENDAR)}
            isLoading
            title={text('Title', 'Information')}
        />
    );
};
