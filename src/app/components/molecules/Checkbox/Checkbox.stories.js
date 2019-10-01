import { boolean, text } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';
import React from 'react';

export default { title: 'molecules/Checkbox' };

export const Configurable = () => (
    <Checkbox
        errorMessage={text('Errormessage', 'Oops, something went wrong!')}
        hasError={boolean('Has error', Checkbox.defaultProps.hasError)}
        isDisabled={boolean('Is disabled', Checkbox.defaultProps.isDisabled)}
        name="a-checkbox-name"
    />
);

export const ConfigurableAndCheckedByDefault = () => (
    <Checkbox
        errorMessage={text('Errormessage', 'Oops, something went wrong!')}
        hasError={boolean('Has error', Checkbox.defaultProps.hasError)}
        isCheckedDefault
        isDisabled={boolean('Is disabled', Checkbox.defaultProps.isDisabled)}
        name="a-checkbox-name"
    />
);
