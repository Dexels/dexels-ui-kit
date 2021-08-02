/* eslint-disable @typescript-eslint/ban-types */
import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import { ButtonWrapper, StyledPanelHeader, StyledWrapper } from './PicklistMultiSelect.sc';
import React, { useCallback } from 'react';
import { Row, TableInstance } from 'react-table';
import Button from '../../molecules/Button/Button';
import PanelHeader from '../../molecules/PanelHeader/PanelHeader';

export interface PicklistMultiSelectPanelProps {
    iconType: IconType;
    status: Status;
    textButton: string;
    title: string;
}

export interface PicklistMultiSelectProps<T extends object> {
    instanceSelectableEntries: TableInstance<T>;
    instanceSelectedEntries: TableInstance<T>;
    isDisabled?: boolean;
    leftPanelProps: PicklistMultiSelectPanelProps;
    onSave: (rows: Row<T>[]) => void;
    rightPanelProps: PicklistMultiSelectPanelProps;
}

export const PicklistMultiSelect = <T extends object>({
    instanceSelectedEntries,
    isDisabled = false,
    instanceSelectableEntries,
    leftPanelProps,
    onSave,
    rightPanelProps,
}: PicklistMultiSelectProps<T>): JSX.Element => {
    console.log('instanceSelectedEntries', instanceSelectedEntries);
    console.log('instanceSelectableEntries', instanceSelectableEntries);

    const onSaveCallback = useCallback(() => {
        if (onSave) {
            console.log('onSave', onSave);
        }
    }, [onSave]);

    return (
        <StyledWrapper isDisabled={isDisabled}>
            {/* LEFT PANEL */}
            <StyledPanelHeader>
                <PanelHeader
                    hasMarginBottom
                    iconType={leftPanelProps.iconType}
                    isDisabled={isDisabled}
                    options={
                        <ButtonWrapper>
                            <Button
                                iconType={leftPanelProps.iconType}
                                isDisabled={isDisabled}
                                onClick={onSaveCallback}
                                size={ButtonSize.SMALL}
                                variant={ButtonVariant.OUTLINE}
                            >
                                {leftPanelProps.textButton}
                            </Button>
                        </ButtonWrapper>
                    }
                    status={leftPanelProps.status}
                    title={leftPanelProps.title}
                />
            </StyledPanelHeader>
            {/* RIGHT PANEL */}
            <StyledPanelHeader>
                <PanelHeader
                    hasMarginBottom
                    iconType={rightPanelProps.iconType}
                    isDisabled={isDisabled}
                    isReversed
                    options={
                        <ButtonWrapper>
                            <Button
                                iconType={rightPanelProps.iconType}
                                isDisabled={isDisabled}
                                onClick={onSaveCallback}
                                size={ButtonSize.SMALL}
                                variant={ButtonVariant.OUTLINE}
                            >
                                {rightPanelProps.textButton}
                            </Button>
                        </ButtonWrapper>
                    }
                    status={rightPanelProps.status}
                    title={rightPanelProps.title}
                />
            </StyledPanelHeader>
        </StyledWrapper>
    );
};

export default PicklistMultiSelect;
