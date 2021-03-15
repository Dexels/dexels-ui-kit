import {
    SingleDatePicker as AirbnbSingleDatePicker,
    AnchorDirectionShape,
    OpenDirectionShape,
    SingleDatePickerShape,
} from 'react-dates';
import { ButtonSize, ButtonVariant, IconType, InputVariant } from '../../../../types';
import DialogFooter, { DialogFooterProps } from '../../../molecules/DialogFooter/DialogFooter';
import React, { FunctionComponent, MouseEventHandler, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { StyledSingleDatePicker, StyledWrapper } from './SingleDatePicker.sc';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import InputIcon from '../InputIcon/InputIcon';
import { Moment } from 'moment';
import Navigation from '../Navigation/Navigation';
import { SingleDatePickerVariant } from '../types';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

export interface SingleDatePickerProps {
    buttonCancelText?: ReactNode;
    buttonConfirmText?: ReactNode;
    children?: never;
    className?: string;
    date?: SingleDatePickerShape['date'];
    daySize?: number;
    displayFormat?: string;
    footerText?: DialogFooterProps['text'];
    hasYearSelector?: boolean;
    id: string;
    isDayBlocked?: (day: Moment) => boolean;
    isDayHighlighted?: (day: Moment) => boolean;
    isDisabled?: boolean;
    isFocused: boolean;
    isOutsideRange?: (day: Moment) => boolean;
    keepOpenOnDateSelect?: boolean;
    label?: ReactNode;
    labelMonth?: ReactNode;
    labelYear?: ReactNode;
    numberOfMonths?: number;
    onCancel?: MouseEventHandler;
    onClose?: SingleDatePickerShape['onClose'];
    onConfirm?: MouseEventHandler;
    onDateChange: SingleDatePickerShape['onDateChange'];
    onFocusChange: SingleDatePickerShape['onFocusChange'];
    parentContainer?: HTMLDivElement;
    placeholder?: string;
    variant?: SingleDatePickerVariant;
    yearCount?: number;
    yearCountFuture?: number;
}

export const SingleDatePicker: FunctionComponent<SingleDatePickerProps> = ({
    buttonCancelText,
    buttonConfirmText,
    className,
    date = null,
    daySize = 40,
    displayFormat = 'ddd D MMM Y',
    footerText,
    hasYearSelector = false,
    id,
    isDayBlocked,
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
    yearCountFuture = 0,
    parentContainer,
}) => {
    const footerButtons: DialogFooterProps['buttons'] = [];
    const [isHovered, setIsHovered] = useState(false);
    const { spacingValue } = useContext(ThemeContext);
    const singleDatePickerRef = useRef<HTMLDivElement>(null);
    const [anchorDirection, setAnchorDirection] = useState<AnchorDirectionShape>('left');
    const [isRightDatepicker, setIsRightDatepicker] = useState(false);
    const [isTopDatepicker, setIsTopDatepicker] = useState(false);
    const [openDatePickerMinHeight, setOpenDatePickerMinHeight] = useState(400);
    const [openDatePickerMinWidth, setOpenDatePickerMinWidth] = useState(350);
    const [openDirection, setOpenDirection] = useState<OpenDirectionShape>('down');

    useEffect(() => {
        // On Mount: get the measures of de DOM element of the calendar part of a SingleDatePicker_picker
        const datePickerContainer = document.querySelectorAll('div.DayPicker__horizontal');

        if (datePickerContainer && datePickerContainer.length !== 0) {
            if (datePickerContainer[0].clientHeight !== openDatePickerMinHeight) {
                setOpenDatePickerMinHeight(datePickerContainer[0].clientHeight);
            }

            if (datePickerContainer[0].clientWidth !== openDatePickerMinWidth) {
                setOpenDatePickerMinWidth(datePickerContainer[0].clientWidth);
            }
        }
    }, []);

    useEffect(() => {
        if (singleDatePickerRef.current) {
            let { top, right } = singleDatePickerRef.current.getBoundingClientRect();

            if (parentContainer) {
                const parentContainerRect = parentContainer.getBoundingClientRect();
                top -= parentContainerRect.top;
                right -= parentContainerRect.right;
            }

            const containerHeight = parentContainer ? parentContainer.offsetHeight : window.innerHeight;
            const containerWidth = parentContainer ? parentContainer.offsetWidth : window.innerWidth;

            // calculate available space under and to the right of the dropdown
            const availableSpaceUnder = Math.round(containerHeight - top);
            const availableSpaceRight = Math.round(containerWidth - right);

            // open date picker above only if there is enough space above and not enough space under
            setIsTopDatepicker(openDatePickerMinHeight > availableSpaceUnder && openDatePickerMinHeight < top);

            // align date picker to the right otherwise it exceeds parent container's width
            setIsRightDatepicker(openDatePickerMinWidth > availableSpaceRight);
        }
    }, [parentContainer, singleDatePickerRef.current]);

    useEffect(() => {
        setOpenDirection(isTopDatepicker ? 'up' : 'down');
    }, [isTopDatepicker]);

    useEffect(() => {
        setAnchorDirection(isRightDatepicker ? 'right' : 'left');
    }, [isRightDatepicker]);

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
        <StyledWrapper ref={singleDatePickerRef}>
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
                <StyledSingleDatePicker isFocused={isFocused} isTopDatepicker={isTopDatepicker} variant={variant}>
                    {label && (
                        <FormElementLabel
                            isActive
                            isDisabled={isDisabled}
                            isFocused={isFocused}
                            isHovered={isHovered}
                            variant={
                                variant === SingleDatePickerVariant.OUTLINE
                                    ? InputVariant.OUTLINE
                                    : InputVariant.COMPACT
                            }
                        >
                            {label}
                        </FormElementLabel>
                    )}
                    <AirbnbSingleDatePicker
                        anchorDirection={anchorDirection}
                        customInputIcon={<InputIcon isDisabled={isDisabled} isFocused={isFocused} variant={variant} />}
                        date={date}
                        daySize={daySize}
                        disabled={isDisabled}
                        displayFormat={displayFormat}
                        focused={isFocused}
                        hideKeyboardShortcutsPanel
                        id={id}
                        isDayBlocked={isDayBlocked}
                        isDayHighlighted={isDayHighlighted}
                        isOutsideRange={isOutsideRange}
                        keepOpenOnDateSelect={keepOpenOnDateSelect}
                        navNext={<ButtonNavigation isNext />}
                        navPrev={<ButtonNavigation isPrev />}
                        numberOfMonths={numberOfMonths}
                        onClose={onClose}
                        onDateChange={onDateChange}
                        onFocusChange={onFocusChange}
                        openDirection={openDirection}
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
                                yearCountFuture={yearCountFuture}
                            />
                        )}
                        verticalSpacing={spacingValue * (variant === SingleDatePickerVariant.OUTLINE ? 6 : 3.25) - 40}
                    />
                </StyledSingleDatePicker>
            </Wrapper>
        </StyledWrapper>
    );
};

export default SingleDatePicker;
