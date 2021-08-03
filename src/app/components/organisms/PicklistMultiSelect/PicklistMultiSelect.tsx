/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import Paginator, { PaginatorTexts } from '../Table/Paginator/Paginator';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Row, TableInstance } from 'react-table';
import { StyledPanelHeader, StyledWrapper } from './PicklistMultiSelect.sc';
import Table, { TableTexts } from '../Table/Table';
import Button from '../../molecules/Button/Button';
import { createTable } from '../../../utils/functions/createTable';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import PanelHeader from '../../molecules/PanelHeader/PanelHeader';
import { TableSkeleton } from '../Table/TableSkeleton/TableSkeleton';

const LOADING_NR_OF_ROWS = 3; // Might become an input param, hence why it's a var now

export interface PicklistMultiSelectPanelProps {
    iconType: IconType;
    status: Status;
    textButton: string;
    title: string;
}

export interface PicklistMultiSelectProps<T extends object> {
    hasPaging?: boolean;
    instance: TableInstance<T>;
    isDisabled?: boolean;
    leftPanelProps: PicklistMultiSelectPanelProps;
    onAdd?: (rows: Row<T>[]) => void;
    onRemove?: (rows: Row<T>[]) => void;
    paginatorTexts?: PaginatorTexts;
    rightPanelProps: PicklistMultiSelectPanelProps;
    tableTexts?: TableTexts;
}

