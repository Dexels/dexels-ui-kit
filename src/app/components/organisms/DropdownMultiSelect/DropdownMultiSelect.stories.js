import { boolean, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import DropdownMultiSelect from './DropdownMultiSelect';

export default { title: 'organisms/DropdownMultiSelect' };

export const ConfigurableCompactVariant = () => {
    const placeholder = 'Select the best fruit';
    const fruits = ['Banana', 'Apple', 'Orange', 'Pear', 'Strawberry'];
    const [value, setValue] = useState(placeholder);

    return (
        <>
            <p>
                {'What is the best fruit?'}
            </p>
            <DropdownMultiSelect
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', DropdownMultiSelect.defaultProps.hasError)}
                isDisabled={boolean('Is disabled', DropdownMultiSelect.defaultProps.isDisabled)}
                isValid={boolean('Is valid', DropdownMultiSelect.defaultProps.isValid)}
                name="the-best-fruit"
                onChange={(event) => {
                    setValue(event.currentTarget.value);
                }}
                options={fruits}
                placeholder={placeholder}
                value={value}
            />
            <p>
                {`You selected ${placeholder === value ? 'nothing yet' : value}.`}
            </p>
        </>
    );
};

export const ConfigurableOutlineVariant = () => {
    const placeholder = 'Select a fruit';
    const fruits = ['Banana', 'Apple', 'Orange', 'Pear', 'Strawberry'];
    const [value, setValue] = useState(placeholder);

    return (
        <>
            <DropdownMultiSelect
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', DropdownMultiSelect.defaultProps.hasError)}
                isDisabled={boolean('Is disabled', DropdownMultiSelect.defaultProps.isDisabled)}
                isValid={boolean('Is valid', DropdownMultiSelect.defaultProps.isValid)}
                label="Your favorite fruit"
                name="the-best-fruit"
                onChange={(event) => {
                    setValue(event.currentTarget.value);
                }}
                options={fruits}
                placeholder={placeholder}
                value={value}
                variant={DropdownMultiSelect.variants.OUTLINE}
            />
            <p>
                {`You selected ${placeholder === value ? 'nothing yet' : value}.`}
            </p>
        </>
    );
};
