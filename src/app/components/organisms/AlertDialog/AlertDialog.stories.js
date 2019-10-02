import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import AlertDialog from './AlertDialog';
import Button from '../../molecules/Button/Button';
import PropTypes from 'prop-types';

export default { title: 'organisms/AlertDialog' };

const Configurable = ({ onCancel, onClose, onOk }) => (
    <AlertDialog
        alignmentBody={select('Align body', AlertDialog.alignments, AlertDialog.defaultProps.alignmentBody)}
        alignmentFooter={select('Align footer', AlertDialog.alignments, AlertDialog.defaultProps.alignmentFooter)}
        alignmentHeader={select('Align header', AlertDialog.alignments, AlertDialog.defaultProps.alignmentHeader)}
        body={text('Body', 'Some body text')}
        buttonTextCancel={text('Button text cancel', 'Cancel')}
        buttonTextOk={text('Button text ok', 'Ok')}
        direction={select('Direction', AlertDialog.directions, AlertDialog.defaultProps.direction)}
        elevation={select('Elevation', AlertDialog.elevations, AlertDialog.defaultProps.elevation)}
        header={text('Header', 'Some header text')}
        heightDialog={text('Set height of dialog in px or %', AlertDialog.defaultProps.heightDialog)}
        heightFooter={text('Set height of footer in px or %', AlertDialog.defaultProps.heightFooter)}
        heightHeader={text('Set height of header in px or %', AlertDialog.defaultProps.heightHeader)}
        onCancel={onCancel}
        onClose={onClose}
        onOk={onOk}
        showCloseButton={boolean('Show close button', AlertDialog.defaultProps.showCloseButton)}
        widthDialog={text('Set width of dialog in px or %', AlertDialog.defaultProps.widthDialog)}
    />
);

Configurable.propTypes = {
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onOk: PropTypes.func,
};

Configurable.defaultProps = {
    onCancel: null,
    onClose: null,
    onOk: null,
};

export const ConfigurableAlert = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <>
            <Button
                onClick={() => setVisible(!isVisible)}
                variant="FILLED"
            >
                { isVisible && 'ALERT DIALOG IS SHOWN' }
                { !isVisible && 'SHOW ALERT DIALOG' }
            </Button>

            { isVisible
            && (
                <Configurable
                    onCancel={() => setVisible(false)}
                    onClose={() => setVisible(false)}
                    onOk={() => setVisible(false)}
                />
            )}
        </>
    );
};
