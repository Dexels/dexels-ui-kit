import {
    ErrorMessageWrapper,
    IconWrapper,
    InputWrapper,
    LabelWrapper,
    StyledSelectionControl,
} from './SelectionControl.sc';
import {
    SELECTION_CONTROL_DIRECTIONS,
    SELECTION_CONTROL_EASINGS,
    SELECTION_CONTROL_TYPES,
} from './SelectionControl.consts';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Icon from '../../atoms/Icon/Icon';
import Label from '../../atoms/Label/Label';
import PropTypes from 'prop-types';
import React from 'react';

const SelectionControl = ({
    direction,
    errorMessage,
    hasError,
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
}) => (
    <>
        <StyledSelectionControl>
            <InputWrapper
                direction={direction}
                hasError={hasError}
                isChecked={isChecked}
                isDisabled={isDisabled}
                isIndeterminate={isIndeterminate}
                isValid={isValid}
                transitionDuration={transitionDuration}
                transitionEasing={transitionEasing}
                type={type}
            >
                <input
                    checked={isChecked}
                    disabled={isDisabled}
                    name={name}
                    onChange={onChange}
                    type={type}
                    value={value}
                />
                {(isChecked || isIndeterminate) && type === SelectionControl.types.CHECKBOX && (
                    <IconWrapper>
                        <Icon type={isChecked ? Icon.types.CHECK : Icon.types.MINUS} />
                    </IconWrapper>
                )}
            </InputWrapper>
            <LabelWrapper direction={direction} isDisabled={isDisabled} onClick={onChange}>
                <Label
                    hasError={hasError}
                    isCheckboxLabel
                    isDisabled={isDisabled}
                    isValid={isValid}
                >
                    {label}
                </Label>
            </LabelWrapper>
        </StyledSelectionControl>
        {errorMessage && hasError && (
            <ErrorMessageWrapper>
                <ErrorMessage>
                    {errorMessage}
                </ErrorMessage>
            </ErrorMessageWrapper>
        )}
    </>
);

SelectionControl.directions = SELECTION_CONTROL_DIRECTIONS;
SelectionControl.transitionEasings = SELECTION_CONTROL_EASINGS;
SelectionControl.types = SELECTION_CONTROL_TYPES;

SelectionControl.propTypes = {
    direction: PropTypes.oneOf(Object.values(SelectionControl.directions)),
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(SelectionControl.transitionEasings)),
    type: PropTypes.oneOf(Object.values(SelectionControl.types)),
    value: PropTypes.string.isRequired,
};

SelectionControl.defaultProps = {
    direction: SelectionControl.directions.LTR,
    errorMessage: '',
    hasError: false,
    isChecked: false,
    isDisabled: false,
    isIndeterminate: false,
    isValid: false,
    transitionDuration: 300,
    transitionEasing: SelectionControl.transitionEasings.EASE,
    type: SelectionControl.types.CHECKBOX,
};

export default SelectionControl;
