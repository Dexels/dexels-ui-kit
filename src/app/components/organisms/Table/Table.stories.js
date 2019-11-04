import {
    array,
    boolean,
    select,
    text,
} from '@storybook/addon-knobs';
import { createLocalizedTableTexts, getTableCell, getTableRow } from './MockUp/tableFunctions';
import React, { useState } from 'react';
import { tableColumns, tableColumnsWithGroupHeader } from './MockUp/tableColumns';
import { createTable } from './MockUp/createTable';
import SelectionControl from '../../molecules/SelectionControl/SelectionControl';
import Table from './Table';
import { tableData } from './MockUp/tableData';

export default { title: 'organisms/Table' };

/* @TODO: figure out how to rerender the table instance after state changes. Most likely with React.useEffect */
export const Configurable = () => {
    const [hasGroupHeader, setHasGroupHeader] = useState(false);
    const [disableSorting, setDisableSorting] = useState(false);

    return (
        <>
            <SelectionControl
                isChecked={hasGroupHeader}
                label={hasGroupHeader ? 'WITH GROUP HEADER' : 'WITHOUT GROUP HEADER'}
                name={'GROUPHEADER'}
                onChange={() => setHasGroupHeader(!hasGroupHeader)}
                value={'hasGroupHeader'}
            />
            <SelectionControl
                isChecked={disableSorting}
                label={disableSorting ? 'ENABLE SORTING' : 'DISABLE SORTING'}
                name={'SORTING'}
                onChange={() => setDisableSorting(!disableSorting)}
                value={'disableSorting'}
            />
            <div style={{ height: '20px' }} />
            <Table
                caption={text('Table caption', 'Table caption')}
                debug={boolean('Show table debug info', Table.defaultProps.debug)}
                elevation={select('Elevation', Table.elevations, Table.defaultProps.elevation)}
                hasUnsortedStateIcon={boolean('Has unsorted state icon', Table.defaultProps.hasUnsortedStateIcon)}
                instance={createTable(
                    hasGroupHeader ? tableColumnsWithGroupHeader() : tableColumns(),
                    tableData(),
                    disableSorting,
                )}
                isFullWidth={boolean('Is full width', Table.defaultProps.isFullWidth)}
                localizedTexts={createLocalizedTableTexts()}
                onCellClick={getTableCell}
                onRowClick={getTableRow}
                pagingProps={{
                    hasAllPagingButtons: boolean(
                        'Has all paging buttons',
                        Table.defaultProps.pagingProps.hasAllPagingButtons,
                    ),
                    hasGoToPage: boolean('Has goto page', Table.defaultProps.pagingProps.hasGoToPage),
                    hasPageSizeSelector: boolean(
                        'Has page size selector',
                        Table.defaultProps.pagingProps.hasPageSizeSelector,
                    ),
                    hasPaging: boolean('Has paging', Table.defaultProps.pagingProps.hasPaging),
                    pageSizes: array('Page sizes', [5, 10, 20, 50]),
                    useResultsOfText: boolean('Use results of text', Table.defaultProps.pagingProps.useResultsOfText),
                }}
            />
        </>
    );
};
