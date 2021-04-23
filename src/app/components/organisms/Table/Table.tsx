/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-nested-ternary */
// The rule below is disabled because react-table already adds it's own keys
/* eslint-disable react/jsx-key */
import { Alignment, Elevation, IconType } from '../../../types';
import {
    FooterWrapper,
    PaginatorWrapper,
    StyledCardNoResults,
    StyledTable,
    TableBody,
    TableCaption,
    TableCell,
    TableCellContent,
    TableFooter,
    TableFooterCell,
    TableFooterCellContent,
    TableFooterCellInner,
    TableFooterRow,
    TableHead,
    TableHeaderCell,
    TableHeaderCellContent,
    TableHeaderCellInner,
    TableHeaderRow,
    TableRow,
    TableWrapper,
} from './Table.sc';
import { getColumnWidthByPercentage, renderSortIcon } from './utils/tableFunctions';
import React, { ReactNode, SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Row, TableInstance, TableState } from 'react-table';
import ContentCell from './ContentCell/ContentCell';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { sum } from './utils/aggregateFunctions';
import toNumber from '../../../utils/functions/toNumber';

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
    noResults?: ReactNode | string;
    onClickFooter?: (event: SyntheticEvent) => void;
    onClickRow?: (event: SyntheticEvent, row: Row<T>, tableState: TableState<T>) => void;
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
    noResults,
    onClickFooter,
    onClickRow,
    paginator,
    texts,
}: TableProps<T>): JSX.Element => {
    const { footerGroups, getTableBodyProps, getTableProps, headerGroups, prepareRow } = instance;
    let hasFooterColumns = false;
    const [availableTableWidth, setAvailableTableWidth] = useState(0);
    const locale = instance.locale || DEFAULT_LOCALE;
    const tableWrapperRef = useRef<HTMLDivElement>(null);

    // This const contains the calculated widths in pixels.
    // Mind the fact that the default value for missing widths = 100
    // It's deliberately split into 2 consts, because we need the array for footer purposes
    const fixedColumnWidths = instance.visibleColumns.map((column) =>
        column.width && typeof column.width === 'number' ? column.width : 0
    );

    const fixedColumnWidthsTotal = fixedColumnWidths.reduce((a, b) => a + b, 0);
    const hasResults = instance.data.length !== 0;

    // check if total of presentages doesn't exceeds 100%, do this only once for an instance.
    const precentageColumnWidthsTotal = useMemo(
        () =>
            instance.visibleColumns.reduce((total, column) => {
                if (column.width !== undefined && column.width.toString().includes('%')) {
                    return total + toNumber(column.width.toString().replace('%', ''));
                }

                return total;
            }, 0),
        [instance]
    );

    useEffect(() => {
        if (precentageColumnWidthsTotal > 100) {
            throw Error('precentages of columns exceed 100%');
        }
    }, [precentageColumnWidthsTotal]);

    useEffect(() => {
        if (tableWrapperRef.current) {
            setAvailableTableWidth(
                Math.round(tableWrapperRef.current.getBoundingClientRect().width - fixedColumnWidthsTotal)
            );
        }
    }, [availableTableWidth, tableWrapperRef, fixedColumnWidthsTotal]);

    return (
        <>
            {caption && <TableCaption id="TableCaption">{caption}</TableCaption>}
            {!hasResults && noResults ? (
                typeof noResults === 'string' ? (
                    <StyledCardNoResults elevation={elevation} id="NoResults">
                        {noResults}
                    </StyledCardNoResults>
                ) : (
                    noResults
                )
            ) : (
                <TableWrapper id="TableWrapper" ref={tableWrapperRef}>
                    <StyledTable className={className} id="StyledTable" isFullWidth={isFullWidth} {...getTableProps()}>
                        <TableHead id="TableHead">
                            {headerGroups.map((headerGroup) => (
                                <TableHeaderRow id="TableHeaderRow" {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers
                                        .filter(({ isVisible }) => isVisible)
                                        .map((column) => (
                                            <TableHeaderCell
                                                {...column.getHeaderProps(
                                                    column.getSortByToggleProps({
                                                        title:
                                                            (column.canSort && texts && texts.sortByTooltip) ||
                                                            undefined,
                                                    })
                                                )}
                                                hasCellPadding={column.hasCellPadding}
                                                id="TableHeaderCell"
                                                isDisabled={isDisabled}
                                                // Check if the column is a percentage, if so then calculate in pixels
                                                width={
                                                    column.width?.toString().includes('%')
                                                        ? getColumnWidthByPercentage(
                                                              availableTableWidth,
                                                              toNumber(column.width.toString().replace('%', ''))
                                                          )
                                                        : column.width
                                                }
                                            >
                                                <TableHeaderCellInner
                                                    align={column.align || Alignment.LEFT}
                                                    id="TableHeaderCellInner"
                                                    isSorted={column.isSorted}
                                                >
                                                    <TableHeaderCellContent id="TableHeaderCellContent">
                                                        {column.render('Header')}
                                                    </TableHeaderCellContent>
                                                    {column.canSort && renderSortIcon(column, hasUnsortedStateIcon)}
                                                </TableHeaderCellInner>
                                            </TableHeaderCell>
                                        ))}
                                </TableHeaderRow>
                            ))}
                        </TableHead>
                        <TableBody elevation={elevation} {...getTableBodyProps()} id="TableBody">
                            {/* USE A CONST (SEE TOP OF FILE) TO DETERMINE CORRECT DATA SOURCE FOR READING (PAGE OR ROWS) */}
                            {dataSource(instance, Boolean(paginator)).map((row) => {
                                prepareRow(row);

                                return (
                                    <TableRow
                                        id="TableRow"
                                        isClickable={Boolean(onClickRow)}
                                        onClick={
                                            onClickRow
                                                ? (event: SyntheticEvent): void => {
                                                      onClickRow(event, row, instance.state);
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
                                                        id="TableCell"
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
                                                                      availableTableWidth,
                                                                      parseInt(
                                                                          cell.column.width.toString().replace('%', ''),
                                                                          10
                                                                      )
                                                                  )
                                                                : cell.column.width
                                                        }
                                                    >
                                                        <TableCellContent
                                                            align={cell.column.align || Alignment.LEFT}
                                                            id="TableCellContent"
                                                        >
                                                            {cell.isGrouped ? (
                                                                // If it's a grouped cell, add an expander and row count
                                                                <>
                                                                    <span {...row.getToggleRowExpandedProps()}>
                                                                        {row.isExpanded
                                                                            ? IconType.ARROWDOWN
                                                                            : IconType.ARROWRIGHT}
                                                                    </span>{' '}
                                                                    {cell.render('Cell', {
                                                                        editable: false,
                                                                    })}
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
                            <TableFooter elevation={elevation} id="TableFooter">
                                {footerGroups.map((footerGroup) => (
                                    <TableFooterRow id="TableFooterRow" {...footerGroup.getFooterGroupProps()}>
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
                                                            id="TableFooterCell"
                                                            isClickable={false}
                                                            isCurrency={column.isCurrency || false}
                                                            isDisabled={isDisabled}
                                                            isTitleColumn={
                                                                index === 0 && index <= footerTitleColumnSpan
                                                            }
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
                                                                          availableTableWidth,
                                                                          parseInt(
                                                                              column.width.toString().replace('%', ''),
                                                                              10
                                                                          )
                                                                      )
                                                                    : column.width
                                                            }
                                                        >
                                                            <TableFooterCellInner
                                                                align={column.align || Alignment.LEFT}
                                                                id="TableFooterCellInner"
                                                                isSorted={column.isSorted}
                                                            >
                                                                <TableFooterCellContent id="TableFooterCellContent">
                                                                    {column.aggregate && column.isCurrency ? (
                                                                        // hasNegativeAmountColor is not adjustable and will follow the default
                                                                        // Otherwise it has to be set in the columndefs and therefor added as a prop
                                                                        <ContentCell
                                                                            isCurrency
                                                                            value={sum(
                                                                                column.filteredRows.map((row) =>
                                                                                    row.values.amount !== undefined
                                                                                        ? (row.values.amount as
                                                                                              | number
                                                                                              | string)
                                                                                        : 0
                                                                                ),
                                                                                true,
                                                                                locale
                                                                            )}
                                                                        />
                                                                    ) : column.aggregate ? (
                                                                        column.render('Aggregated')
                                                                    ) : (
                                                                        column.render('Footer')
                                                                    )}
                                                                </TableFooterCellContent>
                                                            </TableFooterCellInner>
                                                        </TableFooterCell>
                                                    )
                                            )}
                                    </TableFooterRow>
                                ))}
                            </TableFooter>
                        )}
                    </StyledTable>
                </TableWrapper>
            )}
            {footer && (
                <FooterWrapper
                    elevation={elevation}
                    id="FooterWrapper"
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
                </FooterWrapper>
            )}
            {paginator && <PaginatorWrapper id="PaginatorWrapper">{paginator}</PaginatorWrapper>}
        </>
    );
};

export default Table;
