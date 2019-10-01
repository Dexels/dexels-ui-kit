import {
    CheckboxWrapper,
    ErrorMessageWrapper,
    IconWrapper,
    LabelWrapper,
    StyledCheckbox,
} from './Checkbox.sc';
import React, { useState } from 'react';
import { CHECKBOX_DIRECTIONS } from './Checkbox.consts';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Icon from '../../atoms/Icon/Icon';
import Label from '../../atoms/Label/Label';
import PropTypes from 'prop-types';

const Checkbox = ({
    direction,
    errorMessage,
    hasError,
    isCheckedDefault,
    isDisabled,
    isValid,
    label,
    name,
}) => {
    const [isChecked, setIsChecked] = useState(isCheckedDefault);

    return (
        <>
            <StyledCheckbox>
                <CheckboxWrapper
                    direction={direction}
                    hasError={hasError}
                    isChecked={isChecked}
                    isDisabled={isDisabled}
                    isValid={isValid}
                >
                    <input
                        checked={isChecked}
                        name={name}
                        onChange={() => {
                            setIsChecked(!isChecked);
                        }}
                        type="checkbox"
                    />
                    <IconWrapper>
                        <Icon type={Icon.types.CHECK} />
                    </IconWrapper>
                </CheckboxWrapper>
                <LabelWrapper
                    direction={direction}
                    isDisabled={isDisabled}
                    onClick={() => {
                        setIsChecked(!isChecked);
                    }}
                >
                    <Label
                        hasError={hasError}
                        isCheckboxLabel
                        isDisabled={isDisabled}
                        isValid={isValid}
                    >
                        {label}
                    </Label>
                </LabelWrapper>
            </StyledCheckbox>
            {errorMessage && hasError && (
                <ErrorMessageWrapper>
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                </ErrorMessageWrapper>
            )}
        </>
    );
};

Checkbox.directions = CHECKBOX_DIRECTIONS;

Checkbox.propTypes = {
    direction: PropTypes.oneOf(Object.values(Checkbox.directions)),
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isCheckedDefault: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
    direction: Checkbox.directions.LTR,
    errorMessage: '',
    hasError: false,
    isCheckedDefault: false,
    isDisabled: false,
    isValid: false,
};

export default Checkbox;
