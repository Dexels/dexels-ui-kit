/* eslint react/jsx-props-no-spreading: 0 */
import { HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION } from 'react-dates/lib/constants';
import React, { useContext, useState } from 'react';
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
            <StyledSingleDatePicker hasYearSelector={hasYearSelector}>
                <FormElementLabel
                    isActive
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                >
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
    className: PropTypes.string,
    date: momentPropTypes.momentObj,
    daySize: PropTypes.number,
    displayFormat: PropTypes.node,
    hasYearSelector: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isDayHighlighted: PropTypes.func,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
    isOutsideRange: PropTypes.func,
    keepOpenOnDateSelect: PropTypes.bool,
    label: PropTypes.node.isRequired,
    labelMonth: PropTypes.node,
    labelYear: PropTypes.node,
    numberOfMonths: PropTypes.number,
    onClose: PropTypes.func,
    onDateChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    orientation: PropTypes.oneOf([HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION]),
    placeholder: PropTypes.node,
    yearCount: PropTypes.number,
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
    orientation: HORIZONTAL_ORIENTATION,
    placeholder: AirbnbSingleDatePicker.defaultProps.placeholder,
    yearCount: 100,
};

export default SingleDatePicker;
