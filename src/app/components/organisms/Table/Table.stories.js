import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { tableColumns, tableColumnsWithGroupHeader } from './MockUp/tableColumns';
import { useSortBy, useTable } from 'react-table';
import Button from '../../molecules/Button/Button';
import Table from './Table';
import { tableData } from './MockUp/tableData';

export default { title: 'organisms/Table' };

function createLocalizedTableTexts(language = 'nl') {
    const localizedTexts = {
        toggleSortTooltip: language === 'en' ? 'Sort by' : 'Sorteer',
    };

    return localizedTexts;
}

function myTable(columns, data, disableSorting = false) {
    return useTable(
        {
            columns,
            data,
            disableSorting,
        },
        useSortBy,
    );
}

export const Configurable = () => {
    const [hasGroupHeader, setHasGroupHeader] = useState(false);
    const [disableSorting, setDisableSorting] = useState(false);

    return (
        /* @TODO: figure out how to rerender with the correct columns. Most likely with React.useEffect */
        <>
            <Button
                onClick={() => setHasGroupHeader(!hasGroupHeader)}
                variant={Button.variants.FILLED}
            >
                {hasGroupHeader ? 'WITH GROUP HEADER' : 'WITHOUT GROUP HEADER'}
            </Button>
            <Button
                onClick={() => setDisableSorting(!disableSorting)}
                variant={Button.variants.FILLED}
            >
                {disableSorting ? 'ENABLE SORTING' : 'DISABLE SORTING'}
            </Button>
            <div style={{ height: '20px' }} />
            <Table
                caption={text('Table caption', 'Table caption')}
                debug={boolean('Show table debug info', Table.defaultProps.debug)}
                elevation={select('Elevation', Table.elevations, Table.defaultProps.elevation)}
                instance={myTable(
                    hasGroupHeader ? tableColumnsWithGroupHeader() : tableColumns(),
                    tableData(),
                    disableSorting,
                )}
                isFullWidth={boolean('Is full width', Table.defaultProps.isFullWidth)}
                localizedTexts={createLocalizedTableTexts()}
            />
        </>
    );
};
