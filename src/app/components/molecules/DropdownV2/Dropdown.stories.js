import { boolean, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default { title: 'molecules/DropdownV2' };

export const Configurable = () => {
    const placeholder = 'Select your fruit';
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
                hasError={boolean('Has error', Dropdown.defaultProps.hasError)}
                isDisabled={boolean('Is disabled', Dropdown.defaultProps.isDisabled)}
                isValid={boolean('Is valid', Dropdown.defaultProps.isValid)}
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
