import React, { FunctionComponent, useState } from 'react';
import TimePicker, { TimePickerProps } from './TimePicker';

export default { title: 'molecules/TimePicker' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState<[string, string]>(['0', '0']);

    const onChangeCallback = (_: string, time: TimePickerProps['value']) => {
        setValue(time);
    };

    return <TimePicker name={'a-time-picker'} onChange={onChangeCallback} value={value} />;
};
