import {
    array,
    boolean,
    select,
    text,
} from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { tableColumns, tableColumnsWithGroupHeader } from './MockUp/tableColumns';
import { createTable } from './MockUp/createTable';
import SelectionControl from '../../molecules/SelectionControl/SelectionControl';
import Table from './Table';
import { tableData } from './MockUp/tableData';

export default { title: 'organisms/Table' };

function createLocalizedTableTexts(language = 'nl') {
    const localizedTexts = {
        paging: {
            page: language === 'en' ? 'Page' : 'Pagina',
            pageGoto: language === 'en' ? 'Go to page' : 'Ga naar pagina',
            pageOf: language === 'en' ? 'Of' : 'Van',
            pageShow: language === 'en' ? 'Show' : 'Toon',
            resultsOf: language === 'en' ? 'Results of' : 'Resultaten van de',
        },
        toggleSortTooltip: language === 'en' ? 'Sort by' : 'Sorteer',
    };

    return localizedTexts;
}

export const Configurable = () => {
    const [hasGroupHeader, setHasGroupHeader] = useState(false);
    const [disableSorting, setDisableSorting] = useState(false);

    return (
        /* @TODO: figure out how to rerender with the correct columns. Most likely with React.useEffect */
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
                hasAllPagingButtons={boolean('Has all paging buttons', Table.defaultProps.hasAllPagingButtons)}
                hasGoToPage={boolean('Has goto page', Table.defaultProps.hasGoToPage)}
                hasPageSizeSelector={boolean('Has pagesize selector', Table.defaultProps.hasPageSizeSelector)}
                hasPaging={boolean('Has paging', Table.defaultProps.hasPaging)}
                hasResultsOfText={boolean('Has results of text', Table.defaultProps.hasResultsOfText)}
                instance={createTable(
                    hasGroupHeader ? tableColumnsWithGroupHeader() : tableColumns(),
                    tableData(),
                    disableSorting,
                )}
                isFullWidth={boolean('Is full width', Table.defaultProps.isFullWidth)}
                localizedTexts={createLocalizedTableTexts()}
                pageSizes={array('Page sizes', [5, 10, 20, 50])}
            />
        </>
    );
};
