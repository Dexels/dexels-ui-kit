import {
    boolean,
    select,
    text,
} from '@storybook/addon-knobs';
import { createLocalizedPagingTexts, createLocalizedTableTexts, getTableRow } from './mockup/tableFunctions';
import React, { useState } from 'react';
import { tableColumns, tableColumnsWithGroupHeader } from './mockup/tableColumns';
import { tableData, TableData } from './mockup/tableData';
import { createTable } from './mockup/createTable';
import { Elevation } from '../../../types';
import notes from './notes.md';
import Paginator from './Paginator/Paginator';
import SelectionControl from '../../molecules/SelectionControl/SelectionControl';
import Table from './Table';

export default {
    parameters: {
        notes,
    },
    title: 'organisms/Table',
};

/* @TODO: figure out how to rerender the table instance after state changes. Most likely with React.useEffect */
export const Configurable = () => {
    const [isNL, setIsNL] = useState(true);
    const [hasGroupHeader, setHasGroupHeader] = useState(false);
    const [disableSorting, setDisableSorting] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const data = tableData();

    const instance = createTable<TableData>(
        hasGroupHeader ? tableColumnsWithGroupHeader() : tableColumns(data),
        data,
        disableSorting,
    );

    return (
        <>
            <div style={{ padding: '0 0 30px' }}>
                <SelectionControl
                    isChecked={isNL}
                    label={isNL ? 'Is NL' : 'Is EN'}
                    name={'LANGUAGE'}
                    onChange={() => setIsNL(!isNL)}
                    value={'isNL'}
                />
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
            {!instance && (
                <div>
                    {'Loading...'}
                </div>
            )}
            {instance && (
                <Table
                    caption={text('Table caption', 'Table caption')}
                    elevation={select('Elevation', Elevation, Table.defaultProps.elevation)}
                    footerComponent={isFooterVisible && (
                        <tr style={{
                            backgroundColor: 'yellow',
                            height: '50px',
                        }}
                        >
                            {/* JUST COUNT COLUMNS, BUT THIS DOESN'T TAKE HIDDEN COLUMNS INTO ACCOUNT.
                            OK WITH THAT FOR NOW IN HERE */}
                            <td colSpan={instance.columns.length}>
                                {'Some text'}
                            </td>
                        </tr>
                    )}
                    hasUnsortedStateIcon={boolean('Has unsorted state icon', Table.defaultProps.hasUnsortedStateIcon)}
                    instance={instance}
                    isFullWidth={boolean('Is full width', Table.defaultProps.isFullWidth)}
                    onClickRow={getTableRow}
                    pagingComponent={(
                        <Paginator
                            instance={instance as any}
                            texts={createLocalizedPagingTexts(isNL ? 'nl' : 'en')}
                        />
                    )}
                    texts={createLocalizedTableTexts(isNL ? 'nl' : 'en')}
                />
            )}
        </>
    );
};
