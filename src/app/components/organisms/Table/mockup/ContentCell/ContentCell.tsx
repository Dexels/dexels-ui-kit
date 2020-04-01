import React, { FunctionComponent, ReactNode } from 'react';
import { StyledContentCell } from './ContentCell.sc';

interface ContentCellProps {
    children?: ReactNode;
}

const ContentCell: FunctionComponent<ContentCellProps> = ({ children }) => (
    <StyledContentCell>{children}</StyledContentCell>
);

export default ContentCell;
