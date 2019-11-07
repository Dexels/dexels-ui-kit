import { ButtonNavigation, InputIcon, StyledDatePicker } from './DatePicker.sc';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import DateNavigation from './DateNavigation/DateNavigation';
import FormElementLabel from '../../molecules/FormElementLabel/FormElementLabel';
import Icon from '../../atoms/Icon/Icon';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import { SingleDatePicker } from 'react-dates';

const DatePicker = ({
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
    yearCount,
}) => (
    <StyledDatePicker hasYearSelector={hasYearSelector}>
        <FormElementLabel isActive isDisabled={isDisabled} isFocused={isFocused}>
            {label}
        </FormElementLabel>
        <SingleDatePicker
            customInputIcon={(
                <InputIcon isDisabled={isDisabled} isFocused={isFocused}>
                    <Icon type={Icon.types.CALENDAR} />
                </InputIcon>
            )}
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
            navNext={(
                <ButtonNavigation isNext>
                    <ButtonIcon iconType={ButtonIcon.types.CHEVRONRIGHT} />
                </ButtonNavigation>
            )}
            navPrev={(
                <ButtonNavigation isPrev>
                    <ButtonIcon iconType={ButtonIcon.types.CHEVRONLEFT} />
                </ButtonNavigation>
            )}
            numberOfMonths={numberOfMonths}
            onClose={onClose}
            onDateChange={onDateChange}
            onFocusChange={onFocusChange}
            placeholder={placeholder}
            renderMonthElement={(props) => DateNavigation({
                ...props,
                hasYearSelector,
                labelMonth,
                labelYear,
                yearCount,
            })}
            verticalSpacing={8}
        />
    </StyledDatePicker>
);

DatePicker.propTypes = {
    date: momentPropTypes.momentObj,
    daySize: PropTypes.number,
    displayFormat: PropTypes.string,
    hasYearSelector: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isDayHighlighted: PropTypes.func,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
    isOutsideRange: PropTypes.func,
    keepOpenOnDateSelect: PropTypes.bool,
    label: PropTypes.string.isRequired,
    labelMonth: PropTypes.string,
    labelYear: PropTypes.string,
    numberOfMonths: PropTypes.number,
    onClose: PropTypes.func,
    onDateChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    yearCount: PropTypes.number,
};

DatePicker.defaultProps = {
    date: null,
    daySize: 40,
    displayFormat: 'ddd D MMM Y',
    hasYearSelector: false,
    isDayHighlighted: SingleDatePicker.defaultProps.isDayHighlighted,
    isDisabled: false,
    isOutsideRange: SingleDatePicker.defaultProps.isOutsideRange,
    keepOpenOnDateSelect: SingleDatePicker.defaultProps.keepOpenOnDateSelect,
    labelMonth: '',
    labelYear: '',
    numberOfMonths: 1,
    onClose: SingleDatePicker.defaultProps.onClose,
    placeholder: SingleDatePicker.defaultProps.placeholder,
    yearCount: 100,
};

export default DatePicker;
