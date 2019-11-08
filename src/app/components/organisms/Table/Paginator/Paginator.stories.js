import {
    array,
    boolean,
} from '@storybook/addon-knobs';
import { createLocalizedPagingTexts } from '../MockUp/tableFunctions';
import { createTable } from '../MockUp/createTable';
import Paginator from './Paginator';
import React from 'react';
import { tableColumns } from '../MockUp/tableColumns';
import { tableData } from '../MockUp/tableData';

export default { title: 'organisms/Table/Paginator' };

export const Configurable = () => {
    const instance = createTable(
        tableColumns(),
        tableData(),
    );

    const localizedTexts = createLocalizedPagingTexts();

    return (
        <Paginator
            hasAllPagingButtons={boolean(
                'Has all paging buttons',
                Paginator.defaultProps.hasAllPagingButtons,
            )}
            hasGoToPage={boolean('Has goto page', Paginator.defaultProps.hasGoToPage)}
            hasPageSizeSelector={boolean(
                'Has page size selector',
                Paginator.defaultProps.hasPageSizeSelector,
            )}
            instance={instance}
            pageSizes={array('Page sizes', [5, 10, 20, 50])}
            texts={{
                page: localizedTexts.page,
                pageGoto: localizedTexts.pageGoto,
                pageOf: localizedTexts.pageOf,
                resultsOf: localizedTexts.resultsOf,
                rowsPerPage: localizedTexts.rowsPerPage,
                show: localizedTexts.show,
            }}
            useResultsOfText={boolean('Use results of text', Paginator.defaultProps.useResultsOfText)}
        />
    );
};
