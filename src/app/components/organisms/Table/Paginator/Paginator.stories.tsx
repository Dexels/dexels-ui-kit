import {
    array,
    boolean,
} from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { createLocalizedPagingTexts } from '../mockup/tableFunctions';
import { createTable } from '../mockup/createTable';
import Paginator from './Paginator';
import SelectionControl from '../../../molecules/SelectionControl/SelectionControl';
import { tableColumns } from '../mockup/tableColumns';
import { tableData } from '../mockup/tableData';
import { TableInstance } from 'react-table';

export default { title: 'organisms/Table/Paginator' };

export const Configurable = () => {
    const [isNL, setIsNL] = useState(true);
    const initialState = { pageIndex: 0 };
    const instance = createTable(tableColumns(), tableData(), initialState);
    const localizedTexts = createLocalizedPagingTexts(isNL ? 'nl' : 'en');

    return (
        <>
            <SelectionControl
                isChecked={isNL}
                label={isNL ? 'Is NL' : 'Is EN'}
                name={'LANGUAGE'}
                onChange={() => setIsNL(!isNL)}
                value={'isNL'}
            />
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
                instance={instance as unknown as TableInstance}
                pageSizes={array('Page sizes', ['5', '10', '20', '50'])}
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
        </>
    );
};
