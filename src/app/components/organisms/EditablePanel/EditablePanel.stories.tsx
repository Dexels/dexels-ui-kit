import { boolean, select, text } from '@storybook/addon-knobs';
import { IconType, Status } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import EditablePanel from './EditablePanel';

export default { title: 'organisms/EditablePanel' };

export const Configurable: FunctionComponent = () => (
    <EditablePanel
        iconCancel={select('Icon Cancel', IconType, IconType.CROSS)}
        iconEdit={select('Icon Edit', IconType, IconType.PENCIL)}
        iconSave={select('Icon Save', IconType, IconType.CHECK)}
        iconType={select('Icon type', IconType, IconType.FLAG)}
        isDisabled={boolean('Is disabled', false)}
        isSaving={boolean('Is saving', false)}
        onCancel={action('onCancel')}
        onEdit={action('onEdit')}
        onSave={action('onSave')}
        textCancel={text('Text Cancel', 'Cancel')}
        textEdit={text('Text Edit', 'Edit')}
        textSave={text('Text Save', 'Save')}
        title={text('Title', 'Location')}
    >
        <div>{'The panel has these children'}</div>
    </EditablePanel>
);

export const ConfigurableIsEditingDefault: FunctionComponent = () => (
    <EditablePanel
        iconCancel={select('Icon Cancel', IconType, IconType.CROSS)}
        iconEdit={select('Icon Edit', IconType, IconType.PENCIL)}
        iconSave={select('Icon Save', IconType, IconType.CHECK)}
        iconType={select('Icon type', IconType, IconType.FLAG)}
        isDisabled={boolean('Is disabled', false)}
        isEditing
        isSaving={boolean('Is saving', false)}
        onCancel={action('onCancel')}
        onEdit={action('onEdit')}
        onSave={action('onSave')}
        textCancel={text('Text Cancel', 'Cancel')}
        textEdit={text('Text Edit', 'Edit')}
        textSave={text('Text Save', 'Save')}
        title={text('Title', 'Location')}
    >
        <div>{'The panel has these children'}</div>
    </EditablePanel>
);

export const ConfigurableWithConfirmationDialogs: FunctionComponent = () => (
    <EditablePanel
        cancelConfirmDialog={{
            buttonCancelText: 'No',
            buttonConfirmText: 'Yes',
            iconType: IconType.HANGER,
            status: Status.INVALID,
            text: 'Are you sure you want to cancel? you will loose all the changes you have made',
        }}
        iconCancel={select('Icon Cancel', IconType, IconType.CROSS)}
        iconEdit={select('Icon Edit', IconType, IconType.PENCIL)}
        iconSave={select('Icon Save', IconType, IconType.CHECK)}
        iconType={select('Icon type', IconType, IconType.FLAG)}
        isDisabled={boolean('Is disabled', false)}
        isEditing={boolean('Is editing', false)}
        isSaving={boolean('Is saving', false)}
        onCancel={action('onCancel')}
        onEdit={action('onEdit')}
        onSave={action('On confirm')}
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
        title={text('Title', 'Location')}
    >
        <div>{'The panel has these children'}</div>
    </EditablePanel>
);
