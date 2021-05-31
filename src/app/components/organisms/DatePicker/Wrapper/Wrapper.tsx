import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';
import { StyledWrapper } from './Wrapper.sc';

interface WrapperProps {
    children?: ReactNode;
    className?: string;
    hasError: boolean;
    hasYearSelector?: boolean;
    isFocused: boolean;
    onMouseEnter: (e: MouseEvent) => void;
    onMouseLeave: (e: MouseEvent) => void;
}

const Wrapper: FunctionComponent<WrapperProps> = ({
    children,
    className,
    hasError,
    hasYearSelector = false,
    isFocused,
    onMouseEnter,
    onMouseLeave,
}) => (
    <StyledWrapper
        className={className}
        hasError={hasError}
        hasYearSelector={hasYearSelector}
        isFocused={isFocused}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {children}
    </StyledWrapper>
);

export default Wrapper;
