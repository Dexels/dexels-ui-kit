import {
    Cell,
    ColumnInstance,
    HeaderGroup,
    Row,
    TableInstance,
} from 'react-table';
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
import React, { SyntheticEvent } from 'react';
import { Elevation } from '../../../types';
import { renderSortIcon } from './utils/tableFunctions';

export interface TableProps<T extends object> {
    caption?: React.ReactNode;
    className?: string;
    elevation?: Elevation;
    footerComponent?: React.ReactNode;
    hasUnsortedStateIcon?: boolean;
    instance: TableInstance<T>;
    isFullWidth?: boolean;
    onClickRow?: (event: React.SyntheticEvent, row: Row<T>) => void;
    pagingComponent?: React.ReactNode;
    texts?: {
        toggleSortTooltip?: React.ReactNode;
    };
}

const dataSource = (instance: TableInstance, hasPaging: boolean) => (hasPaging ? instance.page : instance.rows);

export const Table = <T extends object>({
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
}: TableProps<T>): JSX.Element => {
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
                    {headerGroups.map((headerGroup: HeaderGroup) => (
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
                    {dataSource(instance, Boolean(pagingComponent)).map((row: Row<T>) => {
                        prepareRow(row);

                        return (
                            <TableRow
                                isClickable={Boolean(onClickRow)}
                                key={row}
                                onClick={onClickRow
                                    ? (event: SyntheticEvent) => {
                                        onClickRow(event, row);
                                    } : undefined}
                                {...row.getRowProps()}
                            >
                                {row.cells.map((cell: Cell) => isColumnVisible(cell.column) && (
                                    <TableCell
                                        hasCellPadding={cell.column.hasCellPadding}
                                        isClickable={Boolean(cell.column.onClick)}
                                        key={cell}
                                        onClick={cell.column.onClick
                                            ? (event: SyntheticEvent) => {
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
