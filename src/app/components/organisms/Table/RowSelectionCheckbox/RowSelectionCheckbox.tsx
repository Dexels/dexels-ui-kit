/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, FunctionComponent, MutableRefObject } from 'react';
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

export const RowSelectionCheckbox: FunctionComponent<RowSelectionCheckboxProps> = React.forwardRef(
    ({ isDisabled = false, isHeader = false, selectedProps }, ref) => {
        const defaultRef = React.useRef<any>();
        const resolvedRef = (ref as MutableRefObject<any>) || defaultRef;

        React.useEffect(() => {
            if (resolvedRef.current) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                resolvedRef.current.indeterminate = selectedProps.indeterminate;
            }
        }, [resolvedRef, selectedProps]);

        return (
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
                        // eslint-disable-next-line no-unused-expressions
                        selectedProps.onChange !== undefined
                            ? selectedProps.onChange(event as ChangeEvent<HTMLInputElement>)
                            : undefined;
                    }}
                    ref={resolvedRef}
                    size={SelectionControlSize.SMALL}
                    type={SelectionControlType.CHECKBOX}
                    value=""
                />
            </Wrapper>
        );
    }
);