export const PicklistMultiSelect = <T extends object>({
    hasPaging = true,
    instance,
    isDisabled = false,
    leftPanelProps,
    onAdd,
    onRemove,
    paginatorTexts,
    rightPanelProps,
    tableTexts,
}: PicklistMultiSelectProps<T>): JSX.Element => {
    // const [instanceLeft, setInstanceLeft] = useState<TableInstance<T> | undefined>(undefined);
    const [instanceRight, setInstanceRight] = useState<TableInstance<T> | undefined>(undefined);
    const instanceColumns = useMemo(() => instance.columns, [instance]);
    const instanceDefaultColumn = useMemo(() => instance.defaultColumn, [instance]);
    const instanceLocale = useMemo(() => instance.initialState?.locale || DEFAULT_LOCALE, [instance]);
    const instanceInitialState = useMemo(() => instance.initialState, [instance]);
    const instanceLeftData = useMemo(() => instance.rows.filter((row) => !row.isSelected) as T[], [instance]);
    const instanceRightData = useMemo(() => instance.rows.filter((row) => row.isSelected) as T[], [instance]);

    const resetSelectedRight = () =>
        instanceRightData.forEach((row, index) => {
            if ((row as Row<T>).isSelected) {
                (instanceRightData[index] as Row<T>).isSelected = false;
            }
        });

    const instanceLeft = createTable<T>(
        instanceColumns,
        instanceLeftData,
        {
            ...instanceInitialState,
            selectedRowIds: {} as Record<string, boolean>,
        },
        instanceDefaultColumn,
        instanceLocale,
        { isMultiSelect: true }
    );

    const newInstanceRight = createTable<T>(
        instanceColumns,
        instanceRightData,
        {
            ...instanceInitialState,
            selectedRowIds: {} as Record<string, boolean>,
        },
        instanceDefaultColumn,
        instanceLocale,
        { isMultiSelect: true }
    );

    console.log('root -> instanceLeft', instanceLeft);
    console.log('root -> instanceRight', instanceRight);

    // console.log('root -> instanceLeft', instanceLeft?.selectedFlatRows);
    // console.log('root -> instanceRight', instanceRight?.selectedFlatRows);
    // console.log('root -> instanceLeftData', instanceLeftData);
    // console.log('root -> instanceRightData', instanceRightData);

    // const filterSelectedRows = (rows: Row<T>[]): Row<T>[] => rows.filter((row) => row.isSelected);
    // const filterNonSelectedRows = (rows: Row<T>[]): Row<T>[] => rows.filter((row) => !row.isSelected);

    const onAddCallback = useCallback(() => {
        if (instanceLeft && onAdd) {
            console.log('onAddCallback', onAdd(instanceLeft.selectedFlatRows));
        }
    }, [instanceLeft, onAdd]);

    const onRemoveCallback = useCallback(() => {
        if (instanceRight && onRemove) {
            console.log('onRemoveCallback', onRemove(instanceRight.selectedFlatRows));
        }
    }, [instanceRight, onRemove]);

    const onAddToSelectionCallback = useCallback(() => {
        console.log('onAddToSelectionCallback', instanceLeft?.selectedFlatRows);
        onAddCallback();
    }, [instanceLeft]);

    const onRemoveFromSelectionCallback = useCallback(() => {
        console.log('onRemoveFromSelectionCallback', instanceRight?.selectedFlatRows);

        // Reset selected row ids
        resetSelectedRight();
        onRemoveCallback();
    }, [instanceRight]);

    useEffect(() => {
        if (instanceRightData) {
            resetSelectedRight();
        }
    }, [instanceRightData]);

    useEffect(() => {
        console.log('useEffect right', newInstanceRight);
        setInstanceRight(newInstanceRight);
    }, [newInstanceRight]);

    return (
        <StyledWrapper isDisabled={isDisabled}>
            {/* LEFT PANEL */}
            <StyledPanelHeader isLeftPanel>
                <PanelHeader
                    hasMarginBottom
                    iconType={leftPanelProps.iconType}
                    isDisabled={isDisabled}
                    options={
                        <Button
                            iconType={IconType.ARROWRIGHT}
                            isDisabled={isDisabled || instanceLeftData.length === 0}
                            onClick={onAddToSelectionCallback}
                            size={ButtonSize.SMALL}
                            variant={ButtonVariant.OUTLINE}
                        >
                            {leftPanelProps.textButton}
                        </Button>
                    }
                    status={leftPanelProps.status}
                    title={leftPanelProps.title}
                />
                {!instanceLeft ? (
                    <TableSkeleton numberOfRowsPerTable={LOADING_NR_OF_ROWS} />
                ) : (
                    <Table
                        instance={instanceLeft}
                        isDisabled={isDisabled}
                        isFullWidth
                        paginator={
                            hasPaging ? (
                                <Paginator
                                    hasPageSizeSelector={false}
                                    instance={instanceLeft}
                                    texts={paginatorTexts || ({} as PaginatorTexts)}
                                />
                            ) : undefined
                        }
                        texts={tableTexts || undefined}
                    />
                )}
            </StyledPanelHeader>
            {/* RIGHT PANEL */}
            <StyledPanelHeader isLeftPanel={false}>
                <PanelHeader
                    hasMarginBottom
                    iconType={rightPanelProps.iconType}
                    isDisabled={isDisabled}
                    isReversed
                    options={
                        <Button
                            iconType={IconType.ARROWLEFT}
                            isDisabled={isDisabled || instanceRightData.length === 0}
                            onClick={onRemoveFromSelectionCallback}
                            size={ButtonSize.SMALL}
                            variant={ButtonVariant.OUTLINE}
                        >
                            {rightPanelProps.textButton}
                        </Button>
                    }
                    status={rightPanelProps.status}
                    title={rightPanelProps.title}
                />
                {!instanceRight ? (
                    <TableSkeleton numberOfRowsPerTable={LOADING_NR_OF_ROWS} />
                ) : (
                    <Table
                        instance={instanceRight}
                        isDisabled={isDisabled}
                        isFullWidth
                        paginator={
                            hasPaging ? (
                                <Paginator
                                    hasPageSizeSelector={false}
                                    instance={instanceRight}
                                    texts={paginatorTexts || ({} as PaginatorTexts)}
                                />
                            ) : undefined
                        }
                        texts={tableTexts || undefined}
                    />
                )}
            </StyledPanelHeader>
        </StyledWrapper>
    );
};

export default PicklistMultiSelect;
