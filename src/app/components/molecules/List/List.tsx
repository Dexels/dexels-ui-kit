import React, { FunctionComponent, ReactNode } from 'react';
import { StyledList } from './List.sc';

export interface ListProps {
    children?: ReactNode;
    maxHeight?: number;
    minHeight?: number;
}

export const List: FunctionComponent<ListProps> = ({ children, maxHeight, minHeight }) => (
    <StyledList maxHeight={maxHeight} minHeight={minHeight}>
        {children}
    </StyledList>
);

export default List;
