/* eslint react/jsx-props-no-spreading: 0 */
import {
    END_DATE,
    HORIZONTAL_ORIENTATION,
    START_DATE,
    VERTICAL_ORIENTATION,
} from 'react-dates/constants';
import React, { useContext, useState } from 'react';
import { DateRangePicker as AirbnbDateRangePicker } from 'react-dates';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import DialogFooter from '../../../molecules/DialogFooter/DialogFooter';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import InputIcon from '../InputIcon/InputIcon';
import momentPropTypes from 'react-moment-proptypes';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';
import Shortcuts from './Shortcuts/Shortcuts';
import { StyledDateRangePicker } from './DateRangePicker.sc';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

const DateRangePicker = ({
    buttonCancelText,
    buttonConfirmText,
    className,
    daySize,
    displayFormat,
    endDate,
    endDateId,
    endDatePlaceholderText,
    focusedInput,
    footerText,
    hasYearSelector,
    isDayHighlighted,
    isDisabled,
    isOutsideRange,
    keepOpenOnDateSelect,
    label,
    labelMonth,
    labelYear,
    minimumNights,
    numberOfMonths,
    onCancel,
    onConfirm,
    onDatesChange,
    onFocusChange,
    orientation,
    shortcuts,
    shortcutsText,
    startDate,
    startDateId,
    startDatePlaceholderText,
    yearCount,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const isFocused = Boolean(focusedInput);
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
            <StyledDateRangePicker>
                <FormElementLabel
                    isActive
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                >
                    {label}
                </FormElementLabel>
                <AirbnbDateRangePicker
                    customInputIcon={(
                        <InputIcon isDisabled={isDisabled} isFocused={isFocused} />
                    )}
                    daySize={daySize}
                    disabled={isDisabled}
                    displayFormat={displayFormat}
                    endDate={endDate}
                    endDateId={endDateId}
                    endDatePlaceholderText={endDatePlaceholderText}
                    focusedInput={focusedInput}
                    hideKeyboardShortcutsPanel
                    isDayHighlighted={isDayHighlighted}
                    isOutsideRange={isOutsideRange}
                    keepOpenOnDateSelect={keepOpenOnDateSelect}
                    minimumNights={minimumNights}
                    navNext={<ButtonNavigation isNext />}
                    navPrev={<ButtonNavigation isPrev />}
                    numberOfMonths={numberOfMonths}
                    onDatesChange={onDatesChange}
                    onFocusChange={onFocusChange}
                    orientation={orientation}
                    renderCalendarInfo={() => (
                        <>
                            {shortcuts.length > 0 && (
                                <Shortcuts shortcuts={shortcuts} text={shortcutsText} />
                            )}
                            {(onCancel || onConfirm) && (
                                <DialogFooter
                                    buttonCancelText={buttonCancelText}
                                    buttonConfirmText={buttonConfirmText}
                                    onCancel={onCancel}
                                    onConfirm={onConfirm}
                                    text={footerText}
                                />
                            )}
                        </>
                    )}
                    renderMonthElement={(props) => (
                        <Navigation
                            {...props}
                            hasYearSelector={hasYearSelector}
                            labelMonth={labelMonth}
                            labelYear={labelYear}
                            yearCount={yearCount}
                        />
                    )}
                    startDate={startDate}
                    startDateId={startDateId}
                    startDatePlaceholderText={startDatePlaceholderText}
                    verticalSpacing={(spacingValue * 6) - 40}
                />
            </StyledDateRangePicker>
        </Wrapper>
    );
};

DateRangePicker.propTypes = {
    buttonCancelText: PropTypes.node,
    buttonConfirmText: PropTypes.node,
    className: PropTypes.string,
    daySize: PropTypes.number,
    displayFormat: PropTypes.node,
    endDate: momentPropTypes.momentObj,
    endDateId: PropTypes.string.isRequired,
    endDatePlaceholderText: PropTypes.node,
    focusedInput: PropTypes.oneOf([END_DATE, START_DATE]),
    footerText: PropTypes.node,
    hasYearSelector: PropTypes.bool,
    isDayHighlighted: PropTypes.func,
    isDisabled: PropTypes.bool,
    isOutsideRange: PropTypes.func,
    keepOpenOnDateSelect: PropTypes.bool,
    label: PropTypes.node.isRequired,
    labelMonth: PropTypes.node,
    labelYear: PropTypes.node,
    minimumNights: PropTypes.number,
    numberOfMonths: PropTypes.number,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    onDatesChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    orientation: PropTypes.oneOf([HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION]),
    shortcuts: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        text: PropTypes.node.isRequired,
    })),
    shortcutsText: PropTypes.node,
    startDate: momentPropTypes.momentObj,
    startDateId: PropTypes.string.isRequired,
    startDatePlaceholderText: PropTypes.node,
    yearCount: PropTypes.number,
};

DateRangePicker.defaultProps = {
    buttonCancelText: null,
    buttonConfirmText: null,
    className: '',
    daySize: 40,
    displayFormat: 'ddd D MMM Y',
    endDate: null,
    endDatePlaceholderText: AirbnbDateRangePicker.defaultProps.endDatePlaceholderText,
    focusedInput: null,
    footerText: null,
    hasYearSelector: false,
    isDayHighlighted: AirbnbDateRangePicker.defaultProps.isDayHighlighted,
    isDisabled: false,
    isOutsideRange: AirbnbDateRangePicker.defaultProps.isOutsideRange,
    keepOpenOnDateSelect: AirbnbDateRangePicker.defaultProps.keepOpenOnDateSelect,
    labelMonth: null,
    labelYear: null,
    minimumNights: AirbnbDateRangePicker.defaultProps.minimumNights,
    numberOfMonths: 2,
    onCancel: null,
    onConfirm: null,
    orientation: HORIZONTAL_ORIENTATION,
    shortcuts: [],
    shortcutsText: null,
    startDate: null,
    startDatePlaceholderText: AirbnbDateRangePicker.defaultProps.startDatePlaceholderText,
    yearCount: 100,
};

export default DateRangePicker;
