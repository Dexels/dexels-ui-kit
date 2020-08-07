import { Elevation, IconType, InputType, InputVariant } from '../../../types';
import { IconCustomizable, IconCustomizableSize } from '../../molecules/IconCustomizable';
import { LabelWrapper, StyledDropdownSelect, SuggestionList } from './DropdownSelect.sc';
import React, {
    ChangeEvent,
    FunctionComponent,
    ReactNode,
    SyntheticEvent,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { DialogFooter } from '../../molecules/DialogFooter/DialogFooter';
import { DropdownOption } from '../../molecules/Dropdown/Dropdown';

import { Input } from '../../molecules/Input/Input';
import { List } from '../../molecules/List/List';
import { ListItem } from '../../atoms/ListItem/ListItem';
import { parseInputValue } from '../../../utils/functions/parseInputValue';
import { toBasicLowercase } from '../../../utils/functions/stringFunctions';
import { useClickOutsideComponent } from '../../../utils/functions/clickHandlers';

export interface DropdownSelectOption extends DropdownOption {
    adornment?: ReactNode;
    searchValue?: string;
}

interface UpdatedDropdownSelect extends DropdownOption {
    adornment?: ReactNode;
    searchValue: string;
}

export interface DropdownSelectProps {
    children?: never;
    className?: string;
    elevation?: Elevation;
    errorMessage?: ReactNode;
    footerText?: ReactNode;
    hasError?: boolean;
    iconType: IconType;
    isDisabled?: boolean;
    isSearchAny?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    maxHeight?: string;
    name: string;
    noResultsMessage: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onConfirm: (event: SyntheticEvent, option: DropdownOption) => void;
    optionLabel: ReactNode;
    options: DropdownSelectOption[];
    value: string;
    variant?: InputVariant;
}

export const DropdownSelect: FunctionComponent<DropdownSelectProps> = ({
    className,
    elevation = Elevation.LEVEL_6,
    errorMessage,
    hasError = false,
    iconType,
    footerText,
    isDisabled = false,
    isSearchAny = false,
    isValid = false,
    label,
    maxHeight,
    name,
    noResultsMessage,
    onChange,
    onConfirm,
    options,
    optionLabel,
    value,
    variant,
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [suggestedOptions, setSuggestedOptions] = useState([] as DropdownSelectOption[]);
    const [updatedOptions, setUpdatedOptions] = useState([] as UpdatedDropdownSelect[]);

    useEffect(() => {
        setUpdatedOptions(
            options.map((option) => {
                return {
                    ...option,
                    searchValue: option.searchValue
                        ? toBasicLowercase(option.searchValue)
                        : toBasicLowercase(option.label),
                };
            })
        );
    }, [options]);

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (event.currentTarget) {
                setIsOptionSelected(false);
                setInputValue(parseInputValue(event.currentTarget));

                if (onChange) {
                    onChange(event);
                }
            }
        },
        [inputValue, onChange, options]
    );

    const onSelectOptionCallback = useCallback(
        (event: SyntheticEvent, option?: DropdownOption) => {
            const selectedOption = option || {
                label: inputValue,
                value: inputValue,
            };

            setIsOptionSelected(true);
            setInputValue(selectedOption.label);

            if (onChange) {
                onChange(event as ChangeEvent<HTMLInputElement>);
            }

            onConfirm(event, selectedOption);
            setIsSelectOpen(false);
        },
        [inputValue, onConfirm, onChangeCallback]
    );

    useEffect(() => {
        setIsSelectOpen(!isOptionSelected && inputValue.length > 0);
    }, [inputValue, isOptionSelected]);

    useEffect(() => {
        setSuggestedOptions(
            updatedOptions.filter((option) =>
                isSearchAny
                    ? option.searchValue.includes(toBasicLowercase(inputValue))
                    : option.searchValue.indexOf(toBasicLowercase(inputValue)) === 0
            )
        );
    }, [inputValue]);

    const handleClickOutsideComponent = (event: SyntheticEvent): void => {
        onSelectOptionCallback(event);
    };

    const { componentRef } = useClickOutsideComponent((event: MouseEvent) =>
        handleClickOutsideComponent((event as unknown) as SyntheticEvent)
    );

    const onFocusCallback = useCallback((): void => {
        setIsSelectOpen(inputValue.length > 0);
    }, [inputValue]);

    const onKeyDownCallback = useCallback((event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            onSelectOptionCallback(event);
        }
    }, []);

    return (
        <StyledDropdownSelect className={className} ref={componentRef}>
            <Input
                errorMessage={errorMessage}
                hasError={hasError}
                isDisabled={isDisabled}
                isValid={isValid}
                label={label}
                name={name}
                onChange={onChangeCallback}
                onFocus={onFocusCallback}
                onKeyDown={onKeyDownCallback}
                type={InputType.TEXT}
                value={inputValue}
                variant={variant}
            />

            {isSelectOpen && (
                <SuggestionList elevation={elevation}>
                    <List maxHeight={maxHeight}>
                        {suggestedOptions.length < 1 && (
                            <ListItem
                                adornment={
                                    <IconCustomizable
                                        iconSize={IconCustomizableSize.SIZE24}
                                        iconType={IconType.SEARCH}
                                    />
                                }
                                isLighter
                            >
                                <LabelWrapper>{noResultsMessage}</LabelWrapper>
                            </ListItem>
                        )}
                        {suggestedOptions.map((item) => (
                            <ListItem
                                adornment={item.adornment}
                                isDisabled={isDisabled}
                                key={item.value}
                                onClick={(event: React.MouseEvent<Element, MouseEvent>): void => {
                                    onSelectOptionCallback(event, item);
                                }}
                            >
                                <LabelWrapper>{item.label}</LabelWrapper>
                            </ListItem>
                        ))}
                        <ListItem
                            adornment={<IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={iconType} />}
                            onClick={(event: React.MouseEvent<Element, MouseEvent>): void => {
                                onSelectOptionCallback(event);
                            }}
                        >
                            <LabelWrapper>{optionLabel}</LabelWrapper>
                        </ListItem>
                    </List>
                    <DialogFooter text={footerText} />
                </SuggestionList>
            )}
        </StyledDropdownSelect>
    );
};

export default DropdownSelect;
