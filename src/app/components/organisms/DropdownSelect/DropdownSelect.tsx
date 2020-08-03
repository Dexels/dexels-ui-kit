import { Elevation, InputType, InputVariant } from '../../../types';
import { List, StyledDropdownSelect, SuggestionList } from './DropdownSelect.sc';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { DropdownOption } from '../../molecules/Dropdown/Dropdown';
import { Input } from '../../molecules/Input/Input';
import { ListItem } from '../../atoms/ListItem/ListItem';
import { parseInputValue } from '../../../utils/functions/parseInputValue';

export interface DropdownOptionProps extends DropdownOption {
    adornment?: ReactNode;
    searchValue?: string;
}

export interface DropdownSelectProps {
    children?: never;
    className?: string;
    elevation?: Elevation;
    errorMessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isSearchFromStart?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    maxHeight?: string;
    name: string;
    options: DropdownOptionProps[];
    value: string;
    variant?: InputVariant;
}

export const DropdownSelect: FunctionComponent<DropdownSelectProps> = ({
    className,
    elevation = Elevation.LEVEL_6,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isValid = false,
    label,
    maxHeight,
    name,
    options,
    value,
    variant,
}) => {
    const [isSelectOpen, setIsSelectionOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [suggestedOptions, setSuggestedOptions] = useState([] as DropdownOptionProps[]);

    const onChangeInputCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (event.currentTarget) {
                setInputValue(parseInputValue(event.currentTarget));
            }
        },
        [inputValue, options]
    );

    useEffect(() => {
        setIsSelectionOpen(inputValue.length > 0);

        setSuggestedOptions(
            options.filter((option) =>
                option.searchValue ? option.searchValue.includes(inputValue) : option.label.includes(inputValue)
            )
        );
    }, [inputValue]);

    return (
        <StyledDropdownSelect className={className}>
            <Input
                errorMessage={errorMessage}
                hasError={hasError}
                isDisabled={isDisabled}
                isValid={isValid}
                label={label}
                name={name}
                onChange={onChangeInputCallback}
                type={InputType.TEXT}
                value={inputValue}
                variant={variant}
            />

            {isSelectOpen && (
                <SuggestionList elevation={elevation}>
                    <List maxHeight={maxHeight}>
                        {suggestedOptions.map((item) => (
                            <ListItem adornment={item.adornment} isDisabled={isDisabled} key={item.value}>
                                {item.label}
                            </ListItem>
                        ))}
                    </List>
                </SuggestionList>
            )}
        </StyledDropdownSelect>
    );
};

export default DropdownSelect;
