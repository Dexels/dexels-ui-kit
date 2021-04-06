import React, { ReactNode } from 'react';
import { WarningMessage, WarningMessageWrapper } from './InformationWarnings.sc';

export const InformationWarnings = (warnings: string[]): ReactNode => (
    <WarningMessageWrapper>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {warnings?.map((warning, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <WarningMessage key={index}>{warning}</WarningMessage>
        ))}
    </WarningMessageWrapper>
);

export default InformationWarnings;
