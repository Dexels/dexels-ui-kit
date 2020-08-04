import { Elevation, IconType, InputType, InputVariant } from '../../../types';
import { List, StyledDropdownSelect, SuggestionList } from './DropdownSelect.sc';
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
import { Icon } from '../../atoms/Icon/Icon';
import { Input } from '../../molecules/Input/Input';
import { ListItem } from '../../atoms/ListItem/ListItem';
import { parseInputValue } from '../../../utils/functions/parseInputValue';
import { toBasicLowercase } from '../../../utils/functions/stringFunctions';
import { useClickOutsideComponent } from '../../../utils/functions/clickHandlers';

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
    onClickOption: (event: SyntheticEvent, option: DropdownOption) => void;
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
    onClickOption,
    options,
    staticOptionPrefix,
    staticOptionSuffix,
    value,
    variant,
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
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

    const onSelectNewOption = useCallback(
        (event: SyntheticEvent): void => {
            onClickOption(event, {
                label: inputValue,
                value: inputValue,
            });
        },
        [onClickOption, inputValue]
    );

    useEffect(() => {
        setIsSelectOpen(inputValue.length > 0);
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

    const handleClickOutsideComponent = (): void => {
        setIsSelectOpen(false);
        // onSelectNewOption(event);
    };

    const { componentRef } = useClickOutsideComponent(() => handleClickOutsideComponent());

    const onFocusCallback = useCallback((): void => {
        setIsSelectOpen(inputValue.length > 0);
    }, [inputValue]);

    return (
        <StyledDropdownSelect className={className} ref={componentRef}>
            <Input
                errorMessage={errorMessage}
                hasError={hasError}
                isDisabled={isDisabled}
                isValid={isValid}
                label={label}
                name={name}
                onChange={onChangeInputCallback}
                onFocus={onFocusCallback}
                type={InputType.TEXT}
                value={inputValue}
                variant={variant}
            />

            {isSelectOpen && (
                <SuggestionList elevation={elevation}>
                    <List maxHeight={maxHeight}>
                        {suggestedOptions.map((item) => (
                            <ListItem
                                adornment={item.adornment}
                                isDisabled={isDisabled}
                                key={item.value}
                                onClick={(event: SyntheticEvent): void => {
                                    onClickOption(event, item);
                                    setIsSelectOpen(false);
                                }}
                            >
                                {item.label}
                            </ListItem>
                        ))}
                        <ListItem
                            adornment={<Icon type={IconType.ROUNDPLUS} />}
                            onClick={(event: SyntheticEvent): void => {
                                onSelectNewOption(event);
                                setIsSelectOpen(false);
                            }}
                        >
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
