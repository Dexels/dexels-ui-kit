import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';
import { StyledWrapper } from './Wrapper.sc';

interface WrapperProps {
    children?: ReactNode;
    className?: string;
    hasYearSelector?: boolean;
    isFocused: boolean;
    onMouseEnter: (e: MouseEvent) => void;
    onMouseLeave: (e: MouseEvent) => void;
}

const Wrapper: FunctionComponent<WrapperProps> = ({
    children,
    className,
    hasYearSelector = false,
    isFocused,
    onMouseEnter,
    onMouseLeave,
}) => (
    <StyledWrapper
        className={className}
        hasYearSelector={hasYearSelector}
        isFocused={isFocused}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {children}
    </StyledWrapper>
);

export default Wrapper;
