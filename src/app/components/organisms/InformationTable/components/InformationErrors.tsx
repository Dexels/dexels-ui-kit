import { ErrorMessage, ErrorMessageWrapper } from './InformationErrors.sc';
import React, { ReactNode } from 'react';

export const InformationErrors = (errors: string[]): ReactNode => {
    return (
        <ErrorMessageWrapper>
            {errors?.map((error, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <ErrorMessage key={index}>{error}</ErrorMessage>
            ))}
        </ErrorMessageWrapper>
    );
};

export default InformationErrors;