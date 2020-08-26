import React, { FunctionComponent } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import EditablePanel from './EditablePanel';
import { IconType } from '../../../types';

export default { title: 'molecules/EditablePanel' };

export const Configurable: FunctionComponent = () => (
    <EditablePanel
        iconCancel={select('Icon Cancel', IconType, IconType.CROSS)}
        iconEdit={select('Icon Edit', IconType, IconType.PENCIL)}
        iconSave={select('Icon Save', IconType, IconType.CHECK)}
        iconType={select('Icon type', IconType, IconType.FLAG)}
        onCancel={action('onCancel')}
        onEdit={action('onEdit')}
        onSave={action('onSave')}
        textCancel={text('Text Cancel', 'Annuleren')}
        textEdit={text('Text Edit', 'Wijzig')}
        textSave={text('Text Save', 'Opslaan')}
        title={text('Title', 'Locatie')}
    >
        <div>{'The panel has these children'}</div>
    </EditablePanel>
);
