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
import PropTypes from 'prop-types';

export default { title: 'organisms/Dialog' };

const ConfigurableDialog = ({
    isVisible,
    onCancel,
    onClose,
    onConfirm,
}) => (
    <Dialog
        bodyAlignment={select('Body alignment', Dialog.alignments, Dialog.defaultProps.bodyAlignment)}
        buttonCancelText={text('ButtonCancel text', 'Cancel')}
        buttonClosePosition={select(
            'ButtonClose position', Dialog.directions, Dialog.defaultProps.buttonClosePosition,
        )}
        buttonConfirmText={text('Button confirm text', 'Ok')}
        elevation={select('Elevation', Dialog.elevations, Dialog.defaultProps.elevation)}
        footerText={text('Text in footer', '')}
        hasButtonClose={boolean('Show close button', Dialog.defaultProps.hasButtonClose)}
        hasOverlay={boolean('Has overlay', Dialog.defaultProps.hasOverlay)}
        header={text('Header', '')}
        headerAlignment={select('Align header', Dialog.alignments, Dialog.defaultProps.headerAlignment)}
        isVisible={isVisible}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
        transitionDuration={number('Transition duration', Dialog.defaultProps.transitionDuration)}
        transitionEasing={select(
            'Transition type',
            Dialog.transitionEasings,
            Dialog.defaultProps.transitionEasing,
        )}
        width={text('Set width in px or %', Dialog.defaultProps.width)}
    >
        {text('Body', 'Some body text')}
    </Dialog>
);

ConfigurableDialog.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

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
                variant={Button.variants.FILLED}
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
