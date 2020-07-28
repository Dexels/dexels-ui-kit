import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import Dropdown from './Dropdown';
import { DropdownVariant } from './types';
import { selectOptionsFacade } from '../../../utils/functions/arrayObjectFunctions';

export default { title: 'molecules/Dropdown' };

interface Fruit {
    id: number;
    isSelected?: boolean;
    name: string;
}

export const ConfigurableCompactVariant: FunctionComponent = () => {
    const placeholder = 'Select the best fruit';
    const [value, setValue] = useState(placeholder);

    const fruits: Fruit[] = [
        {
            id: 1,
            isSelected: true,
            name: 'Banana',
        },
        {
            id: 2,
            isSelected: false,
            name: 'Apple',
        },
        {
            id: 3,
            name: 'Pear',
        },
        {
            id: 4,
            isSelected: false,
            name: 'Mango',
        },
    ];

    const options = selectOptionsFacade(fruits, 'id', 'name');

    return (
        <>
            <p>{'What is the best fruit?'}</p>
            <Dropdown
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', false)}
                isDisabled={boolean('Is disabled', false)}
                isValid={boolean('Is valid', false)}
                name="the-best-fruit"
                onChange={(event): void => {
                    setValue(event.currentTarget.value);
                }}
                options={options}
                placeholder={placeholder}
                value={value}
            />
            <p>{`You selected ${placeholder === value ? 'nothing yet' : value}.`}</p>
        </>
    );
};

export const ConfigurableOutlineVariant: FunctionComponent = () => {
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
                onChange={(event): void => {
                    setValue(event.currentTarget.value);
                }}
                placeholder={placeholder}
                value={value}
                variant={DropdownVariant.OUTLINE}
            >
                {optionArray}
            </Dropdown>
            <p>{`You selected ${placeholder === value ? 'nothing yet' : value}.`}</p>
        </>
    );
};
