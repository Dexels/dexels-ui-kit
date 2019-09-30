import { IconWrapper, StyledCheckbox } from './Checkbox.sc';
import React, { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';

const Checkbox = ({
    hasError,
    errorMessage,
    isCheckedDefault,
    isDisabled,
    name,
}) => {
    const [isChecked, setIsChecked] = useState(isCheckedDefault);

    return (
        <StyledCheckbox hasError={hasError} isChecked={isChecked} isDisabled={isDisabled}>
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
        </StyledCheckbox>
    );
};

Checkbox.propTypes = {
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isCheckedDefault: PropTypes.bool,
    isDisabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
    errorMessage: '',
    hasError: false,
    isCheckedDefault: false,
    isDisabled: false,
};

export default Checkbox;
