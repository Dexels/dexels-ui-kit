import {
    areAllOptionsSelected,
    getSelectedElements,
    getSelectedText,
    isAnyOptionSelected,
    setAllElementsDeselected,
    setAllElementsSelected,
} from '../../../utils/functions/arrayObjectFunctions';
import { ButtonSize, ButtonVariant, Elevation, IconType } from '../../../types';
import {
    DialogFooterWrapper,
    DropdownWrapper,
    ListWrapper,
    StaticItem,
    StyledDropdownMultiSelect,
} from './DropdownMultiSelect.sc';
import { Dropdown, DropdownVariant } from '../../molecules/Dropdown';
import { DropdownMultiSelectOption, DropdownOptionAllTexts } from './types';
import React, {
    MouseEventHandler,
    ReactNode,
    SyntheticEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { cloneArray } from '../../../utils/functions/arrayFunctions';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
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
    selectAllLabel,
    variant,
}: DropdownMultiSelectProps<T>): JSX.Element => {
    const [dialogFooterHeight, setDialogFooterHeight] = useState(0);
    const dialogFooterRef = useRef<HTMLDivElement>(null);
    const dropdownMultiSelectRef = useRef<HTMLDivElement>(null);
    const [inputHeight, setInputHeight] = useState(0);
    const inputRef = useRef<HTMLDivElement>(null);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isAvailableList, setIsAvailableList] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSomeSelected, setIsSomeSelected] = useState(false);
    const [listMaxHeight, setListMaxHeight] = useState<string>();
    const originalOptions = useMemo(() => cloneArray(options), []);
    const [selectionControlValue, setSelectionControlvalue] = useState(DropdownOptionAllTexts.OFF);
    const [selectedOptionsText, setSelectedOptionsText] = useState('');
    const [staticItemHeight, setStaticItemHeight] = useState(0);
    const staticItemRef = useRef<HTMLDivElement>(null);
    const [updatedOptions, setUpdatedOptions] = useState(cloneArray(options));

    const handleClickOutsideComponent = (event: SyntheticEvent): void => {
        setIsOpen(false);
        onConfirm(event, updatedOptions);
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
            const availableSpaceForDropdown = Math.round(window.innerHeight - top);
            const dropdownMaxHeight = maxHeight ? maxHeight + top : availableSpaceForDropdown;

            if (dropdownMaxHeight >= availableSpaceForDropdown) {
                const newListMaxHeight =
                    availableSpaceForDropdown - inputHeight - staticItemHeight - dialogFooterHeight - 15;

                if (minHeight && newListMaxHeight < minHeight) {
                    // @TODO check if there is room to show the list above the dropdown
                }

                setListMaxHeight(`${newListMaxHeight}px`);
            }
        }
    }, [dialogFooterHeight, dropdownMultiSelectRef, inputHeight, staticItemHeight, window.innerHeight]);

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
                <ListWrapper elevation={elevation} ref={componentRef}>
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
                        <List maxHeight={listMaxHeight}>
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
                        <DialogFooter
                            buttons={[
                                {
                                    children: buttonCancelText,
                                    iconType: IconType.CROSS,
                                    onClick: onCancelCallback,
                                    size: ButtonSize.SMALL,
                                    variant: ButtonVariant.TEXT_ONLY,
                                },
                                {
                                    children: buttonConfirmText,
                                    iconType: IconType.CHECK,
                                    onClick: onConfirmCallback,
                                    size: ButtonSize.SMALL,
                                },
                            ]}
                        />
                    </DialogFooterWrapper>
                </ListWrapper>
            )}
        </StyledDropdownMultiSelect>
    );
};

export default DropdownMultiSelect;
