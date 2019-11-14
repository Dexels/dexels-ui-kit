import {
    DROPDOWN_MULTISELECT_ELEVATIONS,
    DROPDOWN_MULTISELECT_VARIANTS,
    ENUM_OPTION_ALL,
} from './DropdownMultiSelect.consts';
import {
    ErrorMessageWrapper,
    IconWrapper,
    ListItem,
    ListItems,
    ListWrapper,
    Select,
    StaticItem,
    StyledDropdownMultiSelect,
} from './DropdownMultiSelect.sc';
import React, { useState } from 'react';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../../molecules/FormElementLabel/FormElementLabel';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';

const DropdownMultiSelect = ({
    buttonCancelText,
    buttonConfirmText,
    elevation,
    errorMessage,
    hasError,
    isDisabled,
    isOpen,
    isRequired,
    isValid,
    label,
    maxHeight,
    name,
    onCancel,
    onChange,
    onClick,
    onConfirm,
    optionAll,
    options,
    placeholder,
    value,
    variant,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

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
                    onChange={onChange}
                    onClick={onClick}
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
                </Select>
                {isOpen && (
                    <ListWrapper elevation={elevation}>
                        <StaticItem elevation={DropdownMultiSelect.elevations.LEVEL_1}>
                            {optionAll}
                        </StaticItem>
                        <ListItems maxHeight={maxHeight}>
                            {options.map((item) => (
                                <ListItem key={item.key}>
                                    {item}
                                </ListItem>
                            ))}
                        </ListItems>
                        <DialogFooter
                            buttonCancelText={buttonCancelText}
                            buttonConfirmText={buttonConfirmText}
                            onCancel={onCancel}
                            onConfirm={onConfirm}
                        />
                    </ListWrapper>
                )}
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
DropdownMultiSelect.enumOptionAll = ENUM_OPTION_ALL;

DropdownMultiSelect.propTypes = {
    buttonCancelText: PropTypes.string,
    buttonConfirmText: PropTypes.string.isRequired,
    elevation: PropTypes.oneOf(Object.values(DropdownMultiSelect.elevations)),
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    maxHeight: PropTypes.string,
    name: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    optionAll: PropTypes.node.isRequired,
    options: PropTypes.node.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    variant: PropTypes.oneOf(Object.values(DropdownMultiSelect.variants)),
};

DropdownMultiSelect.defaultProps = {
    buttonCancelText: 'Cancel',
    elevation: DropdownMultiSelect.elevations.LEVEL_6,
    errorMessage: '',
    hasError: false,
    isDisabled: false,
    isRequired: false,
    isValid: false,
    label: '',
    maxHeight: '',
    onClick: null,
    placeholder: '',
    value: '',
    variant: DropdownMultiSelect.variants.COMPACT,
};

export default DropdownMultiSelect;
