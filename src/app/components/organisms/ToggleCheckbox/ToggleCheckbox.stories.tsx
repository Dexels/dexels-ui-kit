import { ButtonSize, IconType } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import { select, text } from '@storybook/addon-knobs';
import ToggleCheckbox from './ToggleCheckbox';

export default { title: 'organisms/ToggleCheckbox' };

export const Configurable: FunctionComponent = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <ToggleCheckbox
            iconOff={select('Icon Off', IconType, IconType.CROSS)}
            iconOn={select('Icon On', IconType, IconType.CHECKBOXCHECK)}
            isInitialChecked={isChecked}
            onChange={(value) => setIsChecked(value)}
            size={select('Size', ButtonSize, ButtonSize.LARGE)}
            titleOff={text('Text off', 'Off')}
            titleOn={text('Text on', 'On')}
        />
    );
};
