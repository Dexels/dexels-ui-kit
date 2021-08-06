/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Locale, Status } from '../../../types';
import { Column, TableState } from 'react-table';
import Paginator, { PaginatorTexts } from '../Table/Paginator/Paginator';
import React, { useCallback, useEffect, useState } from 'react';
import { StyledLoader, StyledPanelHeader, StyledWrapper, TableWrapper } from './PicklistMultiSelect.sc';
import Table, { TableTexts } from '../Table/Table';
import { Button } from '../../molecules/Button/Button';
import { createTable } from '../../../utils/functions/createTable';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import { PanelHeader } from '../../molecules/PanelHeader/PanelHeader';
import { TableSkeleton } from '../Table/TableSkeleton/TableSkeleton';

const LOADING_NR_OF_ROWS = 3; // Might become an input param, hence why it's a var now

export interface PicklistMultiSelectPanelProps {
    iconType: IconType;
    status?: Status;
    title: string;
}

export interface PicklistMultiSelectOption {
    id: string | number;
    isSelected: boolean;
}

export interface PicklistMultiSelectProps<T extends object, U extends T & PicklistMultiSelectOption> {
    addButtonText: string;
    availablePanelProps: PicklistMultiSelectPanelProps;
    columns: Column<T>[];
    data: U[];
    fitToScreen?: boolean; // maximizes height and only applies with hasPaging = false
    hasPaging?: boolean;
    isDisabled?: boolean;
    locale?: Locale;
    onChange?: (removed: T[], added: T[], updated: T[]) => void;
    options: Partial<TableState<T>>;
    paginatorTexts?: PaginatorTexts;
    removeButtonText: string;
    selectedPanelProps: PicklistMultiSelectPanelProps;
    tableTexts?: TableTexts;
}

export const calculateChanges = <T extends PicklistMultiSelectOption>(data: T[], previousData: T[]): [T[], T[]] => {
    const added = data.filter(
        (option) => option.isSelected && !previousData.find((opt) => opt.id === option.id)?.isSelected
    );

    const removed = data.filter(
        (option) => !option.isSelected && previousData.find((opt) => opt.id === option.id)?.isSelected
    );

    return [removed, added];
};

