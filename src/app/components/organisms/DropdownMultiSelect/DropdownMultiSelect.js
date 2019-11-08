import { DROPDOWN_MULTISELECT_ELEVATIONS, DROPDOWN_MULTISELECT_VARIANTS } from './DropdownMultiSelect.consts';
import {
    ErrorMessageWrapper,
    IconWrapper,
    ListItem,
    ListItems,
    Select,
    StyledDropdownMultiSelect,
} from './DropdownMultiSelect.sc';
import React, { useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../../molecules/FormElementLabel/FormElementLabel';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import SelectionControl from '../../molecules/SelectionControl/SelectionControl';

const DropdownMultiSelect = ({
    elevation,
    errorMessage,
    hasError,
    isDisabled,
    isRequired,
    isValid,
    label,
    name,
    onChange,
    options,
    placeholder,
    textOptionDeselectAll,
    textOptionSelectAll,
    value,
    variant,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <StyledDropdownMultiSelect
                hasError={hasError}
                isDisabled={isDisabled}
                isFocused={isFocused}
                isValid={isValid}
                variant={variant}
            >
                {label && (
                    <FormElementLabel
                        hasError={hasError}
                        isActive
                        isDisabled={isDisabled}
                        isFocused={isFocused}
                        isValid={isValid}
                    >
                        {label}
                    </FormElementLabel>
                )}
                <Select
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isPlaceholderSelected={placeholder === value}
                    isValid={isValid}
                    name={name}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    onChange={onChange}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    onFocus={() => {
                        setIsFocused(true);
                    }}
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                    required={isRequired}
                    value={value}
                    variant={variant}
                >
                    {placeholder && placeholder}
                    {isOpen && (
                        <ListItems elevation={elevation}>
                            <ListItem key={'DROPDOWN_MULTISELECT_OPTION_ALL'}>
                                <SelectionControl
                                    isChecked
                                    label={textOptionSelectAll}
                                    name={'DROPDOWN_MULTISELECT_OPTION_ALL'}
                                    onChange={() => {}}
                                    value={'textOptionSelectAll'}
                                />
                            </ListItem>
                            {options.map((item) => (
                                <ListItem key={item}>
                                    <SelectionControl
                                        isChecked
                                        label={item}
                                        name={'DROPDOWN_MULTISELECT_OPTION'}
                                        onChange={() => {}}
                                        value={item}
                                    />
                                </ListItem>
                            ))}
                        </ListItems>
                    )}
                </Select>
                <IconWrapper
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isValid={isValid}
                    variant={variant}
                >
                    <Icon type={Icon.types.DROPDOWN} />
                </IconWrapper>
            </StyledDropdownMultiSelect>
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

DropdownMultiSelect.elevations = DROPDOWN_MULTISELECT_ELEVATIONS;
DropdownMultiSelect.variants = DROPDOWN_MULTISELECT_VARIANTS;

DropdownMultiSelect.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DropdownMultiSelect.elevations)),
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.oneOfType(PropTypes.array).isRequired,
    placeholder: PropTypes.string,
    textOptionDeselectAll: PropTypes.string,
    textOptionSelectAll: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    variant: PropTypes.oneOf(Object.values(DropdownMultiSelect.variants)),
};

DropdownMultiSelect.defaultProps = {
    elevation: DropdownMultiSelect.elevations.LEVEL_6,
    errorMessage: '',
    hasError: false,
    isDisabled: false,
    isRequired: false,
    isValid: false,
    label: '',
    placeholder: '',
    textOptionDeselectAll: 'Deselect all',
    textOptionSelectAll: 'Select all',
    variant: DropdownMultiSelect.variants.COMPACT,
};

export default DropdownMultiSelect;
