import {
    DROPDOWN_MULTISELECT_ELEVATIONS,
    DROPDOWN_MULTISELECT_VARIANTS,
    DROPDOWN_OPTION_ALL_TEXTS,
} from './DropdownMultiSelect.consts';
import {
    DropdownVariants,
    DropdownVariantsMap,
    Elevations,
    ElevationsMap,
} from '../../../types';
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
import { DropdownOptionAllTextsMap } from './types';
import { useClickOutsideComponent } from '../../../utils/functions/clickHandlers';

export interface DropdownMultiSelectProps {
    buttonCancelText?: React.ReactNode;
    buttonConfirmText: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isOpen: boolean;
    isValid?: boolean;
    label?: React.ReactNode;
    maxHeight?: string;
    name: string;
    onCancel: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onConfirm: (...args: any[]) => any;
    optionAll?: React.ReactNode;
    options: React.ReactElement[];
    placeholder?: string;
    resetOnOutsideClick?: boolean;
    value: string;
    variant?: DropdownVariants;
}

interface DropdownMultiSelectComponent extends React.FunctionComponent<DropdownMultiSelectProps> {
    elevations: ElevationsMap;
    optionAllTexts: DropdownOptionAllTextsMap;
    variants: DropdownVariantsMap;
}

export const DropdownMultiSelect: DropdownMultiSelectComponent = ({
    buttonCancelText,
    buttonConfirmText,
    className,
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
    const [isHovered, setIsHovered] = useState(false);
    const [isSelectOpen, setIsSelectOpen] = useState(isOpen);

    const handleClickOutsideComponent = () => {
        setIsSelectOpen(false);
        onConfirm();
    };

    const { componentRef } = useClickOutsideComponent(() => handleClickOutsideComponent());

    return (
        <StyledDropdownMultiSelect className={className}>
            <Dropdown
                as="div"
                errorMessage={errorMessage}
                hasError={hasError}
                isDisabled={isDisabled}
                isHovered={isHovered}
                isOpen={isOpen}
                isValid={isValid}
                label={label}
                name={name}
                onClick={() => {
                    setIsSelectOpen(true);
                    onClick();
                }}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
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
DropdownMultiSelect.optionAllTexts = DROPDOWN_OPTION_ALL_TEXTS;
DropdownMultiSelect.variants = DROPDOWN_MULTISELECT_VARIANTS;

DropdownMultiSelect.defaultProps = {
    buttonCancelText: null,
    className: '',
    elevation: DropdownMultiSelect.elevations.LEVEL_6,
    errorMessage: null,
    hasError: false,
    isDisabled: false,
    isValid: false,
    label: null,
    maxHeight: '',
    onClick: null,
    optionAll: null,
    placeholder: null,
    variant: DropdownMultiSelect.variants.COMPACT,
};

export default DropdownMultiSelect;
