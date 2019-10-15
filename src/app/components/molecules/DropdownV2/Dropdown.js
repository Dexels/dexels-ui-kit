import { IconWrapper, Select, StyledDropdown } from './Dropdown.sc';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const Dropdown = ({
    children,
    isDisabled,
    isRequired,
    name,
    onChange,
    placeholder,
    value,
}) => (
    <StyledDropdown>
        <Select
            isDisabled={isDisabled}
            isPlaceholderSelected={placeholder === value}
            isRequired={isRequired}
            name={name}
            onChange={onChange}
            value={value}
        >
            {placeholder && (
                <option disabled hidden value={placeholder}>
                    {placeholder}
                </option>
            )}
            {children}
        </Select>
        <IconWrapper isDisabled={isDisabled}>
            <Icon type={Icon.types.DROP_DOWN} />
        </IconWrapper>
    </StyledDropdown>
);

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
    isDisabled: false,
    isRequired: true,
    placeholder: '',
};

export default Dropdown;
