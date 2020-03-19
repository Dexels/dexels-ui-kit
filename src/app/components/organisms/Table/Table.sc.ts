import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface ColumnProps {
    hasCellPadding?: boolean;
    width?: string | number;
}

interface ClickableProps {
    isClickable: boolean;
}

export const TableCaption = styled.div`
    ${setBoxSizing()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h1)}
    padding: ${({ theme }): string => theme.spacing(0, 0, 4, 0)};
    color: ${({ theme }): string => theme.colorText.primary};
`;

interface StyledTableProps {
    isFullWidth: boolean;
}

export const StyledTable = styled.table<StyledTableProps>`
    ${setBoxSizing()}
    background-color: transparent;
    border-spacing: 0;

    ${({ isFullWidth }): SimpleInterpolation => isFullWidth && css`
        width: 100%;
    `}
`;

StyledTable.defaultProps = {
    theme: themeBasic,
};

export const TableHead = styled.thead`
    background-color: transparent;
`;

export const TableHeaderRow = styled.tr`
    background-color: transparent;
`;

interface TableHeaderCellProps extends ColumnProps {
    isDisabled: boolean;
}

export const TableHeaderCell = styled.th<TableHeaderCellProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    border-bottom: 4px solid;
    border-color: ${({ isDisabled, theme }): SimpleInterpolation => (isDisabled ? theme.colorDisabled : theme.colorPrimary)};
    background-color: transparent;
    padding: ${({ hasCellPadding, theme }): string => (hasCellPadding ? theme.spacing(0.5, 0.5, 1, 0.5) : theme.spacing(0))};
    height: ${({ theme }): string => theme.spacing(5)};
    text-align: left;
    color: ${({ isDisabled, theme }): SimpleInterpolation => (isDisabled ? theme.colorDisabled : theme.colorText.primary)};
    font-weight: 600;

    ${({ width }): SimpleInterpolation => width && css`
        width: ${typeof width === 'number' ? `${width}px` : width};
    `}
`;

TableHeaderCell.defaultProps = {
    hasCellPadding: true,
    theme: themeBasic,
};

interface TableBodyProps {
    elevation: Elevation;
}

export const TableBody = styled.tbody<TableBodyProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    color: ${({ theme }): string => theme.shades.nine};
`;

TableBody.defaultProps = {
    theme: themeBasic,
};

interface TableRowProps extends ClickableProps {}

export const TableRow = styled.tr<TableRowProps>`
    position: relative;

    ${({ isClickable }): SimpleInterpolation => isClickable && css`
        cursor: pointer;
    `}

    &:nth-child(odd) {
        background-color: ${({ theme }): string => theme.table.row.backgroundColorOdd};

        &:hover td::after {
            background-color: ${({ theme }): string => theme.table.row.backgroundColorOdd};
        }
    }

    &:nth-child(even) {
        background-color: ${({ theme }): string => theme.table.row.backgroundColorEven};

        &:hover td::after {
            background-color: ${({ theme }): string => theme.table.row.backgroundColorEven};
        }
    }

    &:hover td {
        ${getElevation(Elevation.LEVEL_3)}
    }
`;

TableRow.defaultProps = {
    theme: themeBasic,
};

interface TableCellProps extends ColumnProps, ClickableProps {}

export const TableCell = styled.td<TableCellProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    position: relative;
    padding: ${({ hasCellPadding, theme }): string => theme.spacing(hasCellPadding ? 0.5 : 0)};
    height: ${({ theme }): string => theme.spacing(6)};
    vertical-align: middle;
    color: ${({ theme }): string => theme.colorText.primary};

    &::after {
        position: absolute;
        top: 0;
        right: -10px;
        z-index: 1;
        width: 20px;
        height: 100%;
        content: '';
    }

    &:last-child {
        overflow: hidden;
    }

    ${({ isClickable }): SimpleInterpolation => isClickable && css`
        cursor: pointer;
    `}
`;

TableCell.defaultProps = {
    hasCellPadding: true,
    theme: themeBasic,
};

export const TableCellContent = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    z-index: 2;
    height: 100%;
`;

interface IconWrapperProps {
    isSorted: boolean;
}

export const IconWrapper = styled.span<IconWrapperProps>`
    padding: ${({ theme }): string => theme.spacing(0, 0, 0, 1)};
    color: ${({ isSorted, theme }): string => (isSorted ? theme.colorText.primary : theme.colorDisabled)};
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

interface TableFooterProps {
    elevation: Elevation;
}

export const TableFooter = styled.tfoot<TableFooterProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    background-color: transparent;
`;

export const Paging = styled.div`
    background-color: transparent;
`;
