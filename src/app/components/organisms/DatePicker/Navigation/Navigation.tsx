import { CurrentDate, DropdownWrapper, StyledNavigation } from './Navigation.sc';
import { Dropdown, DropdownVariant } from '../../../molecules/Dropdown';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, ReactNode } from 'react';
import SelectOption from '../../../atoms/SelectOption/SelectOption';

interface NavigationProps {
    children?: never;
    hasYearSelector: boolean;
    labelMonth?: ReactNode;
    labelYear?: ReactNode;
    month: Moment;
    onMonthSelect: (moment: Moment, value: string) => void;
    onYearSelect: (moment: Moment, value: string) => void;
    yearCount: number;
    yearCountFuture: number;
}

const Navigation: FunctionComponent<NavigationProps> = ({
    hasYearSelector,
    labelMonth,
    labelYear,
    month,
    onMonthSelect,
    onYearSelect,
    yearCount,
    yearCountFuture,
}) => {
    if (!hasYearSelector) {
        return <CurrentDate>{`${month.format('MMMM')} ${month.year()}`}</CurrentDate>;
    }

    const monthArray = moment.months().map((label, value) => (
        <SelectOption key={label} value={value}>
            {label}
        </SelectOption>
    ));

    const currentYear = moment().year();
    const yearArray = [];

    for (let i = currentYear - yearCount; i <= currentYear; i += 1) {
        yearArray.push(
            <SelectOption key={i} value={i}>
                {i}
            </SelectOption>
        );
    }

    for (let i = currentYear + 1; i <= currentYear + yearCountFuture; i += 1) {
        yearArray.push(
            <SelectOption key={i} value={i}>
                {i}
            </SelectOption>
        );
    }

    return (
        <StyledNavigation>
            <DropdownWrapper>
                <Dropdown
                    label={labelMonth}
                    name="month-dropdown"
                    onChange={(event): void => {
                        onMonthSelect(month, event.target.value);
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
                    onChange={(event): void => {
                        onYearSelect(month, event.target.value);
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
