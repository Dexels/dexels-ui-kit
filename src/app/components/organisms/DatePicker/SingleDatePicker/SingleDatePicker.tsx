import { SingleDatePicker as AirbnbSingleDatePicker, SingleDatePickerShape } from 'react-dates';
import { ButtonSize, ButtonVariant, IconType, InputVariant } from '../../../../types';
import DialogFooter, { DialogFooterProps } from '../../../molecules/DialogFooter/DialogFooter';
import React, { FunctionComponent, MouseEventHandler, ReactNode, useContext, useState } from 'react';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import InputIcon from '../InputIcon/InputIcon';
import Navigation from '../Navigation/Navigation';
import { SingleDatePickerVariant } from '../types';
import { StyledSingleDatePicker } from './SingleDatePicker.sc';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

export interface SingleDatePickerProps {
    buttonCancelText?: ReactNode;
    buttonConfirmText?: ReactNode;
    children?: never;
    className?: string;
    date: SingleDatePickerShape['date'];
    daySize?: number;
    displayFormat?: string;
    footerText?: DialogFooterProps['text'];
    hasYearSelector?: boolean;
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isDayHighlighted?: (day: any) => boolean;
    isDisabled?: boolean;
    isFocused: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isOutsideRange?: (day: any) => boolean;
    keepOpenOnDateSelect?: boolean;
    label: ReactNode;
    labelMonth?: ReactNode;
    labelYear?: ReactNode;
    numberOfMonths?: number;
    onCancel?: MouseEventHandler;
    onClose?: SingleDatePickerShape['onClose'];
    onConfirm?: MouseEventHandler;
    onDateChange: SingleDatePickerShape['onDateChange'];
    onFocusChange: SingleDatePickerShape['onFocusChange'];
    placeholder?: string;
    variant?: SingleDatePickerVariant;
    yearCount?: number;
}

export const SingleDatePicker: FunctionComponent<SingleDatePickerProps> = ({
    buttonCancelText,
    buttonConfirmText,
    className,
    date,
    daySize = 40,
    displayFormat = 'ddd D MMM Y',
    footerText,
    hasYearSelector = false,
    id,
    isDayHighlighted,
    isDisabled = false,
    isFocused,
    isOutsideRange,
    keepOpenOnDateSelect,
    label,
    labelMonth,
    labelYear,
    numberOfMonths = 1,
    onCancel,
    onClose,
    onConfirm,
    onDateChange,
    onFocusChange,
    placeholder,
    variant = SingleDatePickerVariant.OUTLINE,
    yearCount = 100,
}) => {
    const footerButtons: DialogFooterProps['buttons'] = [];
    const [isHovered, setIsHovered] = useState(false);
    const { spacingValue } = useContext(ThemeContext);

    if (onCancel) {
        footerButtons.push({
            children: buttonCancelText,
            iconType: IconType.CROSS,
            onClick: onCancel,
            size: ButtonSize.SMALL,
            variant: ButtonVariant.TEXT_ONLY,
        });
    }

    if (onConfirm) {
        footerButtons.push({
            children: buttonConfirmText,
            iconType: IconType.CHECK,
            onClick: onConfirm,
            size: ButtonSize.SMALL,
        });
    }

    return (
        <Wrapper
            className={className}
            hasYearSelector={hasYearSelector}
            isFocused={isFocused}
            onMouseEnter={(): void => {
                setIsHovered(true);
            }}
            onMouseLeave={(): void => {
                setIsHovered(false);
            }}
        >
            <StyledSingleDatePicker isFocused={isFocused} variant={variant}>
                <FormElementLabel
                    isActive
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    variant={variant === SingleDatePickerVariant.OUTLINE ? InputVariant.OUTLINE : InputVariant.COMPACT}
                >
                    {label}
                </FormElementLabel>
                <AirbnbSingleDatePicker
                    customInputIcon={<InputIcon isDisabled={isDisabled} isFocused={isFocused} variant={variant} />}
                    date={date}
                    daySize={daySize}
                    disabled={isDisabled}
                    displayFormat={displayFormat}
                    focused={isFocused}
                    hideKeyboardShortcutsPanel
                    id={id}
                    isDayHighlighted={isDayHighlighted}
                    isOutsideRange={isOutsideRange}
                    keepOpenOnDateSelect={keepOpenOnDateSelect}
                    navNext={<ButtonNavigation isNext />}
                    navPrev={<ButtonNavigation isPrev />}
                    numberOfMonths={numberOfMonths}
                    onClose={onClose}
                    onDateChange={onDateChange}
                    onFocusChange={onFocusChange}
                    placeholder={placeholder}
                    renderCalendarInfo={
                        footerButtons.length > 0
                            ? (): JSX.Element => <DialogFooter buttons={footerButtons} text={footerText} />
                            : undefined
                    }
                    renderMonthElement={(props): JSX.Element => (
                        <Navigation
                            {...props}
                            hasYearSelector={hasYearSelector}
                            labelMonth={labelMonth}
                            labelYear={labelYear}
                            yearCount={yearCount}
                        />
                    )}
                    verticalSpacing={spacingValue * (variant === SingleDatePickerVariant.OUTLINE ? 6 : 3.25) - 40}
                />
            </StyledSingleDatePicker>
        </Wrapper>
    );
};

export default SingleDatePicker;
