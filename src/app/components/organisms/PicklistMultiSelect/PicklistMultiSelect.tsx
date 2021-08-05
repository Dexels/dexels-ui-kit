/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import Paginator, { PaginatorTexts } from '../Table/Paginator/Paginator';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Row, TableInstance } from 'react-table';
import { StyledLoader, StyledPanelHeader, StyledWrapper } from './PicklistMultiSelect.sc';
import Table, { TableTexts } from '../Table/Table';
import Button from '../../molecules/Button/Button';
import createTable from '../../../utils/functions/createTable';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { isEmpty } from '../../../utils/functions/validateFunctions';
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
    onChange?: (inactiveRows: T[], activeRows: T[]) => void;
    paginatorTexts?: PaginatorTexts;
    rightPanelProps: PicklistMultiSelectPanelProps;
    tableTexts?: TableTexts;
}

// Helper functions
const convertRowsToData = <T extends object>(rows: Row<T>[]): T[] => rows.map((row) => row.original);

interface CalculatedData<T extends object> {
    left: T[];
    right: T[];
}

const calculateData = <T extends object>(
    allRows: Row<T>[],
    leftRows: Row<T>[],
    rightRows: Row<T>[],
    isAddAction: boolean
): CalculatedData<T> => {
    if (isEmpty(leftRows)) {
        return {
            left: [],
            right: convertRowsToData(allRows),
        };
    }

    if (isEmpty(rightRows)) {
        return {
            left: convertRowsToData(allRows),
            right: [],
        };
    }

    const activeRowsLeft = leftRows.filter((row) => !row.isSelected || row.isDisabled);
    const selectedRowsLeft = leftRows.filter((row) => row.isSelected && !row.isDisabled);
    const activeRowsRight = rightRows.filter((row) => !row.isSelected || row.isDisabled);
    const selectedRowsRight = rightRows.filter((row) => row.isSelected && !row.isDisabled);
    let newLeftRows: Row<T>[] = [];
    let newRightRows: Row<T>[] = [];

    if (isAddAction) {
        newLeftRows = activeRowsLeft;
        newRightRows = rightRows.concat(selectedRowsLeft);
    } else {
        newLeftRows = leftRows.concat(selectedRowsRight);
        newRightRows = activeRowsRight;
    }

    return {
        left: convertRowsToData(newLeftRows),
        right: convertRowsToData(newRightRows),
    };
};

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
    const [localInstance, setLocalInstance] = useState<TableInstance<T>>(instance);
    const [dataLeft, setDataLeft] = useState<T[]>([]);
    const [dataRight, setDataRight] = useState<T[]>([]);
    const [localIsDisabled, setLocalIsDisabled] = useState<boolean>(isDisabled);

    const localInstanceInitialState = useMemo(
        () => ({
            ...localInstance.initialState,
            selectedRowIds: {} as Record<string, boolean>,
        }),
        [localInstance]
    );

    const instanceLeft = createTable(
        localInstance.columns,
        dataLeft,
        localInstanceInitialState,
        localInstance.defaultColumn,
        localInstance.initialState?.locale || DEFAULT_LOCALE,
        {
            isDisabled: localIsDisabled,
            isMultiSelect: true,
        }
    );

    const instanceRight = createTable(
        localInstance.columns,
        dataRight,
        localInstanceInitialState,
        localInstance.defaultColumn,
        localInstance.initialState?.locale || DEFAULT_LOCALE,
        {
            isDisabled: localIsDisabled,
            isMultiSelect: true,
        }
    );

    const onAddToSelectionCallback = useCallback(() => {
        const newData = calculateData(localInstance.rows, instanceLeft?.rows, instanceRight?.rows, true);
        setDataLeft(newData.left);
        setDataRight(newData.right);

        if (onChange) {
            onChange(newData.left, newData.right);
        }
    }, [localInstance, instanceLeft, instanceRight, onChange]);

    const onRemoveFromSelectionCallback = useCallback(() => {
        const newData = calculateData(localInstance.rows, instanceLeft?.rows, instanceRight?.rows, false);
        setDataLeft(newData.left);
        setDataRight(newData.right);

        if (onChange) {
            onChange(newData.left, newData.right);
        }
    }, [localInstance, instanceLeft, instanceRight, onChange]);

    // Set initial data parts
    useEffect(() => {
        // Based on isSelected, set left and right data, but make sure the isSelected props are reset
        setDataLeft(convertRowsToData(instance.rows.filter((row) => !row.isSelected)));
        setDataRight(convertRowsToData(instance.rows.filter((row) => row.isSelected)));
        setLocalInstance(instance);
    }, [instance]);

    useEffect(() => {
        setLocalIsDisabled(isDisabled);
    }, [isDisabled]);

    return (
        <StyledWrapper isDisabled={localIsDisabled}>
            {/* LEFT PANEL */}
            <StyledPanelHeader isLeftPanel>
                <PanelHeader
                    hasMarginBottom
                    iconType={leftPanelProps.iconType}
                    isDisabled={localIsDisabled}
                    options={
                        <Button
                            iconType={IconType.ARROWRIGHT}
                            isDisabled={localIsDisabled || !instanceLeft || instanceLeft.selectedFlatRows.length === 0}
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
                    iconType={rightPanelProps.iconType}
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
                            {rightPanelProps.textButton}
                        </Button>
                    }
                    status={rightPanelProps.status}
                    title={rightPanelProps.title}
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
