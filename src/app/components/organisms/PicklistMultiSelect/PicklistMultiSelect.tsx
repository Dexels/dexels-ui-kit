/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Locale, Status } from '../../../types';
import { Column, Row, SortingRule } from 'react-table';
import Paginator, { PaginatorTexts } from '../Table/Paginator/Paginator';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyledLoader, StyledPanelHeader, StyledWrapper } from './PicklistMultiSelect.sc';
import Table, { TableTexts } from '../Table/Table';
import Button from '../../molecules/Button/Button';
import createTable from '../../../utils/functions/createTable';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import PanelHeader from '../../molecules/PanelHeader/PanelHeader';
import { TableSkeleton } from '../Table/TableSkeleton/TableSkeleton';

const LOADING_NR_OF_ROWS = 3; // Might become an input param, hence why it's a var now

export interface PicklistMultiSelectPanelProps<T extends object> {
    data: T[];
    iconType: IconType;
    status: Status;
    textButton: string;
    title: string;
}

export interface PicklistMultiSelectProps<T extends object> {
    availablePanelProps: PicklistMultiSelectPanelProps<T>;
    columns: Column<T>[];
    hasPaging?: boolean;
    isDisabled?: boolean;
    locale?: Locale;
    onChange?: (removed: T[], added: T[]) => void;
    paginatorTexts?: PaginatorTexts;
    selectedPanelProps: PicklistMultiSelectPanelProps<T>;
    sortBy?: SortingRule<T>[];
    tableTexts?: TableTexts;
}

// Helper functions
const convertRowsToData = <T extends object>(rows: Row<T>[]): T[] => rows.map((row) => row.original);

interface CalculatedData<T extends object> {
    available: T[];
    selected: T[];
}

const calculateData = <T extends object>(
    allRows: T[],
    availableRows: Row<T>[],
    selectedRows: Row<T>[],
    isAddAction: boolean
): CalculatedData<T> => {
    if (isEmpty(availableRows)) {
        return {
            available: [],
            selected: allRows,
        };
    }

    if (isEmpty(selectedRows)) {
        return {
            available: allRows,
            selected: [],
        };
    }

    const activeRowsLeft = availableRows.filter((row) => !row.isSelected || row.isDisabled);
    const selectedRowsLeft = availableRows.filter((row) => row.isSelected && !row.isDisabled);
    const activeRowsRight = selectedRows.filter((row) => !row.isSelected || row.isDisabled);
    const selectedRowsRight = selectedRows.filter((row) => row.isSelected && !row.isDisabled);
    let newAvailableRows: Row<T>[] = [];
    let newSelectedRows: Row<T>[] = [];

    if (isAddAction) {
        newAvailableRows = activeRowsLeft;
        newSelectedRows = selectedRows.concat(selectedRowsLeft);
    } else {
        newAvailableRows = availableRows.concat(selectedRowsRight);
        newSelectedRows = activeRowsRight;
    }

    return {
        available: convertRowsToData(newAvailableRows),
        selected: convertRowsToData(newSelectedRows),
    };
};

