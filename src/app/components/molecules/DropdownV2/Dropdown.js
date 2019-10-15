import { IconWrapper, Select, StyledDropdown } from './Dropdown.sc';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const Dropdown = ({
    children,
    isDisabled,
    isPlaceholderSelected,
    isRequired,
    name,
    onChange,
    value,
}) => (
    <StyledDropdown>
        <Select
            isDisabled={isDisabled}
            isPlaceholderSelected={isPlaceholderSelected}
            isRequired={isRequired}
            name={name}
            onChange={onChange}
            value={value}
        >
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
    isPlaceholderSelected: PropTypes.bool,
    isRequired: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
    isDisabled: false,
    isPlaceholderSelected: false,
    isRequired: true,
};

export default Dropdown;
