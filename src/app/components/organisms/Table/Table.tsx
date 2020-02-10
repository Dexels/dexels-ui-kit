// In this file we want to use prop spreading because React Table passes a lot of props
/* eslint-disable react/jsx-props-no-spreading */
import { ColumnInstance, TableInstance } from 'react-table';
import {
    IconWrapper,
    Paging,
    StyledTable,
    TableBody,
    TableCaption,
    TableCell,
    TableCellContent,
    TableFooter,
    TableHead,
    TableHeaderCell,
    TableHeaderRow,
    TableRow,
} from './Table.sc';
import { Elevation } from '../../../types';
import React from 'react';
import { renderSortIcon } from './utils/tableFunctions';

export interface TableProps {
    caption?: React.ReactNode;
    className?: string;
    elevation?: Elevation;
    footerComponent?: React.ReactNode;
    hasUnsortedStateIcon?: boolean;
    instance: TableInstance;
    isFullWidth?: boolean;
    onClickRow?: (...args: any[]) => any;
    pagingComponent?: React.ReactNode;
    texts?: {
        toggleSortTooltip?: React.ReactNode;
    };
}

const dataSource = (instance: TableInstance, hasPaging: boolean) => (hasPaging ? instance.page : instance.rows);

export const Table: React.FunctionComponent<TableProps> = ({
    caption,
    className,
    elevation,
    footerComponent,
    hasUnsortedStateIcon,
    instance,
    isFullWidth,
    onClickRow,
    pagingComponent,
    texts,
}) => {
    const {
        getTableBodyProps,
        getTableProps,
        headerGroups,
        prepareRow,
    } = instance;

    // @TODO: most unfortunate, but the isVisible column prop doesn't seem to be overridable (yet)
    // The previous prop (show) can be set, but has no effect, so handle it manually
    const isColumnVisible = (column: ColumnInstance): boolean => {
        if (Object.prototype.hasOwnProperty.call(column, 'show')) {
            return column.show;
        }

        if (Object.prototype.hasOwnProperty.call(column, 'isVisible')) {
            return column.isVisible;
        }

        return false;
    };

    return (
        <>
            {caption && (
                <TableCaption>
                    {caption}
                </TableCaption>
            )}
            <StyledTable
                className={className}
                isFullWidth={isFullWidth}
                {...getTableProps()}
            >
                <TableHead>
                    {headerGroups.map((headerGroup: any) => (
                        <TableHeaderRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: ColumnInstance) => isColumnVisible(column) && (
                                <TableHeaderCell
                                    hasCellPadding={column.hasCellPadding}
                                    key={column}
                                    width={column.width}
                                    {...column.getHeaderProps(column.getSortByToggleProps({
                                        title: column.canSort
                                            ? `${texts.toggleSortTooltip} ${column.render('Header')}`
                                            : '',
                                    }))}
                                >
                                    {column.render('Header')}
                                    <IconWrapper isSorted={column.isSorted}>
                                        {renderSortIcon(column, hasUnsortedStateIcon)}
                                    </IconWrapper>
                                </TableHeaderCell>
                            ))}
                        </TableHeaderRow>
                    ))}
                </TableHead>
                <TableBody elevation={elevation} {...getTableBodyProps()}>
                    {/* USE A CONST (SEE TOP OF FILE) TO DETERMINE CORRECT DATA SOURCE FOR READING (PAGE OR ROWS) */}
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {dataSource(instance, Boolean(pagingComponent)).map((row: any) => {
                        prepareRow(row);

                        return (
                            <TableRow
                                isClickable={Boolean(onClickRow)}
                                key={row}
                                onClick={onClickRow
                                    ? (event: any) => {
                                        onClickRow(event, row);
                                    } : undefined}
                                {...row.getRowProps()}
                            >
                                {row.cells.map((cell: any) => isColumnVisible(cell.column) && (
                                    <TableCell
                                        hasCellPadding={cell.column.hasCellPadding}
                                        isClickable={Boolean(cell.column.onClick)}
                                        key={cell}
                                        onClick={cell.column.onClick
                                            ? (event: any) => {
                                                event.stopPropagation();
                                                cell.column.onClick(cell, row, event);
                                            } : undefined}
                                        {...cell.getCellProps()}
                                        width={cell.column.width}
                                    >
                                        <TableCellContent>
                                            {cell.render('Cell')}
                                        </TableCellContent>
                                    </TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
                {footerComponent && (
                    <TableFooter elevation={elevation}>
                        {footerComponent}
                    </TableFooter>
                )}
            </StyledTable>
            {pagingComponent && (
                <Paging>
                    {pagingComponent}
                </Paging>
            )}
        </>
    );
};

Table.defaultProps = {
    caption: null,
    className: '',
    elevation: Elevation.LEVEL_1,
    footerComponent: undefined,
    hasUnsortedStateIcon: true,
    isFullWidth: true,
    onClickRow: undefined,
    pagingComponent: undefined,
    texts: {
        toggleSortTooltip: null,
    },
};

export default Table;
