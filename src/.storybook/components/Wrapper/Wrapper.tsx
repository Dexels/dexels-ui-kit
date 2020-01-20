import React from 'react';
import { StyledWrapper } from './Wrapper.sc';
import { WrapperProps } from './types';

const Wrapper: React.FC<WrapperProps> = ({ children, isTransparent, width }) => (
    <StyledWrapper isTransparent={isTransparent} width={width}>
        {children}
    </StyledWrapper>
);

export default Wrapper;
