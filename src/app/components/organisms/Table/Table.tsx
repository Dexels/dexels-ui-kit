/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-nested-ternary */
// The rule below is disabled because react-table already adds it's own keys
/* eslint-disable react/jsx-key */
import { Alignment, Elevation, IconType } from '../../../types';
import { getColumnWidthByPercentage, renderSortIcon } from './utils/tableFunctions';
import {
    PaginatorWrapper,
    StyledTable,
    TableBody,
    TableCaption,
    TableCell,
    TableCellContent,
    TableFooter,
    TableFooterCell,
    TableFooterCellContent,
    TableFooterCellInner,
    TableFooterComponent,
    TableFooterRow,
    TableHead,
    TableHeaderCell,
    TableHeaderCellContent,
    TableHeaderCellInner,
    TableHeaderRow,
    TableRow,
    TableWrapper,
} from './Table.sc';
import React, { ReactNode, SyntheticEvent } from 'react';
import { Row, TableInstance } from 'react-table';

export interface TableTexts {
    sortByTooltip?: ReactNode;
}

export interface TableProps<T extends object> {
    caption?: ReactNode;
    children?: never;
    className?: string;
    elevation?: Elevation;
    footer?: ReactNode;
    footerTitleColumnSpan?: number;
    hasUnsortedStateIcon?: boolean;
    instance: TableInstance<T>;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    onClickFooter?: (event: SyntheticEvent) => void;
    onClickRow?: (event: SyntheticEvent, row: Row<T>) => void;
    paginator?: ReactNode;
    texts?: TableTexts;
}

const dataSource = <T extends object>(instance: TableInstance<T>, hasPaging: boolean): Row<T>[] =>
    hasPaging ? instance.page : instance.rows;

