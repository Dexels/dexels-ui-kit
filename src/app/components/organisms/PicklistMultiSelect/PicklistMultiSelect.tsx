/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import Paginator, { PaginatorTexts } from '../Table/Paginator/Paginator';
import React, { useCallback, useMemo } from 'react';
import { Row, TableInstance } from 'react-table';
import { StyledLoader, StyledPanelHeader, StyledWrapper } from './PicklistMultiSelect.sc';
import Table, { TableTexts } from '../Table/Table';
import Button from '../../molecules/Button/Button';
import { copyInstance } from '../../../utils/functions/createTable';
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
    const instanceLeftData = useMemo(() => instance.rows.filter((row) => !row.isSelected) as T[], [instance]);

    const instanceRightData = useMemo(() => {
        const rows = instance.rows.filter((row) => row.isSelected) as T[];

        rows.forEach((row, index) => {
            if ((row as Row<T>).isSelected) {
                (rows[index] as Row<T>).isSelected = false;
            }
        });

        return rows;
    }, [instance]);

    const instanceLeft = copyInstance<T>(instance, instanceLeftData, { isMultiSelect: true });
    const instanceRight = copyInstance<T>(instance, instanceRightData, { isMultiSelect: true });

    console.log('root -> instanceLeft', instanceLeft);
    console.log('root -> instanceRight', instanceRight);

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
        onRemoveCallback();
    }, [instanceRight]);

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
                            isDisabled={isDisabled || instanceLeft.rows.length === 0}
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
                            isDisabled={isDisabled || instanceRight.rows.length === 0}
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
