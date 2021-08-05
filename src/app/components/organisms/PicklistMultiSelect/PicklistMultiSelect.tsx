/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import Paginator, { PaginatorTexts } from '../Table/Paginator/Paginator';
import React, { useCallback, useEffect, useState } from 'react';
import { Row, TableInstance } from 'react-table';
import { StyledLoader, StyledPanelHeader, StyledWrapper } from './PicklistMultiSelect.sc';
import Table, { TableTexts } from '../Table/Table';
import Button from '../../molecules/Button/Button';
import createTable from '../../../utils/functions/createTable';
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
    onSave?: (rows: Row<T>[]) => void;
    paginatorTexts?: PaginatorTexts;
    rightPanelProps: PicklistMultiSelectPanelProps;
    tableTexts?: TableTexts;
}

export const PicklistMultiSelect = <T extends object>({
    hasPaging = true,
    instance,
    isDisabled = false,
    leftPanelProps,
    onSave,
    paginatorTexts,
    rightPanelProps,
    tableTexts,
}: PicklistMultiSelectProps<T>): JSX.Element => {
    const [dataLeft, setDataLeft] = useState<T[]>([]);
    const [dataRight, setDataRight] = useState<T[]>([]);

    const instanceLeft = dataLeft
        ? createTable(
              instance.columns,
              dataLeft,
              instance.initialState,
              instance.defaultColumn,
              instance.initialState?.locale || DEFAULT_LOCALE,
              { isMultiSelect: true }
          )
        : undefined;

    const instanceRight = dataRight
        ? createTable(
              instance.columns,
              dataRight,
              instance.initialState,
              instance.defaultColumn,
              instance.initialState?.locale || DEFAULT_LOCALE,
              { isMultiSelect: true }
          )
        : undefined;

    console.log('root -> instanceLeft', instanceLeft);
    console.log('root -> instanceRight', instanceRight);
    console.log('root -> instanceRightData', dataRight);

    const onAddToSelectionCallback = useCallback(() => {
        if (instanceLeft) {
            console.log('onAddToSelectionCallback');
        }
    }, [instanceLeft]);

    const onRemoveFromSelectionCallback = useCallback(() => {
        if (instanceRight) {
            console.log('onRemoveFromSelectionCallback');
            setDataRight(instanceRight.rows.filter((row) => !row.isSelected) as T[]);

            if (onSave) {
                // onSave();
            }
        }
    }, [instanceRight, onSave]);

    useEffect(() => {
        console.log('new data');
        const rowsLeft = instance.rows.filter((row) => !row.isSelected);
        const rowsRight = instance.rows.filter((row) => row.isSelected);

        rowsRight.forEach((row, index) => {
            if (row.isSelected) {
                rowsRight[index].isSelected = false;
            }
        });

        setDataLeft(rowsLeft as T[]);
        setDataRight(rowsRight as T[]);
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
                            isDisabled={isDisabled || !instanceLeft || instanceLeft.rows.length === 0}
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
                            isDisabled={isDisabled || !instanceRight || instanceRight.rows.length === 0}
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
