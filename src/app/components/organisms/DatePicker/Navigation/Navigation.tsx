import { CurrentDate, DropdownWrapper, StyledNavigation } from './Navigation.sc';
import { Dropdown, DropdownVariant } from '../../../molecules/Dropdown';
import moment, { Moment } from 'moment';
import React from 'react';

interface NavigationProps {
    hasYearSelector: boolean;
    labelMonth?: React.ReactNode;
    labelYear?: React.ReactNode;
    month: Moment;
    onMonthSelect: (moment: Moment, value: string) => void;
    onYearSelect: (moment: Moment, value: string) => void;
    yearCount: number;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
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
                    variant={DropdownVariant.OUTLINE}
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
                    variant={DropdownVariant.OUTLINE}
                >
                    {yearArray}
                </Dropdown>
            </DropdownWrapper>
        </StyledNavigation>
    );
};

export default Navigation;