export const Table = <T extends object>({
    caption,
    className,
    elevation = Elevation.LEVEL_1,
    footer,
    footerTitleColumnSpan = 2,
    hasUnsortedStateIcon = true,
    instance,
    isDisabled = false,
    isFullWidth = true,
    onClickFooter,
    onClickRow,
    paginator,
    texts,
}: TableProps<T>): JSX.Element => {
    const { footerGroups, getTableBodyProps, getTableProps, headerGroups, prepareRow } = instance;
    let hasFooterColumns = false;
    const randomTableId = Math.random().toString(36).substr(2, 5);

    // This const contains the calculated widths in pixels.
    // Mind the fact that the default value for missing widths = 100
    // It's deliberately split into 2 consts, because we need the array for footer purposes
    const fixedColumnWidths = instance.visibleColumns.map((column) =>
        column.width && typeof column.width === 'number' ? column.width : 0
    );

    const fixedColumnWidthsTotal = fixedColumnWidths.reduce((a, b) => a + b, 0);

    return (
        <>
            {caption && <TableCaption>{caption}</TableCaption>}
            <TableWrapper>
                <StyledTable className={className} id={randomTableId} isFullWidth={isFullWidth} {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers
                                    .filter(({ isVisible }) => isVisible)
                                    .map((column) => (
                                        <TableHeaderCell
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps({
                                                    title: (texts && texts.sortByTooltip) || undefined,
                                                })
                                            )}
                                            hasCellPadding={column.hasCellPadding}
                                            isDisabled={isDisabled}
                                            // Check if the column is a percentage, if so then calculate in pixels
                                            width={
                                                column.width?.toString().includes('%')
                                                    ? getColumnWidthByPercentage(
                                                          randomTableId,
                                                          parseInt(column.width.toString().replace('%', ''), 10),
                                                          fixedColumnWidthsTotal
                                                      )
                                                    : column.width
                                            }
                                        >
                                            <TableHeaderCellInner
                                                align={column.align || Alignment.LEFT}
                                                isSorted={column.isSorted}
                                            >
                                                <TableHeaderCellContent>
                                                    {column.render('Header')}
                                                </TableHeaderCellContent>
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
                                        .map((cell) => {
                                            // Check if we need to do some looping for the footer based on aggregate setting
                                            hasFooterColumns = hasFooterColumns || Boolean(cell.column.aggregate);

                                            return (
                                                <TableCell
                                                    {...cell.getCellProps()}
                                                    hasCellPadding={cell.column.hasCellPadding}
                                                    isClickable={Boolean(cell.column.onClick)}
                                                    onClick={(event: SyntheticEvent): void => {
                                                        if (cell.column.onClick) {
                                                            event.stopPropagation();
                                                            cell.column.onClick(cell, row, event);
                                                        }
                                                    }}
                                                    // Check if the column is a percentage, if so then calculate in pixels
                                                    width={
                                                        cell.column.width?.toString().includes('%')
                                                            ? getColumnWidthByPercentage(
                                                                  randomTableId,
                                                                  parseInt(
                                                                      cell.column.width.toString().replace('%', ''),
                                                                      10
                                                                  ),
                                                                  fixedColumnWidthsTotal
                                                              )
                                                            : cell.column.width
                                                    }
                                                >
                                                    <TableCellContent align={cell.column.align || Alignment.LEFT}>
                                                        {cell.isGrouped ? (
                                                            // If it's a grouped cell, add an expander and row count
                                                            <>
                                                                <span {...row.getToggleRowExpandedProps()}>
                                                                    {row.isExpanded
                                                                        ? IconType.ARROWDOWN
                                                                        : IconType.ARROWRIGHT}
                                                                </span>{' '}
                                                                {cell.render('Cell', { editable: false })}
                                                            </>
                                                        ) : cell.isAggregated ? (
                                                            // If the cell is aggregated, use the Aggregated
                                                            // renderer for cell
                                                            cell.render('Aggregated')
                                                        ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                                                            // Otherwise, just render the regular cell
                                                            cell.render('Cell', { editable: true })
                                                        )}
                                                    </TableCellContent>
                                                </TableCell>
                                            );
                                        })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    {hasFooterColumns && (
                        <TableFooter elevation={elevation}>
                            {footerGroups.map((footerGroup) => (
                                <TableFooterRow {...footerGroup.getFooterGroupProps()}>
                                    {footerGroup.headers
                                        .filter(({ isVisible }) => isVisible)
                                        .map(
                                            (column, index) =>
                                                (index === 0 || index >= footerTitleColumnSpan) && (
                                                    <TableFooterCell
                                                        {...column.getFooterProps()}
                                                        colSpan={
                                                            index === 0 && index <= footerTitleColumnSpan
                                                                ? footerTitleColumnSpan
                                                                : 1
                                                        }
                                                        hasCellPadding={column.hasCellPadding}
                                                        isClickable={false}
                                                        isDisabled={isDisabled}
                                                        isTitleColumn={index === 0 && index <= footerTitleColumnSpan}
                                                        width={
                                                            // When the first column(s) concerns the title, then check if we need to calculate something
                                                            // reduce is ebing used to accumulate all necessary values for the title column
                                                            index === 0 && index <= footerTitleColumnSpan
                                                                ? fixedColumnWidths.reduce(
                                                                      (a, b, c) =>
                                                                          c <= footerTitleColumnSpan ? a + b : a,
                                                                      0
                                                                  )
                                                                : column.width?.toString().includes('%')
                                                                ? getColumnWidthByPercentage(
                                                                      randomTableId,
                                                                      parseInt(
                                                                          column.width.toString().replace('%', ''),
                                                                          10
                                                                      ),
                                                                      fixedColumnWidthsTotal
                                                                  )
                                                                : column.width
                                                        }
                                                    >
                                                        <TableFooterCellInner
                                                            align={column.align || Alignment.LEFT}
                                                            isSorted={column.isSorted}
                                                        >
                                                            <TableFooterCellContent>
                                                                {column.aggregate
                                                                    ? column.render('Aggregated')
                                                                    : column.render('Footer')}
                                                            </TableFooterCellContent>
                                                        </TableFooterCellInner>
                                                    </TableFooterCell>
                                                )
                                        )}
                                </TableFooterRow>
                            ))}
                        </TableFooter>
                    )}

                    {footer && (
                        <TableFooterComponent
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
                        </TableFooterComponent>
                    )}
                </StyledTable>
            </TableWrapper>
            {paginator && <PaginatorWrapper>{paginator}</PaginatorWrapper>}
        </>
    );
};

export default Table;
