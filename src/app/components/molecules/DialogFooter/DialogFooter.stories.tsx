import React, { FunctionComponent } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import DialogFooter from './DialogFooter';
import { IconType } from '../../../types';

export default { title: 'molecules/DialogFooter' };

export const Configurable: FunctionComponent = () => (
    <DialogFooter
        buttonCancelText={text('Button cancel text', 'Cancel')}
        buttonConfirmIconType={select('Icon type confirm button', IconType, IconType.CHECK)}
        buttonConfirmText={text('Button confirm text', 'Ok')}
        onCancel={action('On cancel click')}
        onConfirm={action('On confirm click')}
        text={text('Text', '')}
    />
);
