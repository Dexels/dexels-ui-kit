import React, { FunctionComponent } from 'react';
import { ProgressBarProps } from './types';
import { StyledProgressBar } from './ProgressBar.sc';

// @TODO: no implementation for anything else than indeterminate yet....

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ isIndeterminate = true }) => (
    <StyledProgressBar isIndeterminate={isIndeterminate} />
);

export default ProgressBar;
