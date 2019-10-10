import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import DialogFooter from './DialogFooter';
import React from 'react';

export default { title: 'molecules/DialogFooter' };

export const Configurable = () => (
    <DialogFooter
        buttonCancelText={text('Button cancel text', 'Cancel')}
        buttonConfirmText={text('Button confirm text', 'Ok')}
        hasButtonCancel={boolean('Show cancel button', DialogFooter.defaultProps.hasButtonCancel)}
        message={text('Message', '')}
        onCancel={action('On cancel click')}
        onConfirm={action('On confirm click')}
    />
);
