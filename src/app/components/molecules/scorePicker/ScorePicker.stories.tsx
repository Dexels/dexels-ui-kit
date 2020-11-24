import React, { FunctionComponent, useState } from 'react';
import ScorePicker, { ScorePickerProps } from './ScorePicker';

export default { title: 'molecules/ScorePicker' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState<[string, string]>(['0', '0']);

    const onChangeCallback = (_: string, score: ScorePickerProps['value']) => {
        setValue(score);
    };

    return (
        <ScorePicker label={['Apples', 'Pears']} name={'a-score-picker'} onChange={onChangeCallback} value={value} />
    );
};
