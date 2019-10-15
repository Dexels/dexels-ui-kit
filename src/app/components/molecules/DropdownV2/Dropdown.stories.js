import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import Dropdown from './Dropdown';

export default { title: 'molecules/DropdownV2' };

export const Configurable = () => {
    const placeholder = 'Select your fruit';
    const fruits = ['Banana', 'Apple', 'Orange', 'Pear', 'Strawberry'];
    const [selectedValue, setSelectedValue] = useState(placeholder);

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
                defaultValue="placeholder-value"
                isDisabled={boolean('Is disabled', Dropdown.defaultProps.isDisabled)}
                name="the-best-fruit"
                onChange={(event) => {
                    setSelectedValue(event.currentTarget.value);
                }}
                placeholder={placeholder}
                value={selectedValue}
            >
                {optionArray}
            </Dropdown>
            <p>
                {`You selected ${placeholder === selectedValue ? 'nothing yet' : selectedValue}.`}
            </p>
        </>
    );
};
