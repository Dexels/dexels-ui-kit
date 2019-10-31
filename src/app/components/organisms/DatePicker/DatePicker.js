import { ButtonNavigation, InputIcon, StyledDatePicker } from './DatePicker.sc';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import DateNavigation from './DateNavigation/DateNavigation';
import Icon from '../../atoms/Icon/Icon';
import InputLabel from '../../molecules/InputLabel/InputLabel';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import { SingleDatePicker } from 'react-dates';

const DatePicker = ({
    date,
    hasYearSelector,
    id,
    isFocused,
    label,
    numberOfMonths,
    onDateChange,
    onFocusChange,
    yearCount,
}) => (
    <StyledDatePicker hasYearSelector={hasYearSelector}>
        <InputLabel isActive isFocused={isFocused}>
            {label}
        </InputLabel>
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
            isOutsideRange={() => false}
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
    isFocused: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    numberOfMonths: PropTypes.number,
    onDateChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    yearCount: PropTypes.number,
};

DatePicker.defaultProps = {
    hasYearSelector: false,
    numberOfMonths: 1,
    yearCount: 100,
};

export default DatePicker;
