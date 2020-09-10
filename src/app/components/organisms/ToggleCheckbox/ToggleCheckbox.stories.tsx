import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonSize, IconType } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import ToggleCheckbox from './ToggleCheckbox';

export default { title: 'organisms/ToggleCheckbox' };

export const Configurable: FunctionComponent = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = (value: boolean): void => {
        setIsChecked(value);
        // eslint-disable-next-line no-console
        console.log('isChecked', value);
    };

    return (
        <ToggleCheckbox
            iconOff={select('Icon Off', IconType, IconType.CROSS)}
            iconOn={select('Icon On', IconType, IconType.CHECKBOXCHECK)}
            isDisabled={boolean('Is disabled', false)}
            isInitialChecked={isChecked}
            onChange={(value) => onChange(value)}
            size={select('Size', ButtonSize, ButtonSize.LARGE)}
            textOff={text('Text off', 'Off')}
            textOn={text('Text on', 'On')}
        />
    );
};
