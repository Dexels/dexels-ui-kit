import React, { ChangeEvent, FunctionComponent, useContext } from 'react';
import { InputType } from '../../../types';
import { isValidInputColor } from '../../../utils/functions/validateFunctions';
import { StyledInputColor } from './InputColor.sc';
import { ThemeContext } from 'styled-components';

export interface InputColorProps {
    isDisabled?: boolean;
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
