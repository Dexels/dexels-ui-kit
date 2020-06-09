// The rule below is disabled because react-table already adds it's own keys
/* eslint-disable react/jsx-key */
import {
    PaginatorWrapper,
    StyledTable,
    TableBody,
    TableCaption,
    TableCell,
    TableCellContent,
    TableFooter,
    TableHead,
    TableHeaderCell,
    TableHeaderCellContent,
    TableHeaderCellInner,
    TableHeaderRow,
    TableRow,
} from './Table.sc';
import React, { ReactNode, SyntheticEvent } from 'react';
import { Row, TableInstance } from 'react-table';
import { Elevation } from '../../../types';
import { renderSortIcon } from './utils/tableFunctions';

export interface TableProps<T extends object> {
    caption?: ReactNode;
    children?: never;
    className?: string;
    elevation?: Elevation;
    footer?: ReactNode;
    hasUnsortedStateIcon?: boolean;
    instance: TableInstance<T>;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    onClickFooter?: (event: SyntheticEvent) => void;
    onClickRow?: (event: SyntheticEvent, row: Row<T>) => void;
    paginator?: ReactNode;
}

const dataSource = <T extends object>(instance: TableInstance<T>, hasPaging: boolean): Row<T>[] =>
    hasPaging ? instance.page : instance.rows;

export const Table = <T extends object>({
    caption,
    className,
    elevation = Elevation.LEVEL_1,
    footer,
    hasUnsortedStateIcon = true,
    instance,
    isDisabled = false,
    isFullWidth = true,
    onClickFooter,
    onClickRow,
    paginator,
}: TableProps<T>): JSX.Element => {
    const { getTableBodyProps, getTableProps, headerGroups, prepareRow } = instance;

    return (
        <>
            {caption && <TableCaption>{caption}</TableCaption>}
            <StyledTable className={className} isFullWidth={isFullWidth} {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers
                                .filter(({ isVisible }) => isVisible)
                                .map((column) => (
                                    <TableHeaderCell
                                        hasCellPadding={column.hasCellPadding}
                                        isDisabled={isDisabled}
                                        width={column.width}
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                    >
                                        <TableHeaderCellInner align={column.align || 'left'} isSorted={column.isSorted}>
                                            <TableHeaderCellContent>{column.render('Header')}</TableHeaderCellContent>
                                            {column.canSort && renderSortIcon(column, hasUnsortedStateIcon)}
                                        </TableHeaderCellInner>
                                    </TableHeaderCell>
                                ))}
                        </TableHeaderRow>
                    ))}
                </TableHead>
                <TableBody elevation={elevation} {...getTableBodyProps()}>
                    {/* USE A CONST (SEE TOP OF FILE) TO DETERMINE CORRECT DATA SOURCE FOR READING (PAGE OR ROWS) */}
                    {dataSource(instance, Boolean(paginator)).map((row) => {
                        prepareRow(row);

                        return (
                            <TableRow
                                isClickable={Boolean(onClickRow)}
                                onClick={
                                    onClickRow
                                        ? (event: SyntheticEvent): void => {
                                              onClickRow(event, row);
                                          }
                                        : undefined
                                }
                                {...row.getRowProps()}
                            >
                                {row.cells
                                    .filter(({ column }) => column.isVisible)
                                    .map((cell) => (
                                        <TableCell
                                            hasCellPadding={cell.column.hasCellPadding}
                                            isClickable={Boolean(cell.column.onClick)}
                                            onClick={(event: SyntheticEvent): void => {
                                                if (cell.column.onClick) {
                                                    event.stopPropagation();
                                                    cell.column.onClick(cell, row, event);
                                                }
                                            }}
                                            {...cell.getCellProps()}
                                            width={cell.column.width}
                                        >
                                            <TableCellContent align={cell.column.align || 'left'}>
                                                {cell.render('Cell')}
                                            </TableCellContent>
                                        </TableCell>
                                    ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
                {footer && (
                    <TableFooter
                        elevation={elevation}
                        isClickable={Boolean(onClickFooter)}
                        onClick={
                            onClickFooter
                                ? (event: SyntheticEvent): void => {
                                      onClickFooter(event);
                                  }
                                : undefined
                        }
                    >
                        {footer}
                    </TableFooter>
                )}
            </StyledTable>
            {paginator && <PaginatorWrapper>{paginator}</PaginatorWrapper>}
        </>
    );
};

export default Table;
