import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import AlertDialog from './AlertDialog';
import Button from '../../molecules/Button/Button';
import PropTypes from 'prop-types';

export default { title: 'organisms/AlertDialog' };

export const Configurable = ({ onCancel, onClose, onConfirm }) => (
    <AlertDialog
        body={text('Body', 'Some body text')}
        bodyAlignment={select('Align body', AlertDialog.alignments, AlertDialog.defaultProps.bodyAlignment)}
        buttonClosePosition={
            select('Close button position',
                AlertDialog.directions,
                AlertDialog.defaultProps.buttonClosePosition)
        }
        buttonTextCancel={text('Button text cancel', 'Cancel')}
        buttonTextOk={text('Button text ok', 'Ok')}
        dialogHeight={text('Set height of dialog in px or %', AlertDialog.defaultProps.dialogHeight)}
        dialogWidth={text('Set width of dialog in px or %', AlertDialog.defaultProps.dialogWidth)}
        elevation={select('Elevation', AlertDialog.elevations, AlertDialog.defaultProps.elevation)}
        footerAlignment={select('Align footer', AlertDialog.alignments, AlertDialog.defaultProps.footerAlignment)}
        footerHeight={text('Set height of footer in px or %', AlertDialog.defaultProps.footerHeight)}
        hasButtonClose={boolean('Show close button', AlertDialog.defaultProps.hasButtonClose)}
        hasOverlay={boolean('Has overlay', AlertDialog.defaultProps.hasOverlay)}
        header={text('Header', 'Some header text')}
        headerAlignment={select('Align header', AlertDialog.alignments, AlertDialog.defaultProps.headerAlignment)}
        headerHeight={text('Set height of header in px or %', AlertDialog.defaultProps.headerHeight)}
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
