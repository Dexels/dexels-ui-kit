import React, { FunctionComponent } from 'react';

export interface PicklistMultiSelectProps {
    isDisabled?: boolean;
}

export const PicklistMultiSelect: FunctionComponent<PicklistMultiSelectProps> = ({ isDisabled = false }) => (
    <div>{`isDisabled: ${isDisabled.toString()}`}</div>
);

export default PicklistMultiSelect;
