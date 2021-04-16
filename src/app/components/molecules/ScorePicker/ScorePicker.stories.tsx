import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import ScorePicker from './ScorePicker';

export default { title: 'molecules/ScorePicker' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState<[string, string]>(['0', '0']);

    return (
        <ScorePicker
            errorMessage={text('Error message', 'Incorrect score')}
            hasError={boolean('Has error', false)}
            label={['Apples', 'Pears']}
            name={'a-score-picker'}
            onChange={(_, score) => setValue(score)}
            value={value}
        />
    );
};
