import { DropdownWrapper, StyledTimePicker } from './TimePicker.sc';
import React, { FunctionComponent, useMemo } from 'react';
import { Dropdown } from '../Dropdown';

export interface TimePickerProps {
    isDisabled?: boolean;
    minuteStep: number;
    name: string;
    onChange: (name: string, time: TimePickerProps['value']) => void;
    value: [string, string];
}

export const TimePicker: FunctionComponent<TimePickerProps> = ({
    isDisabled,
    minuteStep = 5,
    name,
    onChange,
    value,
}) => {
    const hours = useMemo(
        () =>
            Array.from(Array(24).keys()).map((key) => {
                if (key < 10) {
                    return `0${key}`;
                }

                return key.toString();
            }),
        []
    );

    const minutes = useMemo(
        () =>
            Array.from(Array(12).keys()).map((key) => {
                const minute = key * minuteStep;

                if (minute < 10) {
                    return `0${minute}`;
                }

                return minute.toString();
            }),
        [minuteStep]
    );

    return (
        <StyledTimePicker>
            <DropdownWrapper>
                <Dropdown
                    isDisabled={isDisabled}
                    name={`${name}-hours`}
                    onChange={({ currentTarget }): void => {
                        onChange(name, [currentTarget.value, value[1]]);
                    }}
                    value={value[0]}
                >
                    {hours.map((hour) => (
                        <option key={hour} value={hour}>
                            {hour}
                        </option>
                    ))}
                </Dropdown>
            </DropdownWrapper>
            <DropdownWrapper>
                <Dropdown
                    isDisabled={isDisabled}
                    name={`${name}-minutes`}
                    onChange={({ currentTarget }): void => {
                        onChange(name, [value[0], currentTarget.value]);
                    }}
                    value={value[1]}
                >
                    {minutes.map((minute) => (
                        <option key={minute} value={minute}>
                            {minute}
                        </option>
                    ))}
                </Dropdown>
            </DropdownWrapper>
        </StyledTimePicker>
    );
};

export default TimePicker;
