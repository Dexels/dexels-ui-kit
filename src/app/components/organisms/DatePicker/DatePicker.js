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
    hasYearSelector,
    id,
    isDayHighlighted,
    isFocused,
    isOutsideRange,
    label,
    labelMonth,
    labelYear,
    numberOfMonths,
    onDateChange,
    onFocusChange,
    yearCount,
}) => (
    <StyledDatePicker hasYearSelector={hasYearSelector}>
        <FormElementLabel isActive isFocused={isFocused}>
            {label}
        </FormElementLabel>
        <SingleDatePicker
            customInputIcon={(
                <InputIcon isFocused={isFocused}>
                    <Icon type={Icon.types.CALENDAR} />
                </InputIcon>
            )}
            date={date}
            daySize={40}
            displayFormat="ddd D MMM Y"
            focused={isFocused}
            hideKeyboardShortcutsPanel
            id={id}
            isDayHighlighted={isDayHighlighted}
            isOutsideRange={isOutsideRange}
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
            onDateChange={onDateChange}
            onFocusChange={onFocusChange}
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
    date: momentPropTypes.momentObj.isRequired,
    hasYearSelector: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isDayHighlighted: PropTypes.func,
    isFocused: PropTypes.bool.isRequired,
    isOutsideRange: PropTypes.func,
    label: PropTypes.string.isRequired,
    labelMonth: PropTypes.string,
    labelYear: PropTypes.string,
    numberOfMonths: PropTypes.number,
    onDateChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    yearCount: PropTypes.number,
};

DatePicker.defaultProps = {
    hasYearSelector: false,
    isDayHighlighted: () => {},
    isOutsideRange: SingleDatePicker.defaultProps.isOutsideRange,
    labelMonth: '',
    labelYear: '',
    numberOfMonths: 1,
    yearCount: 100,
};

export default DatePicker;
