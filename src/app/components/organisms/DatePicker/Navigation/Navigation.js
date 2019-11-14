import { CurrentDate, DropdownWrapper, StyledNavigation } from './Navigation.sc';
import Dropdown from '../../../molecules/Dropdown/Dropdown';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';

const Navigation = ({
    hasYearSelector,
    labelMonth,
    labelYear,
    month,
    onMonthSelect,
    onYearSelect,
    yearCount,
}) => {
    if (!hasYearSelector) {
        return (
            <CurrentDate>
                {`${month.format('MMMM')} ${month.year()}`}
            </CurrentDate>
        );
    }

    const monthArray = moment.months().map((label, value) => (
        <option key={label} value={value}>
            {label}
        </option>
    ));

    const currentYear = moment().year();
    const yearArray = [];

    for (let i = currentYear - yearCount; i <= currentYear; i += 1) {
        yearArray.push(
            <option key={i} value={i}>
                {i}
            </option>,
        );
    }

    return (
        <StyledNavigation>
            <DropdownWrapper>
                <Dropdown
                    label={labelMonth}
                    name="month-dropdown"
                    onChange={(e) => {
                        onMonthSelect(month, e.target.value);
                    }}
                    value={month.month()}
                    variant={Dropdown.variants.OUTLINE}
                >
                    {monthArray}
                </Dropdown>
            </DropdownWrapper>
            <DropdownWrapper>
                <Dropdown
                    label={labelYear}
                    name="year-dropdown"
                    onChange={(e) => {
                        onYearSelect(month, e.target.value);
                    }}
                    value={month.year()}
                    variant={Dropdown.variants.OUTLINE}
                >
                    {yearArray}
                </Dropdown>
            </DropdownWrapper>
        </StyledNavigation>
    );
};

Navigation.propTypes = {
    hasYearSelector: PropTypes.bool.isRequired,
    labelMonth: PropTypes.string,
    labelYear: PropTypes.string,
    month: momentPropTypes.momentObj.isRequired,
    onMonthSelect: PropTypes.func.isRequired,
    onYearSelect: PropTypes.func.isRequired,
    yearCount: PropTypes.number.isRequired,
};

Navigation.defaultProps = {
    labelMonth: '',
    labelYear: '',
};

export default Navigation;