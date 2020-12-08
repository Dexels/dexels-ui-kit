import styled, { css, SimpleInterpolation } from 'styled-components';
import { AmountOfColumns } from './types';

interface StyledInformationTableProps {
    isSidePanel: boolean;
}
export const StyledInformationTable = styled.div<StyledInformationTableProps>`
    display: flex;
    flex-wrap: nowrap;
    padding: 24px 16px 12px 32px;

    ${({ isSidePanel }): SimpleInterpolation =>
        isSidePanel &&
        css`
            padding: 24px 12px 12px 24px;
        `}
`;

interface ColumnProps {
    amountOfColumns: AmountOfColumns;
}

export const Column = styled.div<ColumnProps>`
    flex: 0 1 auto;

    ${({ amountOfColumns }): SimpleInterpolation =>
        css`
            width: calc(100% / ${amountOfColumns});
        `}
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 0 12px;
    min-height: 32px;
`;

interface ColumnValueProps {
    isDisabled: boolean;
}

export const Label = styled.div<ColumnValueProps>`
    flex: 0 1 auto;
    padding: 0 8px 0 0;
    width: 50%;
    color: ${({ isDisabled, theme }): string => (isDisabled ? theme.colorDisabled : theme.shades.three)};
`;

export const Value = styled.div<ColumnValueProps>`
    flex: 0 1 auto;
    padding: 0 16px 0 0;
    width: 50%;
    color: ${({ isDisabled, theme }): string => (isDisabled ? theme.colorDisabled : theme.colorTextBody.primary)};
`;

export const ChildrenWrapper = styled.div`
    padding: 0 8px;
`;
