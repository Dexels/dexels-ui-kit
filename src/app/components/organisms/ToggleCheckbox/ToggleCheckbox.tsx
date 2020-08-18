import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import { ToggleOff, ToggleOn } from './ToggleCheckbox.sc';

export interface ToggleCheckboxProps {
    className?: string;
    iconOff?: IconType;
    iconOn?: IconType;
    isInitialChecked?: boolean;
    onChange(value: boolean): void;
    size?: ButtonSize;
    titleOff: ReactNode;
    titleOn: ReactNode;
}

export const ToggleCheckbox: FunctionComponent<ToggleCheckboxProps> = ({
    className,
    iconOff,
    iconOn,
    titleOff,
    titleOn,
    size,
    isInitialChecked = false,
    onChange,
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
                isInverted={!isChecked}
                onClick={onClick}
                size={size}
                variant={ButtonVariant.FILLED}
            >
                {titleOn}
            </ToggleOn>
            <ToggleOff
                iconType={iconOff}
                isInverted={isChecked}
                onClick={onClick}
                size={size}
                variant={ButtonVariant.FILLED}
            >
                {titleOff}
            </ToggleOff>
        </div>
    );
};

export default ToggleCheckbox;
