import React, { FunctionComponent, useState } from 'react';
import TimePicker from './TimePicker';

export default { title: 'molecules/TimePicker' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState<[string, string]>(['0', '0']);

    return <TimePicker name={'a-time-picker'} onChange={(_, time) => setValue(time)} value={value} />;
};
