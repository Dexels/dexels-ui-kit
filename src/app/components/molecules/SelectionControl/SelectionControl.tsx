import {
    Directions,
    DirectionsMap,
    Easings,
    EasingsMap,
} from '../../../types';
import {
    ErrorMessageWrapper,
    FakeInput,
    IconWrapper,
    InputWrapper,
    LabelWrapper,
    StyledSelectionControl,
} from './SelectionControl.sc';
import React, { useState } from 'react';
import {
    SELECTION_CONTROL_DIRECTIONS,
    SELECTION_CONTROL_EASINGS,
    SELECTION_CONTROL_TYPES,
} from './SelectionControl.consts';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Icon from '../../atoms/Icon/Icon';
import Label from '../../atoms/Label/Label';
import { SelectionControlTypes } from './types';

export interface SelectionControlProps {
    className?: string;
    direction?: Directions;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    hasHorizontalCorrection?: boolean;
    isChecked?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    isValid?: boolean;
    label: React.ReactNode;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
    transitionDuration?: number;
    transitionEasing?: Easings;
    type?: SelectionControlTypes;
    value: string;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

interface SelectionControlComponent extends React.FunctionComponent<SelectionControlProps> {
    directions: DirectionsMap;
    transitionEasings: EasingsMap;
    types: {
        [Type in SelectionControlProps['type']]: Type;
    };
}

export const SelectionControl: SelectionControlComponent = ({
    className,
    direction,
    errorMessage,
    hasError,
    hasHorizontalCorrection,
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

    return (
        <>
            <StyledSelectionControl
                className={className}
                hasHorizontalCorrection={hasHorizontalCorrection}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
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
                    {(isChecked || isIndeterminate) && type === SelectionControl.types.CHECKBOX && (
                        <IconWrapper hasError={hasError} isDisabled={isDisabled} isValid={isValid}>
                            <Icon type={isChecked ? Icon.types.CHECKBOXCHECK : Icon.types.CHECKBOXMINUS1} />
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

SelectionControl.directions = SELECTION_CONTROL_DIRECTIONS;
SelectionControl.transitionEasings = SELECTION_CONTROL_EASINGS;
SelectionControl.types = SELECTION_CONTROL_TYPES;

SelectionControl.defaultProps = {
    className: '',
    direction: SelectionControl.directions.LTR,
    errorMessage: null,
    hasError: false,
    hasHorizontalCorrection: true,
    isChecked: false,
    isDisabled: false,
    isIndeterminate: false,
    isValid: false,
    transitionDuration: 300,
    transitionEasing: SelectionControl.transitionEasings.EASE as Easings,
    type: SelectionControl.types.CHECKBOX,
};

export default SelectionControl;
