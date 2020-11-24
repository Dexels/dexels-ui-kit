import styled, { css, SimpleInterpolation } from 'styled-components';
import { AmountOfColumns } from './types';

interface StyledInformationTableProps {
    isSidePanel: boolean;
}
export const StyledInformationTable = styled.div<StyledInformationTableProps>`
    display: flex;
    flex-wrap: nowrap;
    padding: 24px 72px 12px;

    ${({ isSidePanel }): SimpleInterpolation =>
        isSidePanel &&
        css`
            padding: 24px 24px 12px;
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

export const Label = styled.div`
    flex: 0 1 auto;
    padding: 0 16px 0 8px;
    width: 50%;
    color: ${({ theme }): string => theme.shades.three};
`;

interface ValueProps {
    isDisabled: boolean;
}

export const Value = styled.div<ValueProps>`
    flex: 0 1 auto;
    padding: 0 16px 0 8px;
    width: 50%;
    color: ${({ isDisabled, theme }): string => (isDisabled ? theme.colorDisabled : theme.colorTextBody.primary)};
`;

export const ChildrenWrapper = styled.div`
    padding: 0 8px;
`;
