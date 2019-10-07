import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Button from '../../molecules/Button/Button';
import DialogAlert from './DialogAlert';
import PropTypes from 'prop-types';

export default { title: 'organisms/DialogAlert' };

export const Configurable = ({ onCancel, onClose, onConfirm }) => (
    <DialogAlert
        body={text('Body', 'Some body text')}
        bodyAlignment={select('Align body', DialogAlert.alignments, DialogAlert.defaultProps.bodyAlignment)}
        buttonCancelText={text('Button cancel text', 'Cancel')}
        buttonClosePosition={select(
            'Button close position', DialogAlert.directions, DialogAlert.defaultProps.buttonClosePosition,
        )}
        buttonConfirmText={text('Button confirm text', 'Ok')}
        dialogHeight={text('Set height of dialog in px or %', DialogAlert.defaultProps.dialogHeight)}
        dialogWidth={text('Set width of dialog in px or %', DialogAlert.defaultProps.dialogWidth)}
        elevation={select('Elevation', DialogAlert.elevations, DialogAlert.defaultProps.elevation)}
        footerAlignment={select('Align footer', DialogAlert.alignments, DialogAlert.defaultProps.footerAlignment)}
        footerHeight={text('Set height of footer in px or %', DialogAlert.defaultProps.footerHeight)}
        hasButtonClose={boolean('Show close button', DialogAlert.defaultProps.hasButtonClose)}
        hasOverlay={boolean('Has overlay', DialogAlert.defaultProps.hasOverlay)}
        header={text('Header', 'Some header text')}
        headerAlignment={select('Align header', DialogAlert.alignments, DialogAlert.defaultProps.headerAlignment)}
        headerHeight={text('Set height of header in px or %', DialogAlert.defaultProps.headerHeight)}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
    />
);

Configurable.propTypes = {
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
};

Configurable.defaultProps = {
    onCancel: null,
    onClose: null,
    onConfirm: null,
};

export const ConfigurableAlert = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsVisible(!isVisible)}
                variant="FILLED"
            >
                {isVisible && 'ALERT DIALOG IS SHOWN'}
                {!isVisible && 'SHOW ALERT DIALOG'}
            </Button>
            {isVisible && (
                <Configurable
                    onCancel={() => {
                        setIsVisible(false);
                    }}
                    onClose={() => {
                        setIsVisible(false);
                    }}
                    onConfirm={() => {
                        setIsVisible(false);
                    }}
                />
            )}
        </>
    );
};