export const PicklistMultiSelect = <T extends object>({
    availablePanelProps,
    columns,
    hasPaging = true,
    isDisabled = false,
    locale = DEFAULT_LOCALE,
    onChange,
    paginatorTexts,
    selectedPanelProps,
    sortBy,
    tableTexts,
}: PicklistMultiSelectProps<T>): JSX.Element => {
    const [localColumns, setLocalColumns] = useState<Column<T>[]>(columns);
    const [localIsDisabled, setLocalIsDisabled] = useState<boolean>(isDisabled);
    const [localSortBy, setLocalSortBy] = useState<SortingRule<T>[] | undefined>(sortBy);
    const [localAvailableData, setLocalAvailableData] = useState<T[]>(availablePanelProps.data);
    const [originalAvailableData, setOriginalAvailableData] = useState<T[]>(availablePanelProps.data);
    const [localSelectedData, setLocalSelectedData] = useState<T[]>(selectedPanelProps.data);
    const [originalSelectedData, setOriginalSelectedData] = useState<T[]>(selectedPanelProps.data);
    const defaultColumn: Column<T> = useMemo(() => columns[0], [columns]);

    const instanceLeft = createTable(
        localColumns,
        localAvailableData,
        {
            selectedRowIds: {} as Record<string, boolean>,
            sortBy: localSortBy,
        },
        defaultColumn,
        locale,
        {
            isDisabled: localIsDisabled,
            isMultiSelect: true,
        }
    );

    const instanceRight = createTable(
        localColumns,
        localSelectedData,
        {
            selectedRowIds: {} as Record<string, boolean>,
            sortBy: localSortBy,
        },
        defaultColumn,
        locale,
        {
            isDisabled: localIsDisabled,
            isMultiSelect: true,
        }
    );

    const onAddToSelectionCallback = useCallback(() => {
        const newData = calculateData(
            originalAvailableData.concat(originalSelectedData),
            instanceLeft?.rows,
            instanceRight?.rows,
            true
        );

        setLocalAvailableData(newData.available);
        setLocalSelectedData(newData.selected);

        if (onChange) {
            onChange(
                originalAvailableData.filter((x) => !newData.available.includes(x)),
                originalSelectedData.filter((x) => !newData.selected.includes(x))
            );
        }
    }, [instanceLeft, instanceRight, onChange, originalAvailableData, originalSelectedData]);

    const onRemoveFromSelectionCallback = useCallback(() => {
        const newData = calculateData(
            originalAvailableData.concat(originalSelectedData),
            instanceLeft?.rows,
            instanceRight?.rows,
            false
        );

        setLocalAvailableData(newData.available);
        setLocalSelectedData(newData.selected);

        if (onChange) {
            onChange(
                originalAvailableData.filter((x) => !newData.available.includes(x)),
                originalSelectedData.filter((x) => !newData.selected.includes(x))
            );
        }
    }, [instanceLeft, instanceRight, onChange, originalAvailableData, originalSelectedData]);

    // Make sure local states get changed
    useEffect(() => {
        setLocalColumns(columns);
    }, [columns]);

    // availableData
    useEffect(() => {
        setOriginalAvailableData(availablePanelProps.data);
        setLocalAvailableData(availablePanelProps.data);
    }, [availablePanelProps]);

    // selectedData
    useEffect(() => {
        setOriginalSelectedData(selectedPanelProps.data);
        setLocalSelectedData(selectedPanelProps.data);
    }, [selectedPanelProps]);

    useEffect(() => {
        setLocalIsDisabled(isDisabled);
    }, [isDisabled]);

    useEffect(() => {
        setLocalSortBy(sortBy);
    }, [sortBy]);

    return (
        <StyledWrapper isDisabled={localIsDisabled}>
            {/* LEFT PANEL */}
            <StyledPanelHeader isLeftPanel>
                <PanelHeader
                    hasMarginBottom
                    iconType={availablePanelProps.iconType}
                    isDisabled={localIsDisabled}
                    options={
                        <Button
                            iconType={IconType.ARROWRIGHT}
                            isDisabled={localIsDisabled || !instanceLeft || instanceLeft.selectedFlatRows.length === 0}
                            onClick={onAddToSelectionCallback}
                            size={ButtonSize.SMALL}
                            variant={ButtonVariant.OUTLINE}
                        >
                            {availablePanelProps.textButton}
                        </Button>
                    }
                    status={availablePanelProps.status}
                    title={availablePanelProps.title}
                />
                {!instanceLeft ? (
                    <StyledLoader>
                        <TableSkeleton numberOfRowsPerTable={LOADING_NR_OF_ROWS} showRowsInCard />
                    </StyledLoader>
                ) : (
                    <Table
                        instance={instanceLeft}
                        isDisabled={localIsDisabled}
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
                    iconType={selectedPanelProps.iconType}
                    isDisabled={localIsDisabled}
                    isReversed
                    options={
                        <Button
                            iconType={IconType.ARROWLEFT}
                            isDisabled={
                                localIsDisabled || !instanceRight || instanceRight.selectedFlatRows.length === 0
                            }
                            onClick={onRemoveFromSelectionCallback}
                            size={ButtonSize.SMALL}
                            variant={ButtonVariant.OUTLINE}
                        >
                            {selectedPanelProps.textButton}
                        </Button>
                    }
                    status={selectedPanelProps.status}
                    title={selectedPanelProps.title}
                />
                {!instanceRight ? (
                    <StyledLoader>
                        <TableSkeleton numberOfRowsPerTable={LOADING_NR_OF_ROWS} showRowsInCard />
                    </StyledLoader>
                ) : (
                    <Table
                        instance={instanceRight}
                        isDisabled={localIsDisabled}
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
