import { Direction, OptionObject } from '../../../types';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { SelectionControlWrapper, StyledSelectionControlGroup } from './SelectionControlGroup.sc';
import { FormElementLabel } from '../FormElementLabel/FormElementLabel';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import Label from '../../atoms/Label/Label';
import SelectionControl from '../SelectionControl/SelectionControl';
import { SelectionControlType } from '../SelectionControl/types';

export interface SelectionControlGroupProps {
    children?: never;
    className?: string;
    defaultValue?: string;
    direction?: Direction;
    groupName: string;
    hasBorder?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
    isHorizontal?: boolean;
    onChange: (selectedValue: string) => void;
    options: OptionObject[];
    title?: ReactNode;
}

export const SelectionControlGroup: FunctionComponent<SelectionControlGroupProps> = ({
    className,
    defaultValue,
    direction = Direction.LTR,
    groupName,
    hasBorder = false,
    hasError = false,
    isDisabled = false,
    isHorizontal = false,
    onChange,
    options,
    title,
}) => {
    const [selectedValue, setSelectedValue] = useState<string | number>('');

    const onChangeCallback = useCallback(
        (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
            onChange(event.currentTarget.value);
            setSelectedValue(event.currentTarget.value);
        },
        []
    );

    useEffect(() => {
        if (isEmpty(selectedValue) && defaultValue) {
            setSelectedValue(options.find((option) => defaultValue === option.value)?.value || '');
        }
    }, [defaultValue, options, selectedValue]);

    return (
        <>
            {title && hasBorder ? (
                <FormElementLabel hasError={hasError} isDisabled={isDisabled}>
                    {title}
                </FormElementLabel>
            ) : (
                <Label hasError={hasError} isDisabled={isDisabled} isSmall>
                    {title}
                </Label>
            )}
            <StyledSelectionControlGroup
                className={className}
                direction={direction}
                hasBorder={hasBorder}
                hasError={hasError}
                isDisabled={isDisabled}
                isHorizontal={isHorizontal}
            >
                {options.map((option: OptionObject, index: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <SelectionControlWrapper isFirstElement={index === 0} isHorizontal={isHorizontal} key={index}>
                        <SelectionControl
                            direction={direction}
                            hasError={hasError}
                            isChecked={selectedValue === option.value}
                            isDisabled={isDisabled}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            name={groupName}
                            onChange={onChangeCallback}
                            type={SelectionControlType.RADIO}
                            {...option}
                        />
                    </SelectionControlWrapper>
                ))}
            </StyledSelectionControlGroup>
        </>
    );
};

export default SelectionControlGroup;
