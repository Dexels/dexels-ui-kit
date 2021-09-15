import { boolean, number, text } from '@storybook/addon-knobs';
import { createLocalizedPagingTexts, createLocalizedTableTexts } from '../Table/mockup/tableFunctions';
import { IconType, Status } from '../../../types';
import { PicklistMultiSelect, PicklistMultiSelectPanelProps } from './PicklistMultiSelect';
import React, { FunctionComponent, useMemo, useState } from 'react';
import tableData, { TableData } from '../Table/mockup/tableData';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { picklistMultiSelectFacade } from '../../../utils/functions/arrayObjectFunctions';
import { tableColumnsPicklistMultiSelect } from '../Table/mockup/tableColumns';

export default { title: 'organisms/PicklistMultiSelect' };

export const Configurable: FunctionComponent = () => {
    const columns = useMemo(() => tableColumnsPicklistMultiSelect(), []);
    const [data] = useState(tableData());
    const localizedTexts = createLocalizedTableTexts(DEFAULT_LOCALE);
    const paginatorTexts = createLocalizedPagingTexts(DEFAULT_LOCALE);

    const leftPanelProps: PicklistMultiSelectPanelProps = {
        iconType: IconType.ROUND_CHECK,
        title: 'Left panel',
    };

    const rightPanelProps: PicklistMultiSelectPanelProps = {
        footer: <div style={{ fontWeight: 600 }}>{'Some info could be put here'}</div>,
        iconType: IconType.ROUND_EURO,
        status: Status.DEFAULT,
        title: 'Right panel',
    };

    const onChange = <T extends TableData>(removed: T[], added: T[], updated: T[]): void => {
        console.log('on change removed:', removed);
        console.log('on change added:', added);
        console.log('on change updated:', updated);
    };

    const sortBy = [
        {
            desc: false,
            id: 'lastName',
        },
        {
            desc: false,
            id: 'firstName',
        },
    ];

    return columns && data ? (
        <PicklistMultiSelect
            addButtonText={text('Add button text', 'Add')}
            availablePanelProps={leftPanelProps}
            columns={columns}
            data={picklistMultiSelectFacade(data, 'id', 'isRowSelected')}
            fitToScreen={boolean('Fit to screen', false)}
            hasPaging={boolean('Has paging', true)}
            isDisabled={boolean('Is disabled', false)}
            isLoading={boolean('Is loading', false)}
            loadingNrOfRows={number('Loading nr of rows', 3)}
            onChange={onChange}
            options={{ sortBy }}
            paginatorTexts={paginatorTexts}
            removeButtonText={text('Remove button text', 'Remove')}
            selectedPanelProps={rightPanelProps}
            tableTexts={localizedTexts}
        />
    ) : (
        <div>{'Loading...'}</div>
    );
};
