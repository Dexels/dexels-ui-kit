import {
    Paging,
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
    footerComponent?: ReactNode;
    hasUnsortedStateIcon?: boolean;
    instance: TableInstance<T>;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    onClickRow?: (event: SyntheticEvent, row: Row<T>) => void;
    pagingComponent?: ReactNode;
}

const dataSource = <T extends object>(instance: TableInstance<T>, hasPaging: boolean): Row<T>[] =>
    hasPaging ? instance.page : instance.rows;

export const Table = <T extends object>({
    caption,
    className,
    elevation = Elevation.LEVEL_1,
    footerComponent,
    hasUnsortedStateIcon = true,
    instance,
    isDisabled = false,
    isFullWidth = true,
    onClickRow,
    pagingComponent,
}: TableProps<T>): JSX.Element => {
    const { getTableBodyProps, getTableProps, headerGroups, prepareRow } = instance;

    return (
        <>
            {caption && <TableCaption>{caption}</TableCaption>}
            <StyledTable className={className} isFullWidth={isFullWidth} {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableHeaderRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers
                                .filter(({ isVisible }) => isVisible)
                                .map((column) => (
                                    <TableHeaderCell
                                        hasCellPadding={column.hasCellPadding}
                                        isDisabled={isDisabled}
                                        key={column}
                                        width={column.width}
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                    >
                                        <TableHeaderCellInner isSorted={column.isSorted}>
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
                    {dataSource(instance, Boolean(pagingComponent)).map((row) => {
                        prepareRow(row);

                        return (
                            <TableRow
                                isClickable={Boolean(onClickRow)}
                                key={row}
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
                                            key={cell}
                                            onClick={(event: SyntheticEvent): void => {
                                                if (cell.column.onClick) {
                                                    event.stopPropagation();
                                                    cell.column.onClick(cell, row, event);
                                                }
                                            }}
                                            {...cell.getCellProps()}
                                            width={cell.column.width}
                                        >
                                            <TableCellContent>{cell.render('Cell')}</TableCellContent>
                                        </TableCell>
                                    ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
                {footerComponent && <TableFooter elevation={elevation}>{footerComponent}</TableFooter>}
            </StyledTable>
            {pagingComponent && <Paging>{pagingComponent}</Paging>}
        </>
    );
};

export default Table;
