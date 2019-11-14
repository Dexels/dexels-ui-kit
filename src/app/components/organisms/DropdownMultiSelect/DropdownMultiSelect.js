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
    isValid,
    label,
    maxHeight,
    name,
    onCancel,
    onClick,
    onConfirm,
    optionAll,
    options,
    placeholder,
    variant,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <StyledDropdownMultiSelect
                hasError={hasError}
                isDisabled={isDisabled}
                isValid={isValid}
                variant={variant}
            >
                {label && (
                    <FormElementLabel
                        hasError={hasError}
                        isActive
                        isDisabled={isDisabled}
                        isValid={isValid}
                    >
                        {label}
                    </FormElementLabel>
                )}
                <Select
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isHovered={isHovered}
                    isPlaceholderSelected={Boolean(placeholder)}
                    isValid={isValid}
                    name={name}
                    onClick={onClick}
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
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
    isValid: PropTypes.bool,
    label: PropTypes.string,
    maxHeight: PropTypes.string,
    name: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    optionAll: PropTypes.node.isRequired,
    options: PropTypes.node.isRequired,
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(Object.values(DropdownMultiSelect.variants)),
};

DropdownMultiSelect.defaultProps = {
    buttonCancelText: 'Cancel',
    elevation: DropdownMultiSelect.elevations.LEVEL_6,
    errorMessage: '',
    hasError: false,
    isDisabled: false,
    isValid: false,
    label: '',
    maxHeight: '',
    onClick: null,
    placeholder: '',
    variant: DropdownMultiSelect.variants.COMPACT,
};

export default DropdownMultiSelect;
