import React, { FunctionComponent, ReactNode } from 'react';
import { StyledContentCell } from './ContentCell.sc';

interface ContentCellProps {
    children?: ReactNode;
    isAmount?: boolean;
}

const ContentCell: FunctionComponent<ContentCellProps> = ({ children, isAmount = false }) => (
    <StyledContentCell isAmount={isAmount}>{children}</StyledContentCell>
);

export default ContentCell;
