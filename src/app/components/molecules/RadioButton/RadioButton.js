import {
    ErrorMessageWrapper,
    LabelWrapper,
    RadioButtonWrapper,
    StyledRadioButton,
} from './RadioButton.sc';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Label from '../../atoms/Label/Label';
import PropTypes from 'prop-types';
import { RADIO_BUTTON_DIRECTIONS } from './RadioButton.consts';
import React from 'react';

const RadioButton = ({
    direction,
    errorMessage,
    hasError,
    isChecked,
    isDisabled,
    isValid,
    label,
    name,
    onChange,
    value,
}) => (
    <>
        <StyledRadioButton>
            <RadioButtonWrapper
                direction={direction}
                hasError={hasError}
                isChecked={isChecked}
                isDisabled={isDisabled}
                isValid={isValid}
            >
                <input
                    checked={isChecked}
                    name={name}
                    onChange={onChange}
                    type="radio"
                    value={value}
                />
            </RadioButtonWrapper>
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
        </StyledRadioButton>
        {errorMessage && hasError && (
            <ErrorMessageWrapper>
                <ErrorMessage>
                    {errorMessage}
                </ErrorMessage>
            </ErrorMessageWrapper>
        )}
    </>
);

RadioButton.directions = RADIO_BUTTON_DIRECTIONS;

RadioButton.propTypes = {
    direction: PropTypes.oneOf(Object.values(RadioButton.directions)),
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
    direction: RadioButton.directions.LTR,
    errorMessage: '',
    hasError: false,
    isChecked: false,
    isDisabled: false,
    isValid: false,
};

export default RadioButton;
