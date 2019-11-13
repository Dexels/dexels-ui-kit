/* eslint react/jsx-props-no-spreading: 0 */
import React, { useContext } from 'react';
import { SingleDatePicker as AirbnbSingleDatePicker } from 'react-dates';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import InputIcon from '../InputIcon/InputIcon';
import momentPropTypes from 'react-moment-proptypes';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';
import { StyledSingleDatePicker } from './SingleDatePicker.sc';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

const SingleDatePicker = ({
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
}) => {
    const { spacingValue } = useContext(ThemeContext);

    return (
        <Wrapper hasYearSelector={hasYearSelector} isFocused={isFocused}>
            <StyledSingleDatePicker hasYearSelector={hasYearSelector}>
                <FormElementLabel isActive isDisabled={isDisabled} isFocused={isFocused}>
                    {label}
                </FormElementLabel>
                <AirbnbSingleDatePicker
                    customInputIcon={<InputIcon isDisabled={isDisabled} isFocused={isFocused} />}
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
                    verticalSpacing={(spacingValue * 6) - 40}
                />
            </StyledSingleDatePicker>
        </Wrapper>
    );
};

SingleDatePicker.propTypes = {
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

SingleDatePicker.defaultProps = {
    date: null,
    daySize: 40,
    displayFormat: 'ddd D MMM Y',
    hasYearSelector: false,
    isDayHighlighted: AirbnbSingleDatePicker.defaultProps.isDayHighlighted,
    isDisabled: false,
    isOutsideRange: AirbnbSingleDatePicker.defaultProps.isOutsideRange,
    keepOpenOnDateSelect: AirbnbSingleDatePicker.defaultProps.keepOpenOnDateSelect,
    labelMonth: undefined,
    labelYear: undefined,
    numberOfMonths: 1,
    onClose: AirbnbSingleDatePicker.defaultProps.onClose,
    placeholder: AirbnbSingleDatePicker.defaultProps.placeholder,
    yearCount: 100,
};

export default SingleDatePicker;
