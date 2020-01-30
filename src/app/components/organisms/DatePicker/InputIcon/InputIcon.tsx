import Icon from '../../../atoms/Icon/Icon';
import React from 'react';
import { StyledInputIcon } from './InputIcon.sc';

interface InputIconProps {
    isDisabled: boolean;
    isFocused: boolean;
}

const InputIcon: React.FunctionComponent<InputIconProps> = ({ isDisabled, isFocused }) => (
    <StyledInputIcon isDisabled={isDisabled} isFocused={isFocused}>
        <Icon type={Icon.types.CALENDAR} />
    </StyledInputIcon>
);

export default InputIcon;
