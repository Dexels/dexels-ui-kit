import React, { FunctionComponent } from 'react';
import { REQUIRED_INDICATOR } from '../../../../global/constants';
import { StyledRequiredIndicator } from './RequiredIndicator.sc';

export interface RequiredIndicatorProps {
    hasLeadingSpace?: boolean;
    isDisabled?: boolean;
}

export const RequiredIndicator: FunctionComponent<RequiredIndicatorProps> = ({
    hasLeadingSpace = true,
    isDisabled = false,
}) => (
    <StyledRequiredIndicator isDisabled={isDisabled}>
        {hasLeadingSpace && ` `}
        {REQUIRED_INDICATOR}
    </StyledRequiredIndicator>
);

export default RequiredIndicator;
