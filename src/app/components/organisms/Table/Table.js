// In this file we want to use prop spreading because React Table passes a lot of props
/* eslint-disable react/jsx-props-no-spreading */
import {
    IconWrapper,
    Paging,
    StyledTable,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeaderCell,
    TableHeaderRow,
    TableRow,
} from './Table.sc';
import { TABLE_ELEVATIONS, TABLE_PAGE_SIZES } from './Table.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { renderSortIcon } from './utils/tableFunctions';

const dataSource = (instance, hasPaging) => (hasPaging ? instance.page : instance.rows);

const Table = ({
    caption,
    debug,
    elevation,
    footerComponent,
    hasUnsortedStateIcon,
    instance,
    isFullWidth,
    onRowClick,
    pagingComponent,
    texts,
}) => (
    <>
        {caption && (
            <TableCaption>
                {caption}
            </TableCaption>
        )}

        <StyledTable
            debug={debug}
            elevation={elevation}
            isFullWidth={isFullWidth}
            {...instance.getTableProps()}
        >
            <TableHead>
                {instance.headerGroups.map((headerGroup) => (
                    <TableHeaderRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <TableHeaderCell
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
                        ))}
                    </TableHeaderRow>
                ))}
            </TableHead>
            <TableBody {...instance.getTableBodyProps()}>
                {/* USE A CONST (SEE TOP OF FILE) TO DETERMINE CORRECT DATA SOURCE FOR READING (PAGE OR ROWS) */}
                {dataSource(instance, pagingComponent !== undefined).map((row) => instance.prepareRow(row) || (
                    <TableRow
                        isClickable={onRowClick !== undefined}
                        onClick={onRowClick
                            ? (event) => {
                                onRowClick(event, row);
                            }
                            : undefined}
                        {...row.getRowProps()}
                    >
                        {row.cells.map((cell) => (
                            <TableCell
                                isClickable={cell.column.onClick !== undefined}
                                key={cell}
                                onClick={cell.column.onClick
                                    ? (event) => {
                                        cell.column.onClick(cell, row, event);
                                    }
                                    : undefined}
                                {...cell.getCellProps()}
                            >
                                {cell.render('Cell')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
            {footerComponent && (
                <TableFooter>
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

Table.elevations = TABLE_ELEVATIONS;
Table.pageSizes = TABLE_PAGE_SIZES;

Table.propTypes = {
    caption: PropTypes.string,
    debug: PropTypes.bool,
    elevation: PropTypes.oneOf(Object.values(Table.elevations)),
    footerComponent: PropTypes.node,
    hasUnsortedStateIcon: PropTypes.bool,
    instance: PropTypes.shape({
        getTableBodyProps: PropTypes.func.isRequired,
        getTableProps: PropTypes.func.isRequired,
        headerGroups: PropTypes.array.isRequired,
        prepareRow: PropTypes.func.isRequired,
    }).isRequired,
    isFullWidth: PropTypes.bool,
    onRowClick: PropTypes.func,
    pagingComponent: PropTypes.node,
    texts: PropTypes.shape({
        toggleSortTooltip: PropTypes.string,
    }),
};

Table.defaultProps = {
    caption: '',
    debug: false,
    elevation: Table.elevations.LEVEL_1,
    footerComponent: undefined,
    hasUnsortedStateIcon: true,
    isFullWidth: true,
    onRowClick: undefined,
    pagingComponent: undefined,
    texts: {
        toggleSortTooltip: 'Sort by',
    },
};

export default Table;
