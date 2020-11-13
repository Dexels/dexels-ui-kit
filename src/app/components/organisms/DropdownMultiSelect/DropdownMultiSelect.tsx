import {
    areAllOptionsSelected,
    getSelectedElements,
    getSelectedText,
    isAnyOptionSelected,
    setAllElementsDeselected,
    setAllElementsSelected,
} from '../../../utils/functions/arrayObjectFunctions';
import { ButtonSize, ButtonVariant, Elevation, IconType } from '../../../types';
import DialogFooter, { DialogFooterProps } from '../../molecules/DialogFooter/DialogFooter';
import {
    DialogFooterWrapper,
    DropdownWrapper,
    ListWrapper,
    StaticItem,
    StyledDropdownMultiSelect,
} from './DropdownMultiSelect.sc';
import { Dropdown, DropdownVariant } from '../../molecules/Dropdown';
import { DropdownMultiSelectOption, DropdownOptionAllTexts } from './types';
import React, { MouseEventHandler, ReactNode, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import { cloneArray } from '../../../utils/functions/arrayFunctions';
import List from '../../molecules/List/List';
import ListItem from '../../atoms/ListItem/ListItem';
import SelectionControl from '../../molecules/SelectionControl/SelectionControl';
import { useClickOutsideComponent } from '../../../utils/functions/clickHandlers';

export interface DropdownMultiSelectProps<T extends DropdownMultiSelectOption> {
    allSelectedLabel: ReactNode;
    buttonCancelText?: ReactNode;
    buttonConfirmText: ReactNode;
    children?: never;
    className?: string;
    containerMaxHeight?: number;
    containerTopOffset?: number;
    deselectAllLabel: ReactNode;
    elevation?: Elevation;
    errorMessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    maxHeight?: number;
    minHeight?: number;
    name: string;
    onCancel?: MouseEventHandler;
    onChange?: (options: T[]) => void;
    onClick?: MouseEventHandler;
    onConfirm: (event: SyntheticEvent, options: T[]) => void;
    options: T[];
    placeholder?: string;
    resetOnOutsideClick?: boolean;
    selectAllLabel: ReactNode;
    value?: string;
    variant?: DropdownVariant;
}

export const DropdownMultiSelect = <T extends DropdownMultiSelectOption>({
    allSelectedLabel,
    buttonCancelText,
    buttonConfirmText,
    className,
    containerMaxHeight,
    containerTopOffset = 0,
    deselectAllLabel,
    elevation = Elevation.LEVEL_6,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isValid = false,
    label,
    maxHeight,
    minHeight,
    name,
    onCancel,
    onClick,
    onConfirm,
    onChange,
    options,
    placeholder,
    resetOnOutsideClick = true,
    selectAllLabel,
    variant,
}: DropdownMultiSelectProps<T>): JSX.Element => {
    const [dialogFooterHeight, setDialogFooterHeight] = useState(0);
    const dialogFooterRef = useRef<HTMLDivElement>(null);
    const dropdownMultiSelectRef = useRef<HTMLDivElement>(null);
    const footerButtons: DialogFooterProps['buttons'] = [];
    const [inputHeight, setInputHeight] = useState(0);
    const inputRef = useRef<HTMLDivElement>(null);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isAvailableList, setIsAvailableList] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSomeSelected, setIsSomeSelected] = useState(false);
    const [listMaxHeight, setListMaxHeight] = useState<number>();
    const [originalOptions, setOriginalOptions] = useState(cloneArray(options));
    const resetValuesOnOutsideClick = !onCancel && !buttonCancelText ? false : resetOnOutsideClick;
    const [selectionControlValue, setSelectionControlvalue] = useState(DropdownOptionAllTexts.OFF);
    const [selectedOptionsText, setSelectedOptionsText] = useState('');
    const [staticItemHeight, setStaticItemHeight] = useState(0);
    const staticItemRef = useRef<HTMLDivElement>(null);
    const [updatedOptions, setUpdatedOptions] = useState(cloneArray(options));
    const [isTopDropdown, setIsTopDropdown] = useState(false);

    const handleClickOutsideComponent = (event: SyntheticEvent): void => {
        setIsOpen(false);

        if (resetValuesOnOutsideClick) {
            setUpdatedOptions(originalOptions);
        } else {
            onConfirm(event, updatedOptions);
        }
    };

    const { componentRef } = useClickOutsideComponent((event: MouseEvent) =>
        handleClickOutsideComponent((event as unknown) as SyntheticEvent)
    );

    useEffect(() => {
        setInputHeight(inputRef.current ? Math.round(inputRef.current.offsetHeight) : 0);
    }, [inputRef.current]);

    useEffect(() => {
        if (isOpen) {
            setDialogFooterHeight(dialogFooterRef.current ? Math.round(dialogFooterRef.current.offsetHeight) : 0);
            setStaticItemHeight(staticItemRef.current ? Math.round(staticItemRef.current.offsetHeight) : 0);
        }
    }, [isOpen]);

    useEffect(() => {
        setIsAvailableList(dialogFooterHeight + staticItemHeight > 0);
    }, [dialogFooterHeight, staticItemHeight]);

    useEffect(() => {
        if (dropdownMultiSelectRef.current && dialogFooterHeight + staticItemHeight > 0) {
            const { top } = dropdownMultiSelectRef.current.getBoundingClientRect();

            const containerHeight = containerMaxHeight || window.innerHeight;

            const availableSpaceForDropdown = Math.round(containerHeight - top);
            const dropdownMaxHeight = maxHeight ? maxHeight + top : availableSpaceForDropdown;
            let newListMaxHeight = dropdownMaxHeight - inputHeight - staticItemHeight - dialogFooterHeight - 15;

            if (dropdownMaxHeight >= availableSpaceForDropdown) {
                newListMaxHeight = availableSpaceForDropdown - inputHeight - staticItemHeight - dialogFooterHeight - 15;

                if (newListMaxHeight < 0) {
                    // calculating the maxHeight of the options list top open above the drop down
                    newListMaxHeight =
                        top - containerTopOffset - inputHeight - staticItemHeight - dialogFooterHeight - 15;

                    setIsTopDropdown(true);
                }
            }

            setListMaxHeight(newListMaxHeight);
        }
    }, [
        dialogFooterHeight,
        dropdownMultiSelectRef,
        inputHeight,
        staticItemHeight,
        window.innerHeight,
        containerMaxHeight,
        containerTopOffset,
    ]);

    useEffect(() => {
        setIsAllSelected(areAllOptionsSelected(updatedOptions, 'isSelected'));
        setIsSomeSelected(isAnyOptionSelected(updatedOptions, 'isSelected'));
    }, [updatedOptions]);

    useEffect(() => {
        if (!isAllSelected) {
            const selectedOptions = getSelectedElements(updatedOptions, 'isSelected');
            setSelectedOptionsText(selectedOptions ? getSelectedText(selectedOptions, 'label') : '');
        }
    }, [isAllSelected, updatedOptions]);

    useEffect(() => {
        if (isAllSelected) {
            setSelectionControlvalue(DropdownOptionAllTexts.ON);
        } else if (isSomeSelected) {
            setSelectionControlvalue(DropdownOptionAllTexts.INDETERMINATE);
        } else {
            setSelectionControlvalue(DropdownOptionAllTexts.OFF);
        }
    }, [isAllSelected, isSomeSelected]);

    const onCancelCallback = useCallback(
        (event: React.MouseEvent<Element, MouseEvent>) => {
            setIsOpen(false);

            setUpdatedOptions(originalOptions);

            if (onCancel) {
                onCancel(event);
            }
        },
        [onCancel]
    );

    const onClickCallback = useCallback(
        (event: React.MouseEvent<Element, MouseEvent>) => {
            setIsOpen(!isOpen);

            if (onClick) {
                onClick(event);
            }
        },
        [isOpen, onClick]
    );

    const onConfirmCallback = (event: SyntheticEvent) => {
        setIsOpen(false);
        onConfirm(event, updatedOptions);
        // Make sure to update the original values for onCancel
        setOriginalOptions(updatedOptions);
    };

    const onMouseEnterCallback = useCallback(() => {
        setIsHovered(true);
    }, []);

    const onMouseLeaveCallback = useCallback(() => {
        setIsHovered(false);
    }, []);

    const onChangeAllCallback = useCallback(() => {
        const newUpdatedOptions = isSomeSelected
            ? setAllElementsDeselected(updatedOptions, 'isSelected')
            : setAllElementsSelected(updatedOptions, 'isSelected');

        setUpdatedOptions((newUpdatedOptions as unknown) as T[]);
    }, [isSomeSelected]);

    const onChangeOptionCallback = useCallback(
        (selectedOption: T) => {
            const newUpdatedOptions = updatedOptions.map((option) => {
                if (option.value === selectedOption.value) {
                    return {
                        ...option,
                        isSelected: !option.isSelected,
                    };
                }

                return option;
            });

            setUpdatedOptions(newUpdatedOptions);

            if (onChange) {
                onChange(newUpdatedOptions);
            }
        },
        [onConfirm, onChange, updatedOptions]
    );

    // Set the dialog footer buttons
    if (onCancel && buttonCancelText) {
        footerButtons.push({
            children: buttonCancelText,
            iconType: IconType.CROSS,
            onClick: onCancelCallback,
            size: ButtonSize.SMALL,
            variant: ButtonVariant.TEXT_ONLY,
        });
    }

    footerButtons.push({
        children: buttonConfirmText,
        iconType: IconType.CHECK,
        onClick: onConfirmCallback,
        size: ButtonSize.SMALL,
    });

    return (
        <StyledDropdownMultiSelect className={className} ref={dropdownMultiSelectRef}>
            <DropdownWrapper ref={inputRef}>
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
                    value={selectedOptionsText}
                    variant={variant}
                >
                    {isAllSelected ? allSelectedLabel : selectedOptionsText || placeholder}
                </Dropdown>
            </DropdownWrapper>

            {isOpen && (
                <ListWrapper elevation={elevation} isTopDropdown={isTopDropdown} ref={componentRef} variant={variant}>
                    <StaticItem elevation={Elevation.LEVEL_1} ref={staticItemRef}>
                        <SelectionControl
                            isChecked={isAllSelected}
                            isIndeterminate={isSomeSelected}
                            label={isAllSelected || isSomeSelected ? deselectAllLabel : selectAllLabel}
                            name="DROPDOWN_MULTISELECT_OPTION_ALL"
                            onChange={onChangeAllCallback}
                            value={selectionControlValue}
                        />
                    </StaticItem>
                    {isAvailableList && (
                        <List maxHeight={listMaxHeight} minHeight={minHeight}>
                            {updatedOptions.map((item) => (
                                <ListItem key={item.value}>
                                    <SelectionControl
                                        isChecked={item.isSelected}
                                        key={item.value}
                                        label={item.label}
                                        name={`DROPDOWN_MULTISELECT_OPTION_${item.value}`}
                                        onChange={(): void => onChangeOptionCallback(item)}
                                        value={item.label}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    )}
                    <DialogFooterWrapper ref={dialogFooterRef}>
                        <DialogFooter buttons={footerButtons} />
                    </DialogFooterWrapper>
                </ListWrapper>
            )}
        </StyledDropdownMultiSelect>
    );
};

export default DropdownMultiSelect;
