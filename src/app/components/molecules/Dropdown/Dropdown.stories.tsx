import { boolean, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { DropdownVariant } from './types';

export default { title: 'molecules/Dropdown' };

export const ConfigurableCompactVariant = () => {
    const placeholder = 'Select the best fruit';
    const fruits = ['Banana', 'Apple', 'Orange', 'Pear', 'Strawberry'];
    const [value, setValue] = useState(placeholder);

    const optionArray = fruits.map((fruit, index) => (
        <option disabled={index === 2} key={fruit} value={fruit}>
            {fruit}
        </option>
    ));

    return (
        <>
            <p>
                {'What is the best fruit?'}
            </p>
            <Dropdown
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', false)}
                isDisabled={boolean('Is disabled', false)}
                isValid={boolean('Is valid', false)}
                name="the-best-fruit"
                onChange={(event) => {
                    setValue(event.currentTarget.value);
                }}
                placeholder={placeholder}
                value={value}
            >
                {optionArray}
            </Dropdown>
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

    const optionArray = fruits.map((fruit, index) => (
        <option disabled={index === 2} key={fruit} value={fruit}>
            {fruit}
        </option>
    ));

    return (
        <>
            <Dropdown
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', false)}
                isDisabled={boolean('Is disabled', false)}
                isValid={boolean('Is valid', false)}
                label="Your favorite fruit"
                name="the-best-fruit"
                onChange={(event) => {
                    setValue(event.currentTarget.value);
                }}
                placeholder={placeholder}
                value={value}
                variant={DropdownVariant.OUTLINE}
            >
                {optionArray}
            </Dropdown>
            <p>
                {`You selected ${placeholder === value ? 'nothing yet' : value}.`}
            </p>
        </>
    );
};
