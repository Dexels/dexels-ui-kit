import {
    boolean,
    select,
    text,
} from '@storybook/addon-knobs';
import { createLocalizedTableTexts, getTableRow } from './MockUp/tableFunctions';
import React, { useState } from 'react';
import { tableColumns, tableColumnsWithGroupHeader } from './MockUp/tableColumns';
import { createTable } from './MockUp/createTable';
import Paginator from './Paginator/Paginator';
import SelectionControl from '../../molecules/SelectionControl/SelectionControl';
import Table from './Table';
import { tableData } from './MockUp/tableData';

export default { title: 'organisms/Table' };

/* @TODO: figure out how to rerender the table instance after state changes. Most likely with React.useEffect */
export const Configurable = () => {
    const [hasGroupHeader, setHasGroupHeader] = useState(false);
    const [disableSorting, setDisableSorting] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const instance = createTable(
        hasGroupHeader ? tableColumnsWithGroupHeader() : tableColumns(),
        tableData(),
        disableSorting,
    );

    return (
        <>
            <div style={{ padding: '0 0 30px' }}>
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
                <SelectionControl
                    isChecked={isFooterVisible}
                    label={isFooterVisible ? 'WITHOUT TABLE FOOTER' : 'WITH TABLE FOOTER'}
                    name={'FOOTER'}
                    onChange={() => setIsFooterVisible(!isFooterVisible)}
                    value={'isFooterVisible'}
                />
            </div>
            <Table
                caption={text('Table caption', 'Table caption')}
                debug={boolean('Show table debug info', Table.defaultProps.debug)}
                elevation={select('Elevation', Table.elevations, Table.defaultProps.elevation)}
                footerComponent={isFooterVisible && (
                    <tr style={{
                        backgroundColor: 'yellow',
                        height: '50px',
                    }}
                    >
                        {/* JUST COUNT COLUMNS, BUT THIS DOESN'T MIND HIDDEN COLUMNS. OK WITH THAT */}
                        <td colSpan={instance.columns.length}>
                            {'Some text'}
                        </td>
                    </tr>
                )}
                hasUnsortedStateIcon={boolean('Has unsorted state icon', Table.defaultProps.hasUnsortedStateIcon)}
                instance={instance}
                isFullWidth={boolean('Is full width', Table.defaultProps.isFullWidth)}
                onRowClick={getTableRow}
                pagingComponent={(
                    <Paginator
                        instance={instance}
                    />
                )}
                texts={createLocalizedTableTexts()}
            />
        </>
    );
};
