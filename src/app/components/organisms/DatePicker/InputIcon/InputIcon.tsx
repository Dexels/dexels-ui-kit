import Icon from '../../../atoms/Icon/Icon';
import { IconType } from '../../../../types';
import React from 'react';
import { StyledInputIcon } from './InputIcon.sc';

interface InputIconProps {
    isDisabled: boolean;
    isFocused: boolean;
}

const InputIcon: React.FunctionComponent<InputIconProps> = ({ isDisabled, isFocused }) => (
    <StyledInputIcon isDisabled={isDisabled} isFocused={isFocused}>
        <Icon type={IconType.CALENDAR} />
    </StyledInputIcon>
);

export default InputIcon;
