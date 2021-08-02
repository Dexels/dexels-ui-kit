/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import Paginator, { PaginatorTexts } from '../Table/Paginator/Paginator';
import React, { useCallback, useEffect, useState } from 'react';
import { Row, TableInstance } from 'react-table';
import { StyledPanelHeader, StyledWrapper } from './PicklistMultiSelect.sc';
import Table, { TableTexts } from '../Table/Table';
import Button from '../../molecules/Button/Button';
import PanelHeader from '../../molecules/PanelHeader/PanelHeader';
import TableSkeleton from '../Table/TableSkeleton/TableSkeleton';

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
    onChange: (rows: Row<T>[]) => void;
    paginatorTexts?: PaginatorTexts;
    rightPanelProps: PicklistMultiSelectPanelProps;
    tableTexts?: TableTexts;
}

export const PicklistMultiSelect = <T extends object>({
    hasPaging = true,
    instance,
    isDisabled = false,
    leftPanelProps,
    onChange,
    paginatorTexts,
    rightPanelProps,
    tableTexts,
}: PicklistMultiSelectProps<T>): JSX.Element => {
    const [initialSelectedRows, setInitialSelectedRows] = useState<Row<T>[] | undefined>(undefined);
    const [instanceLeft, setInstanceLeft] = useState<TableInstance<T> | undefined>(undefined);
    const [instanceRight, setInstanceRight] = useState<TableInstance<T> | undefined>(undefined);

    console.log('initialSelectedRows', initialSelectedRows);
    // console.log('instanceLeft', instanceLeft.selectedFlatRows);
    // console.log('instanceRight', instanceRight.selectedFlatRows);

    // const filterSelectedRows = (rows: Row<T>[]): Row<T>[] => rows.filter((row) => row.isSelected);
    // const filterNonSelectedRows = (rows: Row<T>[]): Row<T>[] => rows.filter((row) => !row.isSelected);

    const onChangeCallback = useCallback(() => {
        if (instanceRight && onChange) {
            console.log('onChange', onChange(instanceRight.rows));
        }
    }, [instanceRight, onChange]);

    const onAddToSelectionCallback = useCallback(() => {
        console.log('onAddToSelectionCallback', onAddToSelectionCallback);
        onChangeCallback();
    }, []);

    const onRemoveFromSelectionCallback = useCallback(() => {
        console.log('onRemoveFromSelectionCallback', onRemoveFromSelectionCallback);
        onChangeCallback();
    }, []);

    useEffect(() => {
        if (instance) {
            setInitialSelectedRows(instance.selectedFlatRows);

            // createTable(
            //     instance.columns,
            //     instance.rows.filter((row) => row.isSelected),
            //     {
            //         ...instance.initialState,
            //     },
            //     instance.defaultColumn,
            //     instance.initialState?.locale || DEFAULT_LOCALE,
            //     {
            //         ...tableMultiSelectProps,
            //         isMultiSelect: true,
            //     }
            // );

            const intanceTmpLeft = Object.assign({} as TableInstance<T>, instance);
            intanceTmpLeft.rows = intanceTmpLeft.rows.filter((row) => row.isSelected);
            setInstanceLeft(intanceTmpLeft);
            const intanceTmpRight = Object.assign({} as TableInstance<T>, instance);
            intanceTmpRight.rows = intanceTmpRight.rows.filter((row) => !row.isSelected);
            setInstanceRight(intanceTmpRight);
        }
    }, [instance]);

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
                            isDisabled={isDisabled}
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
                    <TableSkeleton numberOfRowsPerTable={3} />
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
                            isDisabled={isDisabled}
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
                    <TableSkeleton numberOfRowsPerTable={3} />
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
