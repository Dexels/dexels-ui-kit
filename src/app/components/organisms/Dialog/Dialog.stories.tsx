import {
    Alignment,
    ButtonVariant,
    Easing,
    Elevation,
    IconType,
} from '../../../types';
import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Dialog from './Dialog';
import { DialogButtonClosePosition } from './types';

export default { title: 'organisms/Dialog' };

interface ConfigurableDialogProps {
    isVisible: boolean;
    onCancel: React.MouseEventHandler;
    onClose: React.MouseEventHandler;
    onConfirm: React.MouseEventHandler;
}

const ConfigurableDialog: React.FunctionComponent<ConfigurableDialogProps> = ({
    isVisible,
    onCancel,
    onClose,
    onConfirm,
}) => (
    <Dialog
        bodyAlignment={select('Body alignment', Alignment, Dialog.defaultProps.bodyAlignment)}
        buttonCancelText={text('ButtonCancel text', 'Cancel')}
        buttonClosePosition={select(
            'ButtonClose position', DialogButtonClosePosition, Dialog.defaultProps.buttonClosePosition,
        )}
        buttonConfirmIconType={select(
            'Icon type confirm button', IconType, Dialog.defaultProps.buttonConfirmIconType,
        )}
        buttonConfirmText={text('Button confirm text', 'Ok')}
        elevation={select('Elevation', Elevation, Dialog.defaultProps.elevation)}
        footerText={text('Text in footer', '')}
        hasButtonClose={boolean('Show close button', Dialog.defaultProps.hasButtonClose)}
        hasOverlay={boolean('Has overlay', Dialog.defaultProps.hasOverlay)}
        header={text('Header', '')}
        headerAlignment={select('Align header', Alignment, Dialog.defaultProps.headerAlignment)}
        height={text('Set height in px or %', Dialog.defaultProps.height)}
        isVisible={isVisible}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
        transitionDuration={number('Transition duration', Dialog.defaultProps.transitionDuration)}
        transitionEasing={select(
            'Transition type',
            Easing,
            Dialog.defaultProps.transitionEasing,
        )}
        width={text('Set width in px or %', Dialog.defaultProps.width)}
    >
        {text('Body', 'Some body text')}
    </Dialog>
);

export const Configurable = () => (
    <ConfigurableDialog
        isVisible
        onCancel={action('OnCancel click')}
        onClose={action('OnClose click')}
        onConfirm={action('OnConfirm click')}
    />
);

export const ConfigurableAlert = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'DIALOG IS SHOWING' : 'SHOW DIALOG'}
            </Button>
            <ConfigurableDialog
                isVisible={isVisible}
                onCancel={() => {
                    action('OnCancel');
                    setIsVisible(false);
                }}
                onClose={() => {
                    action('onClose');
                    setIsVisible(false);
                }}
                onConfirm={() => {
                    action('onConfirm');
                    setIsVisible(false);
                }}
            />
        </>
    );
};
