import { boolean, text } from '@storybook/addon-knobs';
import DialogFooter from './DialogFooter';
import PropTypes from 'prop-types';
import React from 'react';

export default { title: 'molecules/DialogFooter' };

const ConfigurableFooter = ({ onCancel, onConfirm }) => (
    <DialogFooter
        buttonCancelText={text('Button cancel text', 'Cancel')}
        buttonConfirmText={text('Button confirm text', 'Ok')}
        hasButtonCancel={boolean('Show cancel button', DialogFooter.defaultProps.hasButtonCancel)}
        message={text('Message', '')}
        onCancel={onCancel}
        onConfirm={onConfirm}
    />
);

ConfigurableFooter.propTypes = {
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
};

ConfigurableFooter.defaultProps = {
    onCancel: null,
    onConfirm: null,
};

export const Configurable = () => (
    <ConfigurableFooter
        onCancel={() => {
            alert('Pressed cancel');
        }}
        onConfirm={() => {
            alert('Pressed confirm');
        }}
    />
);
