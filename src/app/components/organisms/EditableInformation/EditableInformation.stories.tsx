import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import EditableInformation from './EditableInformation';
import editableInformationData from './mockup/editableInformationData';
import { IconType } from '../../../types';
import Skeleton from '../../molecules/Skeleton/Skeleton';

export default { title: 'organisms/EditableInformation' };

export const Configurable: FunctionComponent = () => {
    return (
        <EditableInformation
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            data={editableInformationData()}
            iconType={select('Icon Type', IconType, IconType.CALENDAR)}
            isLoading={boolean('Is loading', false)}
            onCancel={action('onCancel')}
            onEdit={action('onEdit')}
            onSave={action('onSave')}
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
            isLoading={boolean('Is loading', false)}
            onCancel={action('onCancel')}
            onEdit={action('onEdit')}
            onSave={action('onSave')}
            textCancel={text('Text Cancel', 'Cancel')}
            textEdit={text('Text Edit', 'Edit')}
            textSave={text('Text Save', 'Save')}
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
            textCancel={text('Text Cancel', 'Cancel')}
            textEdit={text('Text Edit', 'Edit')}
            textSave={text('Text Save', 'Save')}
            title={text('Title', 'Information')}
        />
    );
};
