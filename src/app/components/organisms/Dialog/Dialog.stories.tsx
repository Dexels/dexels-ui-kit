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
        bodyAlignment={select('Body alignment', Alignment, Alignment.CENTER)}
        buttonCancelText={text('ButtonCancel text', 'Cancel')}
        buttonClosePosition={select('ButtonClose position', DialogButtonClosePosition, DialogButtonClosePosition.LEFT)}
        buttonConfirmIconType={select('Icon type confirm button', IconType, IconType.CHECK)}
        buttonConfirmText={text('Button confirm text', 'Ok')}
        elevation={select('Elevation', Elevation, Elevation.LEVEL_12)}
        footerText={text('Text in footer', '')}
        hasButtonClose={boolean('Show close button', true)}
        hasOverlay={boolean('Has overlay', true)}
        header={text('Header', '')}
        headerAlignment={select('Align header', Alignment, Alignment.CENTER)}
        height={text('Set height in px or %', 'Inherit')}
        isVisible={isVisible}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
        transitionDuration={number('Transition duration', 500)}
        transitionEasing={select('Transition type', Easing, Easing.EASE)}
        width={text('Set width in px or %', '300px')}
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
