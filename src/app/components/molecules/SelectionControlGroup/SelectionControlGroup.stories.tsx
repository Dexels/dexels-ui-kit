import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import { Direction } from '../../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import SelectionControlGroup from './SelectionControlGroup';
import { SelectionControlType } from '../SelectionControl/types';

export default { title: 'molecules/SelectionControlGroup' };

export const Configurable: FunctionComponent = () => (
    <SelectionControlGroup
        hasBorder={boolean('Has border', false)}
        hasError={boolean('Has error', false)}
        isDisabled={boolean('Is disabled', false)}
        isHorizontal={boolean('Is horizontal layout', false)}
        title={text('Title', 'Select your gender')}
    >
        <SelectionControl
            direction={Direction.LTR}
            isChecked
            label={'Im a girl'}
            name="a-radio-button-name"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={() => {}}
            type={SelectionControlType.RADIO}
            value="female"
        />
        <SelectionControl
            direction={Direction.LTR}
            isChecked={false}
            label={'Im a boy'}
            name="a-radio-button-name"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={() => {}}
            type={SelectionControlType.RADIO}
            value="male"
        />
    </SelectionControlGroup>
);
