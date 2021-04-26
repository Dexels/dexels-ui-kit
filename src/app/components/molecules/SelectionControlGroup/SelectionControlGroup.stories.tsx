import { Alignment, Direction, OptionObject, SelectionControlGroupVariant } from '../../../types';
import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import SelectionControlGroup from './SelectionControlGroup';

export default { title: 'molecules/SelectionControlGroup' };

export const Configurable: FunctionComponent = () => {
    const options: OptionObject[] = [];

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
        console.log('selectedValue', selectedValue);
    };

    return (
        <SelectionControlGroup
            alignment={select('Alignment', Alignment, Alignment.LEFT)}
            defaultValue={'male'}
            direction={select('Direction', Direction, Direction.LTR)}
            groupName={text('Group name', 'radio-button-group')}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isHorizontal={boolean('Is horizontal layout', false)}
            isRequired={boolean('Is required', false)}
            onChange={onChange}
            options={options}
            title={text('Title', 'Select your gender')}
            variant={select('Variant', SelectionControlGroupVariant, SelectionControlGroupVariant.COMPACT)}
        />
    );
};
