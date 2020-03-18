import React from 'react';
import { StyledWrapper } from './Wrapper.sc';

interface WrapperProps {
    className?: string;
    hasYearSelector?: boolean;
    isFocused: boolean;
    onMouseEnter: (e: React.MouseEvent) => void;
    onMouseLeave: (e: React.MouseEvent) => void;
}

const Wrapper: React.FunctionComponent<WrapperProps> = ({
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
