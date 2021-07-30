import React, { FunctionComponent } from 'react';

export interface PicklistMultiSelectProps {
    isDisabled?: boolean;
}

export const PicklistMultiSelect: FunctionComponent<PicklistMultiSelectProps> = ({ isDisabled = false }) => (
    <div>{'test'}</div>
);

export default PicklistMultiSelect;