export const PicklistMultiSelect = <T extends object, U extends T & PicklistMultiSelectOption>({
    addButtonText,
    availablePanelProps,
    columns,
    data,
    fitToScreen = false,
    hasPaging = true,
    isDisabled = false,
    locale = DEFAULT_LOCALE,
    onChange,
    options,
    paginatorTexts,
    selectedPanelProps,
    removeButtonText,
    tableTexts,
}: PicklistMultiSelectProps<T, U>): JSX.Element => {
    const [updatedData, setUpdatedData] = useState<U[]>(data);
    const [availableOptions, setAvailableOptions] = useState([] as U[]);
    const [selectedOptions, setSelectedOptions] = useState([] as U[]);

    const availableOptionsInstance = createTable(columns, availableOptions, options, columns[0], locale, {
        isDisabled,
        isMultiSelect: true,
    });

    const selectedOptionsInstance = createTable(columns, selectedOptions, options, columns[0], locale, {
        isDisabled,
        isMultiSelect: true,
    });

    const onAddToSelectionCallback = useCallback(() => {
        // find selected rows in availableOptionsInstance
        const selectedRows = availableOptionsInstance.rows.filter((row) => row.isSelected).map((row) => row.original);

        const newUpdatedData = updatedData.map((option) => ({
            ...option,
            isSelected: option.isSelected || selectedRows.find((row) => (row as U).id === option.id),
        }));

        setUpdatedData(newUpdatedData);

        if (onChange) {
            const [removed, added] = calculateChanges(newUpdatedData, data);
            onChange(removed, added, newUpdatedData);
        }
    }, [availableOptionsInstance, updatedData]);

    const onRemoveFromSelectionCallback = useCallback(() => {
        // find selected rows in selectedOptionsInstance
        const selectedRows = selectedOptionsInstance.rows.filter((row) => row.isSelected).map((row) => row.original);

        const newUpdatedData = updatedData.map((option) => ({
            ...option,
            isSelected: selectedRows.find((row) => (row as U).id === option.id) ? false : option.isSelected,
        }));

        setUpdatedData(newUpdatedData);

        if (onChange) {
            const [removed, added] = calculateChanges(newUpdatedData, data);
            onChange(removed, added, newUpdatedData);
        }
    }, [selectedOptionsInstance, updatedData]);

    // when updatedData is changed create new options arrays
    useEffect(() => {
        setAvailableOptions(updatedData.filter((option) => !option.isSelected));

        setSelectedOptions(
            updatedData
                .filter((option) => option.isSelected)
                .map((option) => ({
                    ...option,
                    isSelected: false,
                }))
        );
    }, [updatedData]);

    return (
        <StyledWrapper isDisabled={isDisabled}>
            {/* LEFT PANEL */}
            <StyledPanelHeader isLeftPanel>
                <PanelHeader
                    hasMarginBottom
                    iconType={availablePanelProps.iconType}
                    isDisabled={isDisabled}
                    options={
                        <Button
                            iconType={IconType.ARROWRIGHT}
                            isDisabled={
                                isDisabled ||
                                !availableOptionsInstance ||
                                isEmpty(availableOptionsInstance.selectedFlatRows)
                            }
                            onClick={onAddToSelectionCallback}
                            size={ButtonSize.SMALL}
                            variant={ButtonVariant.OUTLINE}
                        >
                            {addButtonText}
                        </Button>
                    }
                    status={availablePanelProps.status || Status.DEFAULT}
                    title={availablePanelProps.title}
                />
                {!selectedOptionsInstance ? (
                    <StyledLoader>
                        <TableSkeleton numberOfRowsPerTable={LOADING_NR_OF_ROWS} showRowsInCard />
                    </StyledLoader>
                ) : (
                    <TableWrapper hasMaxHeight={!hasPaging && fitToScreen} id={'TableWrapper_left'}>
                        <Table
                            instance={availableOptionsInstance}
                            isDisabled={isDisabled}
                            isFullWidth
                            paginator={
                                hasPaging ? (
                                    <Paginator
                                        hasPageSizeSelector={false}
                                        instance={availableOptionsInstance}
                                        texts={paginatorTexts || ({} as PaginatorTexts)}
                                    />
                                ) : undefined
                            }
                            texts={tableTexts || undefined}
                        />
                    </TableWrapper>
                )}
            </StyledPanelHeader>
            {/* RIGHT PANEL */}
            <StyledPanelHeader isLeftPanel={false}>
                <PanelHeader
                    hasMarginBottom
                    iconType={selectedPanelProps.iconType}
                    isDisabled={isDisabled}
                    isReversed
                    options={
                        <Button
                            iconType={IconType.ARROWLEFT}
                            isDisabled={
                                isDisabled ||
                                !selectedOptionsInstance ||
                                isEmpty(selectedOptionsInstance.selectedFlatRows)
                            }
                            onClick={onRemoveFromSelectionCallback}
                            size={ButtonSize.SMALL}
                            variant={ButtonVariant.OUTLINE}
                        >
                            {removeButtonText}
                        </Button>
                    }
                    status={selectedPanelProps.status || Status.DEFAULT}
                    title={selectedPanelProps.title}
                />
                {!selectedOptionsInstance ? (
                    <StyledLoader>
                        <TableSkeleton numberOfRowsPerTable={LOADING_NR_OF_ROWS} showRowsInCard />
                    </StyledLoader>
                ) : (
                    <TableWrapper hasMaxHeight={!hasPaging && fitToScreen}>
                        <Table
                            instance={selectedOptionsInstance}
                            isDisabled={isDisabled}
                            isFullWidth
                            paginator={
                                hasPaging ? (
                                    <Paginator
                                        hasPageSizeSelector={false}
                                        instance={selectedOptionsInstance}
                                        texts={paginatorTexts || ({} as PaginatorTexts)}
                                    />
                                ) : undefined
                            }
                            texts={tableTexts || undefined}
                        />
                    </TableWrapper>
                )}
            </StyledPanelHeader>
        </StyledWrapper>
    );
};

export default PicklistMultiSelect;
