import {
    StyledTable,
    StyledTableBody,
    StyledTableCell,
    StyledTableHead,
    StyledTableHeaderCell,
    StyledTableRow,
} from './Table.sc';
import PropTypes from 'prop-types';
import React from 'react';
import { TABLE_ELEVATIONS } from './Table.consts';

/* DISABLE SOME LINES BECAUSE OF THE PROPS SPREADING LINT RULE */
const Table = ({
    elevation,
    instance,
    isFullWidth,
}) => (
    // console.log('*********************** rows', instance.rows);

    /* eslint-disable-next-line */
    <StyledTable elevation={elevation} isFullWidth={isFullWidth} {...instance.getTableProps()}>
        <StyledTableHead>
            {instance.headerGroups.map((headerGroup) => (
                /* eslint-disable-next-line */
                <StyledTableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        /* eslint-disable-next-line */
                        <StyledTableHeaderCell key={column} {...column.getHeaderProps()}>
                            {column.render('Header')}
                        </StyledTableHeaderCell>
                    ))}
                </StyledTableRow>
            ))}
        </StyledTableHead>
        {/* eslint-disable-next-line */}
        <StyledTableBody {...instance.getTableBodyProps()}>
            {instance.rows.map((row) => instance.prepareRow(row) || (
                /* eslint-disable-next-line */
                <StyledTableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                        /* eslint-disable-next-line */
                        <StyledTableCell key={cell} {...cell.getCellProps()}>
                            {/* {console.log(cell, cell.render('Cell'))} */}
                            {cell.render('Cell') !== null ? cell.render('Cell') : ''}
                        </StyledTableCell>
                    ))}
                </StyledTableRow>
            ))}
        </StyledTableBody>
    </StyledTable>
);

Table.elevations = TABLE_ELEVATIONS;

Table.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Table.elevations)),
    instance: PropTypes.shape(PropTypes.node.isRequired).isRequired,
    isFullWidth: PropTypes.bool,
};

Table.defaultProps = {
    elevation: Table.elevations.LEVEL_1,
    isFullWidth: true,
};

export default Table;
