import { Direction, Easing, IconType } from '../../../types';
import {
    ErrorMessageWrapper,
    FakeInput,
    IconWrapper,
    InputWrapper,
    LabelWrapper,
    StyledSelectionControl,
} from './SelectionControl.sc';
import React, { useCallback, useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Icon from '../../atoms/Icon/Icon';
import Label from '../../atoms/Label/Label';
import { SelectionControlType } from './types';

export interface SelectionControlProps {
    className?: string;
    direction?: Direction;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    hasHorizontalCorrection?: boolean;
    hasVerticalCorrection?: boolean;
    isChecked?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    isValid?: boolean;
    label: React.ReactNode;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
    transitionDuration?: number;
    transitionEasing?: Easing;
    type?: SelectionControlType;
    value: string;
    // eslint-disable-next-line typescript-sort-keys/interface, @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const SelectionControl: React.FunctionComponent<SelectionControlProps> = ({
    className,
    direction,
    errorMessage,
    hasError,
    hasHorizontalCorrection,
    hasVerticalCorrection,
    isChecked,
    isDisabled,
    isIndeterminate,
    isValid,
    label,
    name,
    onChange,
    transitionDuration,
    transitionEasing,
    type,
    value,
    ...rest
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onToggleHover = useCallback(() => {
        setIsHovered(!isHovered);
    }, [isHovered]);

    return (
        <>
            <StyledSelectionControl
                className={className}
                hasHorizontalCorrection={hasHorizontalCorrection}
                hasVerticalCorrection={hasVerticalCorrection}
                onMouseEnter={onToggleHover}
                onMouseLeave={onToggleHover}
                type={type}
                {...rest}
            >
                <InputWrapper
                    direction={direction}
                    isDisabled={isDisabled}
                    transitionDuration={transitionDuration}
                    transitionEasing={transitionEasing}
                >
                    <FakeInput
                        hasError={hasError}
                        isChecked={isChecked}
                        isDisabled={isDisabled}
                        isHovered={isHovered}
                        isIndeterminate={isIndeterminate}
                        isValid={isValid}
                        type={type}
                    />
                    {(isChecked || isIndeterminate) && type === SelectionControlType.CHECKBOX && (
                        <IconWrapper hasError={hasError} isDisabled={isDisabled} isValid={isValid}>
                            <Icon type={isChecked ? IconType.CHECKBOXCHECK : IconType.CHECKBOXMINUS1} />
                        </IconWrapper>
                    )}
                    <input
                        checked={isChecked}
                        disabled={isDisabled}
                        name={name}
                        onChange={onChange}
                        type={type}
                        value={value}
                    />
                </InputWrapper>
                <LabelWrapper direction={direction} isDisabled={isDisabled} onClick={onChange}>
                    <Label hasError={hasError} isCheckboxLabel isValid={isValid}>
                        {label}
                    </Label>
                </LabelWrapper>
            </StyledSelectionControl>
            {errorMessage && hasError && !isDisabled && (
                <ErrorMessageWrapper>
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                </ErrorMessageWrapper>
            )}
        </>
    );
};

SelectionControl.defaultProps = {
    className: '',
    direction: Direction.LTR,
    errorMessage: null,
    hasError: false,
    hasHorizontalCorrection: true,
    hasVerticalCorrection: false,
    isChecked: false,
    isDisabled: false,
    isIndeterminate: false,
    isValid: false,
    transitionDuration: 300,
    transitionEasing: Easing.EASE,
    type: SelectionControlType.CHECKBOX,
};

export default SelectionControl;
