import {
    ErrorMessageWrapper,
    IconWrapper,
    Select,
    StyledDropdown,
} from './Dropdown.sc';
import React, {
    ChangeEvent,
    ComponentType,
    FunctionComponent,
    MouseEventHandler,
    ReactNode,
    useState,
} from 'react';
import { DropdownVariant } from './types';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../FormElementLabel/FormElementLabel';
import Icon from '../../atoms/Icon/Icon';
import { IconType } from '../../../types';

export interface DropdownProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as?: keyof JSX.IntrinsicElements | ComponentType<any>;
    children?: ReactNode;
    className?: string;
    errormessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isOpen?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    name: string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    onClick?: MouseEventHandler;
    placeholder?: string;
    value: number | string;
    variant?: DropdownVariant;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Dropdown: FunctionComponent<DropdownProps & { [key: string]: any }> = ({
    as = 'select',
    children,
    className,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isOpen = false,
    isRequired = false,
    isValid = false,
    label,
    name,
    onChange,
    onClick,
    placeholder,
    value,
    variant = DropdownVariant.COMPACT,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <StyledDropdown
                className={className}
                hasError={hasError}
                isDisabled={isDisabled}
                isFocused={isFocused || isOpen}
                isValid={isValid}
                variant={variant}
                {...rest}
            >
                {label && (
                    <FormElementLabel
                        hasError={hasError}
                        isActive
                        isDisabled={isDisabled}
                        isFocused={isFocused || isOpen}
                        isHovered={isHovered}
                        isValid={isValid}
                    >
                        {label}
                    </FormElementLabel>
                )}
                <Select
                    as={as}
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocused={isFocused || isOpen}
                    isHovered={isHovered}
                    isPlaceholderSelected={placeholder === value}
                    isValid={isValid}
                    name={name}
                    onBlur={(): void => {
                        setIsFocused(false);
                    }}
                    onChange={onChange}
                    onClick={onClick}
                    onFocus={(): void => {
                        setIsFocused(true);
                    }}
                    onMouseEnter={(): void => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={(): void => {
                        setIsHovered(false);
                    }}
                    required={isRequired}
                    value={value}
                    variant={variant}
                >
                    {as === 'select' && placeholder && (
                        <option disabled hidden value={placeholder}>
                            {placeholder}
                        </option>
                    )}
                    {children}
                </Select>
                <IconWrapper
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocused={isFocused || isOpen}
                    isHovered={isHovered}
                    isValid={isValid}
                    variant={variant}
                >
                    <Icon type={IconType.DROPDOWN} />
                </IconWrapper>
            </StyledDropdown>
            {errorMessage && hasError && !isDisabled && (
                <ErrorMessageWrapper>
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                </ErrorMessageWrapper>
            )}
        </>
    );
};

export default Dropdown;
