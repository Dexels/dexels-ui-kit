import { IconType, Status } from '../../../types';
import PicklistMultiSelect, { PicklistMultiSelectPanelProps } from './PicklistMultiSelect';
import React, { FunctionComponent, useMemo } from 'react';
import tableData, { TableData } from '../Table/mockup/tableData';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import createTable from '../../../utils/functions/createTable';
import { tableColumns } from '../Table/mockup/tableColumns';

export default { title: 'organisms/PicklistMultiSelect' };

export const Configurable: FunctionComponent = () => {
    const columns = useMemo(() => tableColumns(false), []);
    const data = useMemo(() => tableData(), []);

    const leftPanelProps: PicklistMultiSelectPanelProps = {
        iconType: IconType.ARROWRIGHT,
        status: Status.DEFAULT,
        textButton: 'Move',
        title: 'Left panel',
    };

    const rightPanelProps: PicklistMultiSelectPanelProps = {
        ...leftPanelProps,
        iconType: IconType.ARROWLEFT,
        title: 'Right panel',
    };

    const instance = createTable<TableData>(
        columns,
        data,
        {
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
        }
    );

    const onSave = (): void => {
        action('On save');
    };

    return (
        <PicklistMultiSelect
            instanceSelectableEntries={instance}
            instanceSelectedEntries={instance}
            isDisabled={boolean('Is disabled', false)}
            leftPanelProps={leftPanelProps}
            onSave={onSave}
            rightPanelProps={rightPanelProps}
        />
    );
};
