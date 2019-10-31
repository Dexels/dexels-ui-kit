import {
    StyledTable,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableHeaderRow,
    TableRow,
} from './Table.sc';
import PropTypes from 'prop-types';
import React from 'react';
import { renderSortIcon } from './utils/tableFunctions';
import { TABLE_ELEVATIONS } from './Table.consts';

/* DISABLE SOME LINES BECAUSE OF THE PROPS SPREADING LINT RULE */
/* eslint-disable */
const Table = ({
    caption,
    debug,
    elevation,
    instance,
    isFullWidth,
    localizedTexts,
}) => (
    // console.log('*********************** rows', instance.rows);

    <>
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
            {...instance.getTableProps()}
        >
            <TableHead>
                {instance.headerGroups.map((headerGroup) => (
                    <TableHeaderRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <TableHeaderCell
                                key={column}
                                {...column.getHeaderProps(column.getSortByToggleProps({ title: column.canSort ? localizedTexts.toggleSortTooltip : '' }))}
                            >
                                {/* {console.log('********************** column', column)} */}
                                {/* {console.log('********************** getSortByToggleProps', column.getSortByToggleProps())} */}
                                {column.render('Header')}
                                {renderSortIcon(column)}
                            </TableHeaderCell>
                        ))}
                    </TableHeaderRow>
                ))}
            </TableHead>
            <TableBody {...instance.getTableBodyProps()}>
                {instance.rows.map((row) => instance.prepareRow(row) || (
                    <TableRow {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                            <TableCell key={cell} {...cell.getCellProps()}>
                                {cell.render('Cell') !== null ? cell.render('Cell') : ''}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </StyledTable>
    </>
);

Table.elevations = TABLE_ELEVATIONS;

Table.propTypes = {
    caption: PropTypes.string,
    debug: PropTypes.bool,
    elevation: PropTypes.oneOf(Object.values(Table.elevations)),
    instance: PropTypes.shape(PropTypes.node.isRequired).isRequired,
    isFullWidth: PropTypes.bool,
    localizedTexts: PropTypes.shape({
        toggleSortTooltip: PropTypes.string,
    }),
};

Table.defaultProps = {
    caption: '',
    debug: false,
    elevation: Table.elevations.LEVEL_1,
    isFullWidth: true,
    localizedTexts: {
        toggleSortTooltip: 'Sort by',
    },
};

export default Table;
