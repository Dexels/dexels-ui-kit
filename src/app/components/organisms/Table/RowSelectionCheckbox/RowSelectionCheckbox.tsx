/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, FunctionComponent } from 'react';
import SelectionControl from '../../../molecules/SelectionControl/SelectionControl';
import { SelectionControlSize } from '../../../../types';
import { SelectionControlType } from '../../../molecules/SelectionControl/types';
import { TableToggleRowsSelectedProps } from 'react-table';
import { Wrapper } from './RowSelectionCheckbox.sc';

export interface RowSelectionCheckboxProps {
    isDisabled?: boolean;
    isHeader?: boolean;
    selectedProps: Partial<TableToggleRowsSelectedProps>;
}

export const RowSelectionCheckbox: FunctionComponent<RowSelectionCheckboxProps> = ({
    isDisabled = false,
    isHeader = false,
    selectedProps,
}) => (
    <Wrapper isHeader={isHeader}>
        <SelectionControl
            hasHorizontalCorrection={false}
            hasVerticalCorrection={false}
            isChecked={selectedProps.checked}
            isDisabled={isDisabled}
            isIndeterminate={selectedProps.indeterminate}
            isTableElement
            label=""
            name={isHeader ? '_selector_header' : '_selector_row'} // @TODO: figure out if the non unique name will cause issues
            onChange={(event): void => {
                if (selectedProps.onChange !== undefined) {
                    selectedProps.onChange(event as ChangeEvent<HTMLInputElement>);
                }
            }}
            size={SelectionControlSize.SMALL}
            type={SelectionControlType.CHECKBOX}
            value=""
        />
    </Wrapper>
);
