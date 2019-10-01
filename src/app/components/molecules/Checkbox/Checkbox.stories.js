import { boolean, select, text } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';
import React from 'react';

export default { title: 'molecules/Checkbox' };

export const Configurable = () => (
    <Checkbox
        direction={select('Direction', Checkbox.directions, Checkbox.defaultProps.direction)}
        errorMessage={text('Errormessage', 'Oops, something went wrong!')}
        hasError={boolean('Has error', Checkbox.defaultProps.hasError)}
        isDisabled={boolean('Is disabled', Checkbox.defaultProps.isDisabled)}
        isValid={boolean('Is valid', Checkbox.defaultProps.isValid)}
        label={text('Label', 'This is a label')}
        name="a-checkbox-name"
    />
);

export const ConfigurableAndCheckedByDefault = () => (
    <Checkbox
        direction={select('Direction', Checkbox.directions, Checkbox.defaultProps.direction)}
        errorMessage={text('Errormessage', 'Oops, something went wrong!')}
        hasError={boolean('Has error', Checkbox.defaultProps.hasError)}
        isCheckedDefault
        isDisabled={boolean('Is disabled', Checkbox.defaultProps.isDisabled)}
        isValid={boolean('Is valid', Checkbox.defaultProps.isValid)}
        label={text('Label', 'This is a label')}
        name="a-checkbox-name"
    />
);
