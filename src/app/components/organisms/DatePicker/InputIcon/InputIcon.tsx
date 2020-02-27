import { DatePickerVariant } from '../types';
import Icon from '../../../atoms/Icon/Icon';
import { IconType } from '../../../../types';
import React from 'react';
import { StyledInputIcon } from './InputIcon.sc';

interface InputIconProps {
    isDisabled: boolean;
    isFocused: boolean;
    variant?: DatePickerVariant;
}

const InputIcon: React.FunctionComponent<InputIconProps> = ({ isDisabled, isFocused, variant }) => (
    <StyledInputIcon isDisabled={isDisabled} isFocused={isFocused} variant={variant}>
        <Icon type={IconType.CALENDAR} />
    </StyledInputIcon>
);

InputIcon.defaultProps = {
    variant: DatePickerVariant.OUTLINE,
};

export default InputIcon;
