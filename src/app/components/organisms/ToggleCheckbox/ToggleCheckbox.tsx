import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import { ToggleOff, ToggleOn } from './ToggleCheckbox.sc';

export interface ToggleCheckboxProps {
    className?: string;
    iconOff?: IconType;
    iconOn?: IconType;
    isDisabled?: boolean;
    isInitialChecked?: boolean;
    onChange(value: boolean): void;
    size?: ButtonSize;
    textOff: ReactNode;
    textOn: ReactNode;
}

export const ToggleCheckbox: FunctionComponent<ToggleCheckboxProps> = ({
    className,
    iconOff,
    iconOn,
    textOff,
    textOn,
    size,
    isInitialChecked = false,
    onChange,
    isDisabled,
}) => {
    const [isChecked, setIsChecked] = useState(isInitialChecked);

    const onClick = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };

    return (
        <div className={className}>
            <ToggleOn
                iconType={iconOn}
                isDisabled={isDisabled}
                isInverted={!isChecked}
                onClick={onClick}
                size={size}
                variant={ButtonVariant.FILLED}
            >
                {textOn}
            </ToggleOn>
            <ToggleOff
                iconType={iconOff}
                isDisabled={isDisabled}
                isInverted={isChecked}
                onClick={onClick}
                size={size}
                variant={ButtonVariant.FILLED}
            >
                {textOff}
            </ToggleOff>
        </div>
    );
};

export default ToggleCheckbox;
