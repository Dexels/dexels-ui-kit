import { InputType, InputVariant } from '../../../types';
import { InputWrapper, StyledScorePicker } from './ScorePicker.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { Input } from '../Input/Input';
import { parseInputValue } from '../../../utils/functions/parseInputValue';

export interface ScorePickerProps {
    isDisabled?: boolean;
    label: [ReactNode, ReactNode];
    name: string;
    onChange: (name: string, score: ScorePickerProps['value']) => void;
    value: [string, string];
}

const ScorePicker: FunctionComponent<ScorePickerProps> = ({ isDisabled, label, name, onChange, value }) => (
    <StyledScorePicker>
        <InputWrapper>
            <Input
                isDisabled={isDisabled}
                label={label[0]}
                min={0}
                name={`${name}-home`}
                onChange={({ currentTarget }): void => {
                    onChange(name, [parseInputValue(currentTarget), value[1]]);
                }}
                type={InputType.NUMBER}
                value={value[0]}
                variant={InputVariant.COMPACT}
            />
        </InputWrapper>
        <InputWrapper>
            <Input
                isDisabled={isDisabled}
                label={label[1]}
                min={0}
                name={`${name}-away`}
                onChange={({ currentTarget }): void => {
                    onChange(name, [value[0], parseInputValue(currentTarget)]);
                }}
                type={InputType.NUMBER}
                value={value[1]}
                variant={InputVariant.COMPACT}
            />
        </InputWrapper>
    </StyledScorePicker>
);

export default ScorePicker;
