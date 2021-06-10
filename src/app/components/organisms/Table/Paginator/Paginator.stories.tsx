import { array, boolean } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import { tableData, TableData } from '../mockup/tableData';
import { createLocalizedPagingTexts } from '../mockup/tableFunctions';
import { createTable } from '../../../../utils/functions/createTable';
import Paginator from './Paginator';
import SelectionControl from '../../../molecules/SelectionControl/SelectionControl';
import { tableColumns } from '../mockup/tableColumns';

export default { title: 'organisms/Table/Paginator' };

export const Configurable: FunctionComponent = () => {
    const [isNL, setIsNL] = useState(true);
    const localizedTexts = createLocalizedPagingTexts(isNL ? 'nl' : 'en');
    const data = tableData();

    const instance = createTable<TableData>(tableColumns(false), data, {
        pageIndex: 0,
        sortBy: [
            {
                desc: false,
                id: 'lastName',
            },
            {
                desc: false,
                id: 'firstName',
            },
        ],
    });

    return (
        <>
            <SelectionControl
                isChecked={isNL}
                label={isNL ? 'Is NL' : 'Is EN'}
                name={'LANGUAGE'}
                onChange={(): void => {
                    setIsNL(!isNL);
                }}
                value={'isNL'}
            />
            <Paginator
                hasAllPagingButtons={boolean('Has all paging buttons', true)}
                hasGoToPage={boolean('Has goto page', false)}
                hasPageSizeSelector={boolean('Has page size selector', true)}
                instance={instance}
                pageSizes={array('Page sizes', ['5', '10', '20', '50'])}
                texts={{
                    page: localizedTexts.page,
                    pageGoto: localizedTexts.pageGoto,
                    pageOf: localizedTexts.pageOf,
                    resultsOf: localizedTexts.resultsOf,
                    rowsPerPage: localizedTexts.rowsPerPage,
                    show: localizedTexts.show,
                }}
                useResultsOfText={boolean('Use results of text', true)}
            />
        </>
    );
};
