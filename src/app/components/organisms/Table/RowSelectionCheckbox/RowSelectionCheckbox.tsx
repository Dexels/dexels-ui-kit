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
    <Wrapper id="testwrapper" isHeader={isHeader}>
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
                // eslint-disable-next-line no-unused-expressions
                selectedProps.onChange !== undefined
                    ? selectedProps.onChange(event as ChangeEvent<HTMLInputElement>)
                    : undefined;
            }}
            size={SelectionControlSize.SMALL}
            type={SelectionControlType.CHECKBOX}
            value=""
        />
    </Wrapper>
);
