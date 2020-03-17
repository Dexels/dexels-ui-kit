import Icon from '../../../atoms/Icon/Icon';
import { IconType } from '../../../../types';
import React from 'react';
import { SingleDatePickerVariant } from '../types';
import { StyledInputIcon } from './InputIcon.sc';

interface InputIconProps {
    isDisabled: boolean;
    isFocused: boolean;
    variant?: SingleDatePickerVariant;
}

const InputIcon: React.FunctionComponent<InputIconProps> = ({
    isDisabled,
    isFocused,
    variant = SingleDatePickerVariant.OUTLINE,
}) => (
    <StyledInputIcon isDisabled={isDisabled} isFocused={isFocused} variant={variant}>
        <Icon type={IconType.CALENDAR} />
    </StyledInputIcon>
);

export default InputIcon;
