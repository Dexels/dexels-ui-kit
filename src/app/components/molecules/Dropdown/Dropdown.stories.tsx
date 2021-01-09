import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import Dropdown from './Dropdown';
import { DropdownVariant } from './types';
import { selectOptionsFacade } from '../../../utils/functions/arrayObjectFunctions';

export default { title: 'molecules/Dropdown' };

interface Fruit {
    Id: number;
    IsSelected: boolean;
    Name: string;
}

export const ConfigurableCompactVariant: FunctionComponent = () => {
    const placeholder = 'Select the best fruit';
    const [value, setValue] = useState(placeholder);

    const fruits: Fruit[] = [
        {
            Id: 1,
            IsSelected: true,
            Name: 'Banana',
        },
        {
            Id: 2,
            IsSelected: false,
            Name: 'Apple',
        },
        {
            Id: 3,
            IsSelected: false,
            Name: 'Pear',
        },
        {
            Id: 4,
            IsSelected: false,
            Name: 'Mango',
        },
    ];

    const options = selectOptionsFacade(fruits, 'Name', 'Id');

    return (
        <>
            <p>{'What is the best fruit?'}</p>
            <Dropdown
                autoFocus={boolean('Auto focus', true)}
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

export const ConfigurableEmptyOptions: FunctionComponent = () => (
    <Dropdown
        errorMessage={text('Error message', 'Everything is broken, oops')}
        hasError={boolean('Has error', false)}
        isDisabled={boolean('Is disabled', false)}
        isValid={boolean('Is valid', false)}
        name="the-best-empty-fruit"
        noOptionsText={text('No options text', 'No options')}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={(): void => {}}
        options={[]}
        placeholder={text('Placeholder', 'Something here')}
        value={''}
    />
);
