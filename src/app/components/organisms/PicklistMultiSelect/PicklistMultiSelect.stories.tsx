import { createLocalizedPagingTexts, createLocalizedTableTexts } from '../Table/mockup/tableFunctions';
import { IconType, Status } from '../../../types';
import PicklistMultiSelect, { PicklistMultiSelectPanelProps } from './PicklistMultiSelect';
import React, { FunctionComponent, useMemo } from 'react';
import tableData, { TableData } from '../Table/mockup/tableData';
import { boolean } from '@storybook/addon-knobs';
import createTable from '../../../utils/functions/createTable';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { getSelectedRowIds } from '../Table/utils/tableFunctions';
import { Row } from 'react-table';
import { tableColumnsPicklistMultiSelect } from '../Table/mockup/tableColumns';

export default { title: 'organisms/PicklistMultiSelect' };

export const Configurable: FunctionComponent = () => {
    const columns = useMemo(() => tableColumnsPicklistMultiSelect(), []);
    const data = useMemo(() => tableData(), []);
    const localizedTexts = createLocalizedTableTexts(DEFAULT_LOCALE);
    const paginatorTexts = createLocalizedPagingTexts(DEFAULT_LOCALE);

    const instance = createTable<TableData>(
        columns,
        data,
        {
            selectedRowIds: getSelectedRowIds(data),
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
        },
        {
            width: 100,
        },
        DEFAULT_LOCALE,
        { isMultiSelect: true }
    );

    const leftPanelProps: PicklistMultiSelectPanelProps = {
        iconType: IconType.ROUND_CHECK,
        status: Status.DEFAULT,
        textButton: 'Move',
        title: 'Left panel',
    };

    const rightPanelProps: PicklistMultiSelectPanelProps = {
        ...leftPanelProps,
        iconType: IconType.ROUND_EURO,
        title: 'Right panel',
    };

    const onSave = (rows: Row<TableData>[]): void => {
        console.log('on save rows:', rows);
    };

    return instance ? (
        <PicklistMultiSelect
            hasPaging={boolean('Has paging', true)}
            instance={instance}
            isDisabled={boolean('Is disabled', false)}
            leftPanelProps={leftPanelProps}
            onSave={onSave}
            paginatorTexts={paginatorTexts}
            rightPanelProps={rightPanelProps}
            tableTexts={localizedTexts}
        />
    ) : (
        <div>{'Loading...'}</div>
    );
};
