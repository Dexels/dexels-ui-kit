import { Dropdown, DropdownVariant } from '../../molecules/Dropdown';
import { List, ListItem, ListWrapper, StaticItem, StyledDropdownMultiSelect } from './DropdownMultiSelect.sc';
import React, { FunctionComponent, ReactElement, ReactNode, useCallback, useState } from 'react';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import { Elevation } from '../../../types';
import { useClickOutsideComponent } from '../../../utils/functions/clickHandlers';

export interface DropdownMultiSelectProps {
    buttonCancelText?: ReactNode;
    buttonConfirmText: ReactNode;
    children?: never;
    className?: string;
    elevation?: Elevation;
    errorMessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isOpen: boolean;
    isValid?: boolean;
    label?: ReactNode;
    maxHeight?: string;
    name: string;
    onCancel: () => void;
    onClick?: () => void;
    onConfirm: () => void;
    optionAll?: ReactNode;
    options: ReactElement[];
    placeholder?: string;
    resetOnOutsideClick?: boolean;
    value: string;
    variant?: DropdownVariant;
}

export const DropdownMultiSelect: FunctionComponent<DropdownMultiSelectProps> = ({
    buttonCancelText,
    buttonConfirmText,
    className,
    elevation = Elevation.LEVEL_6,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isOpen,
    isValid = false,
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
    variant = DropdownVariant.COMPACT,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isSelectOpen, setIsSelectOpen] = useState(isOpen);

    const handleClickOutsideComponent = (): void => {
        setIsSelectOpen(false);
        onConfirm();
    };

    const { componentRef } = useClickOutsideComponent(() => handleClickOutsideComponent());

    const onCancelCallback = useCallback(() => {
        setIsSelectOpen(false);
        onCancel();
    }, [onCancel]);

    const onClickCallback = useCallback(() => {
        setIsSelectOpen(true);

        if (onClick) {
            onClick();
        }
    }, [onClick]);

    const onConfirmCallback = useCallback(() => {
        setIsSelectOpen(false);
        onConfirm();
    }, [onConfirm]);

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
                value={value || placeholder || ''}
                variant={variant}
            >
                {value || placeholder}
            </Dropdown>
            {isSelectOpen && (
                <ListWrapper elevation={elevation} ref={componentRef}>
                    {optionAll && <StaticItem elevation={Elevation.LEVEL_1}>{optionAll}</StaticItem>}
                    <List maxHeight={maxHeight}>
                        {options.map((item) => (
                            <ListItem key={item.key as string}>{item}</ListItem>
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

export default DropdownMultiSelect;
