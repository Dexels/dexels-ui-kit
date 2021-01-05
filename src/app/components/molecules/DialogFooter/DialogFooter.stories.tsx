import { Alignment, ButtonSize, ButtonVariant, IconType } from '../../../types';
import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import DialogFooter from './DialogFooter';

export default { title: 'molecules/DialogFooter' };

export const Configurable: FunctionComponent = () => {
    const leftAlignment = boolean('With the button on the left', true);

    return (
        <DialogFooter
            buttons={[
                {
                    alignment: leftAlignment ? Alignment.LEFT : undefined,
                    iconType: IconType.TRASHCAN,
                    onClick: action('On delete click'),
                    size: ButtonSize.SMALL,
                    variant: ButtonVariant.TEXT_ONLY,
                },
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
                },
            ]}
            text={text('Text', '')}
        />
    );
};
