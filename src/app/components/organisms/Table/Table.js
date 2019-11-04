// In this file we want to use prop spreading because React Table passes a lot of props
/* eslint-disable react/jsx-props-no-spreading */
import {
    IconWrapper,
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
import Paginator from './Paginator/Paginator';
import PropTypes from 'prop-types';
import React from 'react';
import { renderSortIcon } from './utils/tableFunctions';

const dataSource = (instance, hasPaging) => {
    if (hasPaging) {
        return instance.page;
    }

    return instance.rows;
};

const Table = ({
    caption,
    debug,
    elevation,
    hasUnsortedStateIcon,
    instance,
    isFullWidth,
    localizedTexts,
    onCellClick,
    onRowClick,
    pagingProps,
}) => (
    <>
        {/* {console.log('*********************** localizedTexts', localizedTexts)} */}
        {/* {console.log('*********************** rows', instance.rows)} */}

        {caption
        && (
            <TableCaption>
                {caption}
            </TableCaption>
        )}

        <StyledTable
            debug={debug}
            elevation={elevation}
            isFullWidth={isFullWidth}
            pageSizes={pagingProps.pageSizes}
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
                                        ? localizedTexts.toggleSortTooltip.concat(' '.concat(column.render('Header')))
                                        : '',
                                }))}
                            >
                                {/* {console.log('********************** column', column)} */}
                                {/* {console.log('********************** getSortByToggleProps',
                                    column.getSortByToggleProps())} */}
                                {column.render('Header')}
                                <IconWrapper isUnsorted={!column.isSorted}>
                                    {renderSortIcon(column, hasUnsortedStateIcon)}
                                </IconWrapper>
                            </TableHeaderCell>
                        ))}
                    </TableHeaderRow>
                ))}
            </TableHead>
            <TableBody {...instance.getTableBodyProps()}>
                {/* USE A CONST (SEE TOP OF FILE) TO DETERMINE CORRECT DATA SOURCE FOR READING (PAGE OR ROWS) */}
                {dataSource(instance, pagingProps.hasPaging).map((row) => instance.prepareRow(row) || (
                    <TableRow
                        isClickable={onRowClick !== undefined}
                        onClick={onRowClick
                            ? (event) => {
                                onRowClick(event, row);
                            }
                            : undefined}
                        {...row.getRowProps()}
                    >
                        {/* {console.log('********************** instance row', row.index, row.values)} */}

                        {row.cells.map((cell) => (
                            <TableCell
                                isClickable={onCellClick !== undefined}
                                key={cell}
                                onClick={onCellClick
                                    ? (event) => {
                                        onCellClick(event, row);
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
            <TableFooter>
                {/* @TODO: come up with something usefull here */}
            </TableFooter>
        </StyledTable>
        {pagingProps.hasPaging
        && (
            <Paginator
                hasAllPagingButtons={pagingProps.hasAllPagingButtons
                    ? pagingProps.hasAllPagingButtons
                    : Table.defaultProps.pagingProps.hasAllPagingButtons}
                hasGoToPage={pagingProps.hasGoToPage
                    ? pagingProps.hasGoToPage
                    : Table.defaultProps.pagingProps.hasGoToPage}
                hasPageSizeSelector={pagingProps.hasPageSizeSelector
                    ? pagingProps.hasPageSizeSelector
                    : Table.defaultProps.pagingProps.hasPageSizeSelector}
                instance={instance}
                localizedTexts={{
                    page: localizedTexts.paging.page,
                    pageGoto: localizedTexts.paging.pageGoto,
                    pageOf: localizedTexts.paging.pageOf,
                    pageShow: localizedTexts.paging.pageShow,
                    resultsOf: localizedTexts.paging.resultsOf,
                }}
                pageSizes={pagingProps.pageSizes}
                useResultsOfText={pagingProps.useResultsOfText && localizedTexts.paging.resultsOf
                    ? pagingProps.useResultsOfText
                    : false}
            />
        )}
    </>
);

Table.elevations = TABLE_ELEVATIONS;
Table.pageSizes = TABLE_PAGE_SIZES;

Table.propTypes = {
    caption: PropTypes.string,
    debug: PropTypes.bool,
    elevation: PropTypes.oneOf(Object.values(Table.elevations)),
    hasUnsortedStateIcon: PropTypes.bool,
    instance: PropTypes.shape(PropTypes.node.isRequired).isRequired,
    isFullWidth: PropTypes.bool,
    localizedTexts: PropTypes.shape({
        paging: {
            page: PropTypes.string,
            pageGoto: PropTypes.string,
            pageOf: PropTypes.string,
            pageShow: PropTypes.string,
            resultsOf: PropTypes.string,
        },
        toggleSortTooltip: PropTypes.string,
    }),
    onCellClick: PropTypes.func,
    onRowClick: PropTypes.func,
    pagingProps: PropTypes.shape({
        hasAllPagingButtons: PropTypes.bool,
        hasGoToPage: PropTypes.bool,
        hasPageSizeSelector: PropTypes.bool,
        hasPaging: PropTypes.bool,
        pageSizes: PropTypes.arrayOf(PropTypes.number),
        useResultsOfText: PropTypes.bool,
    }),
};

Table.defaultProps = {
    caption: '',
    debug: false,
    elevation: Table.elevations.LEVEL_1,
    hasUnsortedStateIcon: true,
    isFullWidth: true,
    localizedTexts: {
        paging: {
            page: 'Page',
            pageGoto: 'Go to page',
            pageOf: 'Of',
            pageShow: 'Show',
            resultsOf: 'Results of',
        },
        toggleSortTooltip: 'Sort by',
    },
    onCellClick: undefined,
    onRowClick: undefined,
    pagingProps: {
        hasAllPagingButtons: true,
        hasGoToPage: false,
        hasPageSizeSelector: false,
        hasPaging: true,
        pageSizes: Table.pageSizes,
        useResultsOfText: true,
    },
};

export default Table;
