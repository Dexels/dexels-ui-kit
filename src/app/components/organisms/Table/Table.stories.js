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

function myTable(columns, data) {
    return useTable(
        {
            columns,
            data,
        },
        useSortBy,
    );
}

export const Configurable = () => {
    const [hasGroupHeader, setHasGroupHeader] = useState(false);

    return (
        /* @TODO: figure out how to rerender with the correct columns. Most likely with React.useEffect */
        <>
            <Button
                onClick={() => setHasGroupHeader(!hasGroupHeader)}
                variant={Button.variants.FILLED}
            >
                {hasGroupHeader ? 'WITH GROUP HEADER' : 'WITHOUT GROUP HEADER'}
            </Button>
            <div style={{ height: '20px' }} />
            <Table
                caption={text('Table caption', 'Table caption')}
                debug={boolean('Show debug info', Table.defaultProps.debug)}
                elevation={select('Elevation', Table.elevations, Table.defaultProps.elevation)}
                instance={myTable(hasGroupHeader ? tableColumnsWithGroupHeader() : tableColumns(), tableData())}
                isFullWidth={boolean('Is full width', Table.defaultProps.isFullWidth)}
                localizedTexts={createLocalizedTableTexts()}
            />
        </>
    );
};
