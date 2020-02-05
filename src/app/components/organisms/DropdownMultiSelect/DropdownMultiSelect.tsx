import { Dropdown, DropdownVariant } from '../../molecules/Dropdown';
import {
    List,
    ListItem,
    ListWrapper,
    StaticItem,
    StyledDropdownMultiSelect,
} from './DropdownMultiSelect.sc';
import React, { useCallback, useState } from 'react';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import { Elevation } from '../../../types';
import { useClickOutsideComponent } from '../../../utils/functions/clickHandlers';

export interface DropdownMultiSelectProps {
    buttonCancelText?: React.ReactNode;
    buttonConfirmText: React.ReactNode;
    className?: string;
    elevation?: Elevation;
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
    variant?: DropdownVariant;
}

export const DropdownMultiSelect: React.FunctionComponent<DropdownMultiSelectProps> = ({
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
    onCancel,
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

    const onCancelCallback = useCallback(() => {
        setIsSelectOpen(false);
        onCancel();
    }, []);

    const onClickCallback = useCallback(() => {
        setIsSelectOpen(true);
        onClick();
    }, []);

    const onConfirmCallback = useCallback(() => {
        setIsSelectOpen(false);
        onConfirm();
    }, []);

    const onMouseEnterCallback = useCallback(() => {
        setIsHovered(true);
    }, [isHovered]);

    const onMouseLeaveCallback = useCallback(() => {
        setIsHovered(false);
    }, [isHovered]);

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
                onClick={onClickCallback}
                onMouseEnter={onMouseEnterCallback}
                onMouseLeave={onMouseLeaveCallback}
                placeholder={placeholder}
                value={value || placeholder}
                variant={variant}
            >
                {value || placeholder}
            </Dropdown>
            {isSelectOpen && (
                <ListWrapper elevation={elevation} ref={componentRef}>
                    {optionAll && (
                        <StaticItem elevation={Elevation.LEVEL_1}>
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
                        onCancel={onCancelCallback}
                        onConfirm={onConfirmCallback}
                    />
                </ListWrapper>
            )}
        </StyledDropdownMultiSelect>
    );
};

DropdownMultiSelect.defaultProps = {
    buttonCancelText: null,
    className: '',
    elevation: Elevation.LEVEL_6,
    errorMessage: null,
    hasError: false,
    isDisabled: false,
    isValid: false,
    label: null,
    maxHeight: '',
    onCancel: null,
    onClick: null,
    optionAll: null,
    placeholder: null,
    variant: DropdownVariant.COMPACT,
};

export default DropdownMultiSelect;
