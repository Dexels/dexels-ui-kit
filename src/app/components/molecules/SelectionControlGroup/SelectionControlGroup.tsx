import { Alignment, Direction, OptionObject, SelectionControlGroupVariant } from '../../../types';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import {
    SelectedControlGroupWrapper,
    SelectionControlWrapper,
    StyledSelectionControlGroup,
    StyledSelectionControls,
} from './SelectionControlGroup.sc';
import { FormElementLabel } from '../FormElementLabel/FormElementLabel';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import Label from '../../atoms/Label/Label';
import SelectionControl from '../SelectionControl/SelectionControl';
import { SelectionControlType } from '../SelectionControl/types';

export interface SelectionControlGroupProps {
    alignment?: Alignment;
    children?: never;
    className?: string;
    defaultValue?: string;
    direction?: Direction;
    groupName: string;
    hasError?: boolean;
    isDisabled?: boolean;
    isHorizontal?: boolean;
    isRequired?: boolean;
    onChange: (selectedValue: string) => void;
    options: OptionObject[];
    title?: ReactNode;
    variant?: SelectionControlGroupVariant;
}

export const SelectionControlGroup: FunctionComponent<SelectionControlGroupProps> = ({
    alignment = Alignment.LEFT,
    className,
    defaultValue,
    direction = Direction.LTR,
    groupName,
    hasError = false,
    isDisabled = false,
    isHorizontal = false,
    isRequired = false,
    onChange,
    options,
    title,
    variant = SelectionControlGroupVariant.COMPACT,
}) => {
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const [isValidInputData, setIsValidInputData] = useState(false);
    const optionCount = options.length || 0;

    const onChangeCallback = useCallback(
        (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
            onChange(event.currentTarget.value);
            setSelectedValue(event.currentTarget.value);
        },
        []
    );

    // When selectedValue changes validate it
    useEffect(() => {
        setIsValidInputData(!(isRequired && isEmpty(selectedValue)));
    }, [isRequired, selectedValue]);

    useEffect(() => {
        if (isEmpty(selectedValue) && defaultValue) {
            setSelectedValue(options.find((option) => defaultValue === option.value)?.value || '');
        }
    }, [defaultValue, isRequired, options, selectedValue]);

    return (
        <SelectedControlGroupWrapper>
            {title && variant !== SelectionControlGroupVariant.COMPACT ? (
                <FormElementLabel hasError={hasError} isDisabled={isDisabled}>
                    {title}
                </FormElementLabel>
            ) : (
                <Label hasError={hasError} isDisabled={isDisabled} isSmall>
                    {title}
                </Label>
            )}
            <StyledSelectionControlGroup
                alignment={alignment}
                className={className}
                hasError={hasError || !isValidInputData}
                id="StyledSelectionControlGroup"
                isDisabled={isDisabled}
                isHorizontal={isHorizontal}
                variant={variant}
            >
                <StyledSelectionControls
                    alignment={alignment}
                    direction={direction}
                    id="StyledSelectionControls"
                    isHorizontal={isHorizontal}
                >
                    {options.map((option: OptionObject, index: number) => (
                        <SelectionControlWrapper
                            id="SelectionControlWrapper"
                            isHorizontal={isHorizontal}
                            isLastElement={index === optionCount - 1}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                        >
                            <SelectionControl
                                direction={direction}
                                hasError={hasError || !isValidInputData}
                                isChecked={selectedValue === option.value}
                                isDisabled={isDisabled || option.isDisabled}
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                label={option.label}
                                name={groupName}
                                onChange={onChangeCallback}
                                type={SelectionControlType.RADIO}
                                value={option.value}
                            />
                        </SelectionControlWrapper>
                    ))}
                </StyledSelectionControls>
            </StyledSelectionControlGroup>
        </SelectedControlGroupWrapper>
    );
};

export default SelectionControlGroup;
