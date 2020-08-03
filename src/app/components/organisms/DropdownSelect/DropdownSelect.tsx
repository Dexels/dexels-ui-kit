import { Elevation, IconType, InputType, InputVariant } from '../../../types';
import { List, StyledDropdownSelect, SuggestionList } from './DropdownSelect.sc';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { DialogFooter } from '../../molecules/DialogFooter/DialogFooter';
import { DropdownOption } from '../../molecules/Dropdown/Dropdown';
import { Icon } from '../../atoms/Icon/Icon';
import { Input } from '../../molecules/Input/Input';
import { ListItem } from '../../atoms/ListItem/ListItem';
import { parseInputValue } from '../../../utils/functions/parseInputValue';
import { toBasicLowercase } from '../../../utils/functions/stringFunctions';

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
    instructionMessage: ReactNode;
    isDisabled?: boolean;
    isSearchFromStart?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    maxHeight?: string;
    name: string;
    options: DropdownOptionProps[];
    staticOptionPrefix?: ReactNode;
    staticOptionSuffix?: ReactNode;
    value: string;
    variant?: InputVariant;
}

export const DropdownSelect: FunctionComponent<DropdownSelectProps> = ({
    className,
    elevation = Elevation.LEVEL_6,
    errorMessage,
    hasError = false,
    instructionMessage,
    isDisabled = false,
    isSearchFromStart = true,
    isValid = false,
    label,
    maxHeight,
    name,
    options,
    staticOptionPrefix,
    staticOptionSuffix,
    value,
    variant,
}) => {
    const [isSelectOpen, setIsSelectionOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [suggestedOptions, setSuggestedOptions] = useState([] as DropdownOptionProps[]);

    const updatedOptions = options.map((option) => {
        return {
            ...option,
            searchValue: option.searchValue ? toBasicLowercase(option.searchValue) : toBasicLowercase(option.label),
        };
    });

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
    }, [inputValue]);

    useEffect(() => {
        setSuggestedOptions(
            updatedOptions.filter((option) =>
                isSearchFromStart
                    ? option.searchValue.indexOf(toBasicLowercase(inputValue)) === 0
                    : option.searchValue.includes(toBasicLowercase(inputValue))
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
                        <ListItem adornment={<Icon type={IconType.ROUNDPLUS} />}>
                            {staticOptionPrefix}
                            {` '${inputValue}' `}
                            {staticOptionSuffix}
                        </ListItem>
                    </List>
                    <DialogFooter text={instructionMessage} />
                </SuggestionList>
            )}
        </StyledDropdownSelect>
    );
};

export default DropdownSelect;
