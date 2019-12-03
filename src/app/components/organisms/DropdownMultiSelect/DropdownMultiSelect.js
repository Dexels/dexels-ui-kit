import {
    DROPDOWN_MULTISELECT_ELEVATIONS,
    DROPDOWN_MULTISELECT_VARIANTS,
    ENUM_OPTION_ALL,
} from './DropdownMultiSelect.consts';
import {
    List,
    ListItem,
    ListWrapper,
    StaticItem,
    StyledDropdownMultiSelect,
} from './DropdownMultiSelect.sc';
import React, { useState } from 'react';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import Dropdown from '../../molecules/Dropdown/Dropdown';
import PropTypes from 'prop-types';
import { useClickOutsideComponent } from '../../../utils/functions/clickHandlers';

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
    onClick,
    onConfirm,
    optionAll,
    options,
    placeholder,
    value,
    variant,
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(isOpen);

    const handleClickOutsideComponent = () => {
        setIsSelectOpen(false);
        onConfirm();
    };

    const { componentRef } = useClickOutsideComponent(() => handleClickOutsideComponent());

    return (
        <StyledDropdownMultiSelect>
            <Dropdown
                as="div"
                errorMessage={errorMessage}
                hasError={hasError}
                isDisabled={isDisabled}
                isOpen={isOpen}
                isValid={isValid}
                label={label}
                name={name}
                onClick={() => {
                    setIsSelectOpen(true);
                    onClick();
                }}
                placeholder={placeholder}
                value={value || placeholder}
                variant={variant}
            >
                {value || placeholder}
            </Dropdown>
            {isSelectOpen && (
                <ListWrapper elevation={elevation} ref={componentRef}>
                    {optionAll && (
                        <StaticItem elevation={DropdownMultiSelect.elevations.LEVEL_1}>
                            {optionAll}
                        </StaticItem>
                    )}
                    <List maxHeight={maxHeight}>
                        {options.map((item) => (
                            <ListItem key={item.key}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                    <DialogFooter
                        buttonCancelText={buttonCancelText}
                        buttonConfirmText={buttonConfirmText}
                        onConfirm={() => {
                            setIsSelectOpen(false);
                            onConfirm();
                        }}
                    />
                </ListWrapper>
            )}
        </StyledDropdownMultiSelect>
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
    onClick: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    optionAll: PropTypes.node,
    options: PropTypes.node.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
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
    optionAll: null,
    placeholder: '',
    variant: DropdownMultiSelect.variants.COMPACT,
};

export default DropdownMultiSelect;
