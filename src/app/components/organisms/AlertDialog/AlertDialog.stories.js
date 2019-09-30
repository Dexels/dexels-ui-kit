import { boolean, select, text } from '@storybook/addon-knobs';
import AlertDialog from './AlertDialog';
import React from 'react';

export default { title: 'organisms/AlertDialog' };

export const Configurable = () => (
    <AlertDialog
        alignmentBody={select('Align body', AlertDialog.alignments, AlertDialog.defaultProps.alignmentBody)}
        alignmentFooter={select('Align footer', AlertDialog.alignments, AlertDialog.defaultProps.alignmentFooter)}
        alignmentHeader={select('Align header', AlertDialog.alignments, AlertDialog.defaultProps.alignmentHeader)}
        body={text('Body', 'Some body text')}
        buttonTextCancel={text('Button text cancel', 'Cancel')}
        buttonTextOk={text('Button text ok', 'Ok')}
        elevation={select('Elevation', AlertDialog.elevations, AlertDialog.defaultProps.elevation)}
        handleCancel={() => alert("You've pressed cancel")}
        handleOk={() => alert("You've pressed ok")}
        header={text('Header', 'Some header text')}
        heightDialog={text('Set height of dialog in px or %', AlertDialog.defaultProps.heightDialog)}
        heightFooter={text('Set height of footer in px or %', AlertDialog.defaultProps.heightFooter)}
        heightHeader={text('Set height of header in px or %', AlertDialog.defaultProps.heightHeader)}
        showCloseButton={boolean('Show close button', AlertDialog.defaultProps.showCloseButton)}
        widthDialog={text('Set width of dialog in px or %', AlertDialog.defaultProps.widthDialog)}
    />
);
