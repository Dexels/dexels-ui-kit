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

const InputIcon: React.FunctionComponent<InputIconProps> = ({ isDisabled, isFocused, variant }) => (
    <StyledInputIcon isDisabled={isDisabled} isFocused={isFocused} variant={variant}>
        <Icon type={IconType.CALENDAR} />
    </StyledInputIcon>
);

InputIcon.defaultProps = {
    variant: SingleDatePickerVariant.OUTLINE,
};

export default InputIcon;
