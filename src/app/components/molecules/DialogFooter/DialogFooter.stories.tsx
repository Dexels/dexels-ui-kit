import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import DialogFooter from './DialogFooter';
import { text } from '@storybook/addon-knobs';

export default { title: 'molecules/DialogFooter' };

export const Configurable: FunctionComponent = () => (
    <DialogFooter
        buttons={[
            {
                children: 'Cancel',
                iconType: IconType.CROSS,
                onClick: action('On cancel click'),
                size: ButtonSize.SMALL,
                variant: ButtonVariant.TEXT_ONLY,
            },
            {
                children: 'Ok',
                iconType: IconType.CHECK,
                onClick: action('On confirm click'),
                size: ButtonSize.SMALL,
                variant: ButtonVariant.OUTLINE,
            },
        ]}
        text={text('Text', '')}
    />
);
