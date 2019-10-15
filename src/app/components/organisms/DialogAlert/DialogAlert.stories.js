import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import DialogAlert from './DialogAlert';
import PropTypes from 'prop-types';

export default { title: 'organisms/DialogAlert' };

const ConfigurableDialog = ({ onCancel, onClose, onConfirm }) => (
    <DialogAlert
        bodyAlignment={select('Body alignment', DialogAlert.alignments, DialogAlert.defaultProps.bodyAlignment)}
        buttonCancelText={text('ButtonCancel text', 'Cancel')}
        buttonClosePosition={select(
            'ButtonClose position', DialogAlert.directions, DialogAlert.defaultProps.buttonClosePosition,
        )}
        buttonConfirmText={text('Button confirm text', 'Ok')}
        elevation={select('Elevation', DialogAlert.elevations, DialogAlert.defaultProps.elevation)}
        footerMessage={text('Message in footer', '')}
        hasButtonClose={boolean('Show close button', DialogAlert.defaultProps.hasButtonClose)}
        hasOverlay={boolean('Has overlay', DialogAlert.defaultProps.hasOverlay)}
        header={text('Header', '')}
        headerAlignment={select('Align header', DialogAlert.alignments, DialogAlert.defaultProps.headerAlignment)}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
        width={text('Set width in px or %', DialogAlert.defaultProps.width)}
    >
        {text('Body', 'Some body text')}
    </DialogAlert>
);

ConfigurableDialog.propTypes = {
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
};

ConfigurableDialog.defaultProps = {
    onCancel: null,
    onClose: null,
    onConfirm: null,
};

export const Configurable = () => (
    <ConfigurableDialog
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
                {isVisible ? 'ALERT DIALOG IS SHOWING' : 'SHOW ALERT DIALOG'}
            </Button>
            {isVisible && (
                <ConfigurableDialog
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
            )}
        </>
    );
};
