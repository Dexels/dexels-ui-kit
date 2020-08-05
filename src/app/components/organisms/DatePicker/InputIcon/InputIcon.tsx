import React, { FunctionComponent } from 'react';
import IconCustomizable from '../../../molecules/IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../../../molecules/IconCustomizable/types';
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
        <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CALENDAR} />
    </StyledInputIcon>
);

export default InputIcon;
