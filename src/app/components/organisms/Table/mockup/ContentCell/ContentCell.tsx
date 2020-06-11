import React, { FunctionComponent, ReactNode } from 'react';
import { StyledContentCell } from './ContentCell.sc';

interface ContentCellProps {
    children?: ReactNode;
    isCurrency?: boolean;
}

const ContentCell: FunctionComponent<ContentCellProps> = ({ children, isCurrency = false }) => (
    <StyledContentCell isCurrency={isCurrency}>{children}</StyledContentCell>
);

export default ContentCell;
