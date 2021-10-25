import React, { FunctionComponent, useContext } from 'react';
import { InputProps } from '../../molecules/Input/Input';
import { InputType } from '../../../types';
import { isValidInputColor } from '../../../utils/functions/validateFunctions';
import { StyledInputColor } from './InputColor.sc';
import { ThemeContext } from 'styled-components';

export interface InputColorProps extends Pick<InputProps, 'isDisabled' | 'name' | 'onChange'> {
    value?: string;
}

export const InputColor: FunctionComponent<InputColorProps> = ({ isDisabled = false, name, onChange, value }) => {
    const theme = useContext(ThemeContext);

    return (
        <StyledInputColor
            disabled={isDisabled}
            isDisabled={isDisabled}
            name={name}
            onChange={isDisabled ? undefined : onChange}
            type={InputType.COLOR}
            value={isValidInputColor(value) ? value : theme.shades.seven}
        />
    );
};
