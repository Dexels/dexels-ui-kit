import { array, boolean, number, select, text } from '@storybook/addon-knobs';
import {
    createLocalizedPagingTexts,
    createLocalizedTableTexts,
    getTableFooter,
    getTableRow,
} from './mockup/tableFunctions';
import { Elevation, IconType } from '../../../types';
import React, { FunctionComponent, useMemo, useState } from 'react';
import { tableColumns, tableColumnsWithGroupHeader } from './mockup/tableColumns';
import { tableData, TableData } from './mockup/tableData';
import CardNoResults from '../../molecules/CardNoResults/CardNoResults';
import { createTable } from '../../../utils/functions/createTable';
import notes from './notes.md';
import Paginator from './Paginator/Paginator';
import SelectionControl from '../../molecules/SelectionControl/SelectionControl';
import { Table } from './Table';

export default {
    parameters: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        notes,
    },
    title: 'organisms/Table',
};

// @TODO: figure out how to rerender the table instance after state changes. Most likely with useEffect
export const Configurable: FunctionComponent = () => {
    const [isNL, setIsNL] = useState(true);
    const localizedTexts = createLocalizedTableTexts(isNL ? 'nl' : 'en');
    const [hasGroupHeader, setHasGroupHeader] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const columns = useMemo(() => tableColumns(), []);
    const columnsWithGroupHeader = useMemo(() => tableColumnsWithGroupHeader(), []);

    const data = useMemo(() => {
        if (isEmpty) {
            return [] as TableData[];
        }

        return tableData();
    }, [isEmpty]);

    const instance = createTable<TableData>(
        hasGroupHeader ? columnsWithGroupHeader : columns,
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

    return (
        <>
            <div style={{ padding: '0 0 30px' }}>
                <SelectionControl
                    isChecked={isNL}
                    label={isNL ? 'Is NL' : 'Is EN'}
                    name="LANGUAGE"
                    onChange={(): void => {
                        setIsNL(!isNL);
                    }}
                    value="isNL"
                />
                <SelectionControl
                    isChecked={isEmpty}
                    label={isEmpty ? 'Empty table' : 'Not an empty table'}
                    name="ISEMPTY   "
                    onChange={(): void => {
                        setIsEmpty(!isEmpty);
                    }}
                    value="isEmpty"
                />
                <SelectionControl
                    isChecked={hasGroupHeader}
                    label={hasGroupHeader ? 'With group header' : 'Without group header'}
                    name="GROUPHEADER"
                    onChange={(): void => {
                        setHasGroupHeader(!hasGroupHeader);
                    }}
                    value="hasGroupHeader"
                />
                <SelectionControl
                    isChecked={isFooterVisible}
                    label={isFooterVisible ? 'With table footer' : 'Without table footer'}
                    name="FOOTER"
                    onChange={(): void => {
                        setIsFooterVisible(!isFooterVisible);
                    }}
                    value="isFooterVisible"
                />
            </div>
            {instance ? (
                <Table<TableData>
                    caption={text('Table caption', 'Table caption')}
                    elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
                    footer={
                        isFooterVisible && (
                            <div
                                style={{
                                    height: '50px',
                                }}
                            >
                                {'Footer text or some component, anything can be placed here'}
                            </div>
                        )
                    }
                    footerTitleColumnSpan={number('Number of columns for first footer text', 2)}
                    hasUnsortedStateIcon={boolean('Has unsorted state icon', true)}
                    instance={instance}
                    isFullWidth={boolean('Is full width', true)}
                    noResults={text('No result message', 'No results found')}
                    onClickFooter={isFooterVisible ? getTableFooter : undefined}
                    onClickRow={getTableRow}
                    paginator={
                        <Paginator<TableData>
                            instance={instance}
                            texts={createLocalizedPagingTexts(isNL ? 'nl' : 'en')}
                        />
                    }
                    texts={{ sortByTooltip: localizedTexts.sortByTooltip }}
                />
            ) : (
                <div>{'Loading...'}</div>
            )}
        </>
    );
};

export const ConfigurableEmptyTableMessage: FunctionComponent = () => {
    const columns = useMemo(() => tableColumns(), []);
    const data = useMemo(() => [] as TableData[], []);
    const localizedTexts = createLocalizedTableTexts('nl');

    const instance = createTable<TableData>(columns, data);

    return (
        <Table<TableData>
            caption={text('Table caption', 'Table caption')}
            elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
            instance={instance}
            isFullWidth={boolean('Is full width', true)}
            noResults={text('No result message', 'No results found')}
            onClickRow={getTableRow}
            paginator={<Paginator<TableData> instance={instance} texts={createLocalizedPagingTexts('nl')} />}
            texts={{ sortByTooltip: localizedTexts.sortByTooltip }}
        />
    );
};

export const ConfigurableEmptyTableCard: FunctionComponent = () => {
    const columns = useMemo(() => tableColumns(), []);
    const data = useMemo(() => [] as TableData[], []);
    const localizedTexts = createLocalizedTableTexts('nl');

    const instance = createTable<TableData>(columns, data);

    return (
        <Table<TableData>
            caption={text('Table caption', 'Table caption')}
            elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
            instance={instance}
            isFullWidth={boolean('Is full width', true)}
            noResults={
                <CardNoResults
                    elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
                    header={text('Header', 'No results found')}
                    iconType={select('Type', IconType, IconType.SEARCH)}
                    items={array('Items', ['Option A', 'Option B', 'Option C'])}
                    title={text('Title', 'What can you do?')}
                />
            }
            onClickRow={getTableRow}
            paginator={<Paginator<TableData> instance={instance} texts={createLocalizedPagingTexts('nl')} />}
            texts={{ sortByTooltip: localizedTexts.sortByTooltip }}
        />
    );
};
