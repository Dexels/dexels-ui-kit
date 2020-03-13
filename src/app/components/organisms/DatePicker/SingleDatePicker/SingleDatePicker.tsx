/* eslint react/jsx-props-no-spreading: 0 */
import {
    SingleDatePicker as AirbnbSingleDatePicker,
    OrientationShape,
    SingleDatePickerShape,
} from 'react-dates';
import React, { useContext, useState } from 'react';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import InputIcon from '../InputIcon/InputIcon';
import { InputVariant } from '../../../../types';
import Navigation from '../Navigation/Navigation';
import { SingleDatePickerVariant } from '../types';
import { StyledSingleDatePicker } from './SingleDatePicker.sc';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

export interface SingleDatePickerProps {
    className?: string;
    date: SingleDatePickerShape['date'];
    daySize?: number;
    displayFormat?: string;
    hasYearSelector?: boolean;
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isDayHighlighted?: (day: any) => boolean;
    isDisabled?: boolean;
    isFocused: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isOutsideRange?: (day: any) => boolean;
    keepOpenOnDateSelect?: boolean;
    label: React.ReactNode;
    labelMonth?: React.ReactNode;
    labelYear?: React.ReactNode;
    numberOfMonths?: number;
    onClose?: SingleDatePickerShape['onClose'];
    onDateChange: SingleDatePickerShape['onDateChange'];
    onFocusChange: SingleDatePickerShape['onFocusChange'];
    orientation?: OrientationShape;
    placeholder?: string;
    variant?: SingleDatePickerVariant;
    yearCount?: number;
}

export const SingleDatePicker: React.FunctionComponent<SingleDatePickerProps> = ({
    className,
    date,
    daySize,
    displayFormat,
    hasYearSelector,
    id,
    isDayHighlighted,
    isDisabled,
    isFocused,
    isOutsideRange,
    keepOpenOnDateSelect,
    label,
    labelMonth,
    labelYear,
    numberOfMonths,
    onClose,
    onDateChange,
    onFocusChange,
    placeholder,
    variant,
    yearCount,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const { spacingValue } = useContext(ThemeContext);

    return (
        <Wrapper
            className={className}
            hasYearSelector={hasYearSelector}
            isFocused={isFocused}
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
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
                    renderMonthElement={(props) => (
                        <Navigation
                            {...props}
                            hasYearSelector={hasYearSelector}
                            labelMonth={labelMonth}
                            labelYear={labelYear}
                            yearCount={yearCount}
                        />
                    )}
                    verticalSpacing={(spacingValue * (variant === SingleDatePickerVariant.OUTLINE ? 6 : 3.25)) - 40}
                />
            </StyledSingleDatePicker>
        </Wrapper>
    );
};

SingleDatePicker.defaultProps = {
    className: '',
    date: null,
    daySize: 40,
    displayFormat: 'ddd D MMM Y',
    hasYearSelector: false,
    isDayHighlighted: AirbnbSingleDatePicker.defaultProps.isDayHighlighted,
    isDisabled: false,
    isOutsideRange: AirbnbSingleDatePicker.defaultProps.isOutsideRange,
    keepOpenOnDateSelect: AirbnbSingleDatePicker.defaultProps.keepOpenOnDateSelect,
    labelMonth: null,
    labelYear: null,
    numberOfMonths: 1,
    onClose: AirbnbSingleDatePicker.defaultProps.onClose,
    orientation: 'horizontal',
    placeholder: AirbnbSingleDatePicker.defaultProps.placeholder,
    variant: SingleDatePickerVariant.OUTLINE,
    yearCount: 100,
};

export default SingleDatePicker;
