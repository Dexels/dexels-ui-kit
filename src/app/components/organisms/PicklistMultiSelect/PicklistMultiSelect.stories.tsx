import { createLocalizedPagingTexts, createLocalizedTableTexts } from '../Table/mockup/tableFunctions';
import { IconType, Status } from '../../../types';
import PicklistMultiSelect, { PicklistMultiSelectPanelProps } from './PicklistMultiSelect';
import React, { FunctionComponent, useMemo } from 'react';
import tableData, { TableData } from '../Table/mockup/tableData';
import { boolean } from '@storybook/addon-knobs';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { tableColumnsPicklistMultiSelect } from '../Table/mockup/tableColumns';

export default { title: 'organisms/PicklistMultiSelect' };

export const Configurable: FunctionComponent = () => {
    const columns = useMemo(() => tableColumnsPicklistMultiSelect(), []);
    const data = useMemo(() => tableData(), []);
    const localizedTexts = createLocalizedTableTexts(DEFAULT_LOCALE);
    const paginatorTexts = createLocalizedPagingTexts(DEFAULT_LOCALE);

    const leftPanelProps: PicklistMultiSelectPanelProps<TableData> = {
        data: data.filter((row) => !row.isRowSelected),
        iconType: IconType.ROUND_CHECK,
        status: Status.DEFAULT,
        textButton: 'Move',
        title: 'Left panel',
    };

    const rightPanelProps: PicklistMultiSelectPanelProps<TableData> = {
        ...leftPanelProps,
        data: data.filter((row) => row.isRowSelected),
        iconType: IconType.ROUND_EURO,
        title: 'Right panel',
    };

    const onChange = (removed: TableData[], added: TableData[]): void => {
        console.log('on change removed:', removed);
        console.log('on change added:', added);
    };

    return columns && data ? (
        <PicklistMultiSelect
            availablePanelProps={leftPanelProps}
            columns={columns}
            hasPaging={boolean('Has paging', true)}
            isDisabled={boolean('Is disabled', false)}
            onChange={onChange}
            paginatorTexts={paginatorTexts}
            selectedPanelProps={rightPanelProps}
            sortBy={[
                {
                    desc: false,
                    id: 'lastName',
                },
                {
                    desc: false,
                    id: 'firstName',
                },
            ]}
            tableTexts={localizedTexts}
        />
    ) : (
        <div>{'Loading...'}</div>
    );
};
