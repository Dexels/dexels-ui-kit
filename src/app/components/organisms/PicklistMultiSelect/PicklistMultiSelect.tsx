/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import Paginator, { PaginatorTexts } from '../Table/Paginator/Paginator';
import React, { useCallback } from 'react';
import { Row, TableInstance } from 'react-table';
import { StyledPanelHeader, StyledWrapper } from './PicklistMultiSelect.sc';
import Table, { TableTexts } from '../Table/Table';
import Button from '../../molecules/Button/Button';
import PanelHeader from '../../molecules/PanelHeader/PanelHeader';

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
    const initialSelectedRows = instance.selectedFlatRows;
    const instanceLeft: TableInstance<T> = Object.assign({} as TableInstance<T>, instance);
    const instanceRight: TableInstance<T> = Object.assign({} as TableInstance<T>, instance);

    console.log('initialSelectedRows', initialSelectedRows);
    console.log('instanceLeft', instanceLeft.selectedFlatRows);
    console.log('instanceRight', instanceRight.selectedFlatRows);

    const onChangeCallback = useCallback(() => {
        if (onChange) {
            console.log('onChange', onChange(instanceRight.rows));
        }
    }, [onChange]);

    const onAddToSelectionCallback = useCallback(() => {
        console.log('onAddToSelectionCallback', onAddToSelectionCallback);
        onChangeCallback();
    }, []);

    const onRemoveFromSelectionCallback = useCallback(() => {
        console.log('onRemoveFromSelectionCallback', onRemoveFromSelectionCallback);
        onChangeCallback();
    }, []);

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
            </StyledPanelHeader>
        </StyledWrapper>
    );
};

export default PicklistMultiSelect;
