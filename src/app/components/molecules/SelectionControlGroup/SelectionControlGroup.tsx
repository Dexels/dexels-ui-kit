import React, { FunctionComponent, ReactNode } from 'react';
import { FormElementLabel } from '../FormElementLabel/FormElementLabel';
import Label from '../../atoms/Label/Label';
import { StyledSelectionGroup } from './SelectionControlGroup.sc';

export interface SelectionControlGroupProps {
    children?: ReactNode;
    className?: string;
    hasBorder?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
    isHorizontal?: boolean;
    title?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SelectionControlGroup: FunctionComponent<SelectionControlGroupProps> = ({
    children,
    className,
    hasBorder = false,
    hasError = false,
    isDisabled = false,
    isHorizontal = false,
    title,
}) => (
    <>
        {title && hasBorder ? (
            <FormElementLabel isDisabled={isDisabled}>{title}</FormElementLabel>
        ) : (
            <Label hasError={hasError} isDisabled={isDisabled} isSmall>
                {title}
            </Label>
        )}
        <StyledSelectionGroup
            className={className}
            hasBorder={hasBorder}
            hasError={hasError}
            isDisabled={isDisabled}
            isHorizontal={isHorizontal}
        >
            {children}
        </StyledSelectionGroup>
    </>
);

export default SelectionControlGroup;
