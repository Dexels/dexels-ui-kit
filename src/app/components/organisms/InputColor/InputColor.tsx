import React, { FunctionComponent } from 'react';
import { DEFAULT_COLOR_CODE } from '../../../../global/constants';
import { InputProps } from '../../molecules/Input/Input';
import { InputType } from '../../../types';
import { isValidInputColor } from '../../../utils/functions/validateFunctions';
import { StyledInputColor } from './InputColor.sc';

export interface InputColorProps extends InputProps {
    isDisabled?: boolean;
    name: string;
    value?: string;
}

export const InputColor: FunctionComponent<InputColorProps> = ({ isDisabled = false, name, onChange, value }) => (
    <StyledInputColor
        isDisabled={isDisabled}
        name={name}
        onChange={isDisabled ? undefined : onChange}
        readOnly={isDisabled}
        type={InputType.COLOR}
        value={isValidInputColor(value) ? value : DEFAULT_COLOR_CODE}
    />
);
