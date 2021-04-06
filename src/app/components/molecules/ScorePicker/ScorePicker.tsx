import { InputType, InputVariant } from '../../../types';
import { InputWrapper, StyledScorePicker } from './ScorePicker.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { Input } from '../Input/Input';

export interface ScorePickerProps {
    autoFocus?: boolean;
    isDisabled?: boolean;
    label: [ReactNode, ReactNode];
    name: string;
    onChange: (name: string, score: ScorePickerProps['value']) => void;
    value: [string, string];
}

export const ScorePicker: FunctionComponent<ScorePickerProps> = ({
    autoFocus = false,
    isDisabled,
    label,
    name,
    onChange,
    value,
}) => (
    <StyledScorePicker>
        <InputWrapper>
            <Input
                autoFocus={autoFocus}
                isDisabled={isDisabled}
                label={label[0]}
                min={0}
                name={`${name}-home`}
                onChange={({ currentTarget }): void => {
                    onChange(name, [currentTarget.value, value[1]]);
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
                    onChange(name, [value[0], currentTarget.value]);
                }}
                type={InputType.NUMBER}
                value={value[1]}
                variant={InputVariant.COMPACT}
            />
        </InputWrapper>
    </StyledScorePicker>
);

export default ScorePicker;
