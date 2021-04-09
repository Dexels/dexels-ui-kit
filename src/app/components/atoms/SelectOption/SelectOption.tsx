import React, { FunctionComponent, ReactNode } from 'react';
import { StyledSelectOption } from './SelectOption.sc';

export interface SelectOptionProps {
    children?: ReactNode;
    className?: string;
    isDisabled?: boolean;
    isHidden?: boolean;
    value: string | number;
}

export const SelectOption: FunctionComponent<SelectOptionProps> = ({
    children,
    className,
    isDisabled = false,
    isHidden = false,
    value,
}) => (
    <StyledSelectOption className={className} disabled={isDisabled} hidden={isHidden} value={value}>
        {children}
    </StyledSelectOption>
);

export default SelectOption;
