import React, { FunctionComponent } from 'react';
import Icon from '../../../atoms/Icon/Icon';
import { IconType } from '../../../../types';
import { SingleDatePickerVariant } from '../types';
import { StyledInputIcon } from './InputIcon.sc';

interface InputIconProps {
    children?: never;
    isDisabled: boolean;
    isFocused: boolean;
    variant?: SingleDatePickerVariant;
}

const InputIcon: FunctionComponent<InputIconProps> = ({
    isDisabled,
    isFocused,
    variant = SingleDatePickerVariant.OUTLINE,
}) => (
    <StyledInputIcon isDisabled={isDisabled} isFocused={isFocused} variant={variant}>
        <Icon type={IconType.CALENDAR} />
    </StyledInputIcon>
);

export default InputIcon;
