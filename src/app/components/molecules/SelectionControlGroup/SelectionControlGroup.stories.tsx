import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import SelectionControlGroup, { SelectionControlGroupItemProps } from './SelectionControlGroup';
import { Direction } from '../../../types';

export default { title: 'molecules/SelectionControlGroup' };

export const Configurable: FunctionComponent = () => {
    const options: SelectionControlGroupItemProps[] = [];

    options.push(
        {
            label: 'Girls',
            value: 'female',
        },
        {
            label: 'Boys',
            value: 'male',
        },
        {
            label: 'Mixed',
            value: 'mixed',
        }
    );

    const onChange = (selectedValue: string): void => {
        // eslint-disable-next-line no-console
        console.log('selectedValue', selectedValue);
    };

    return (
        <SelectionControlGroup
            defaultValue={text('default value: female, male, mixed', 'male')}
            direction={select('Direction', Direction, Direction.LTR)}
            groupName={text('Group name', 'radio-button-group')}
            hasBorder={boolean('Has border', false)}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isHorizontal={boolean('Is horizontal layout', false)}
            onChange={onChange}
            options={options}
            title={text('Title', 'Select your gender')}
        />
    );
};
