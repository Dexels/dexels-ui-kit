// In this file we want to use prop spreading because React Table passes a lot of props
/* eslint-disable react/jsx-props-no-spreading */
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
    debug?: boolean;
    elevation?: Elevation;
    footerComponent?: React.ReactNode;
    hasUnsortedStateIcon?: boolean;
    instance: {
        getTableBodyProps: (...args: any[]) => any;
        getTableProps: (...args: any[]) => any;
        headerGroups: any[];
        prepareRow: (...args: any[]) => any;
    };
    isFullWidth?: boolean;
    onClickRow?: (...args: any[]) => any;
    pagingComponent?: React.ReactNode;
    texts?: {
        toggleSortTooltip?: React.ReactNode;
    };
}

const dataSource = (instance: any, hasPaging: boolean) => (hasPaging ? instance.page : instance.rows);

export const Table: React.FunctionComponent<TableProps> = ({
    caption,
    className,
    debug,
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

    return (
        <>
            {caption && (
                <TableCaption>
                    {caption}
                </TableCaption>
            )}
            <StyledTable
                className={className}
                debug={debug}
                isFullWidth={isFullWidth}
                {...getTableProps()}
            >
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableHeaderRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => (
                                <>
                                    {console.log(column, column.getSortByToggleProps())}
                                    <TableHeaderCell
                                        hasCellPadding={column.hasCellPadding}
                                        key={column}
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
                                </>
                            ))}
                        </TableHeaderRow>
                    ))}
                </TableHead>
                <TableBody elevation={elevation} {...getTableBodyProps()}>
                    {/* USE A CONST (SEE TOP OF FILE) TO DETERMINE CORRECT DATA SOURCE FOR READING (PAGE OR ROWS) */}
                    {dataSource(instance, Boolean(pagingComponent)).map((row: any) => prepareRow(row) || (
                        <TableRow
                            isClickable={Boolean(onClickRow)}
                            onClick={onClickRow
                                ? (event) => {
                                    onClickRow(event, row);
                                } : undefined}
                            {...row.getRowProps()}
                        >
                            {row.cells.map((cell: any) => (
                                <TableCell
                                    hasCellPadding={cell.column.hasCellPadding}
                                    isClickable={Boolean(cell.column.onClick)}
                                    key={cell}
                                    onClick={cell.column.onClick
                                        ? (event) => {
                                            event.stopPropagation();
                                            cell.column.onClick(cell, row, event);
                                        } : undefined}
                                    {...cell.getCellProps()}
                                >
                                    <TableCellContent>
                                        {cell.render('Cell')}
                                    </TableCellContent>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
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
    debug: false,
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
