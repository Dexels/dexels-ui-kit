import React, { FunctionComponent, ReactNode } from 'react';
import { StyledList } from './List.sc';

export interface ListProps {
    children?: ReactNode;
    maxHeight?: string;
}

export const List: FunctionComponent<ListProps> = ({ children, maxHeight }) => (
    <StyledList maxHeight={maxHeight}>{children}</StyledList>
);

export default List;
