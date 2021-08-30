import { ChildrenWrapper, Column, Label, Row, StyledInformationTable, Value } from './InformationTable.sc';
import React, { FunctionComponent, ReactNode, useEffect, useMemo, useState } from 'react';
import { AmountOfColumns } from './types';
import InformationErrors from './components/InformationErrors';
import { InformationWarnings } from './components/InformationWarnings';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import { Skeleton } from '../../molecules/Skeleton/Skeleton';

export interface InformationTableData {
    isDisabled?: boolean;
    isTextArea?: boolean;
    label: ReactNode;
    value: ReactNode;
}

export interface InformationTableProps {
    amountOfColumns?: AmountOfColumns;
    amountOfRows?: number;
    children?: ReactNode;
    data?: InformationTableData[];
    errors?: string[];
    isDisabled?: boolean;
    isLoading?: boolean;
    isSidePanel?: boolean;
    isTextArea?: boolean;
    warnings?: string[];
}

export const InformationTable: FunctionComponent<InformationTableProps> = ({
    amountOfColumns = 2,
    amountOfRows = 4,
    children,
    data = [],
    errors,
    isDisabled = false,
    isLoading = false,
    isSidePanel = false,
    isTextArea = false,
    warnings,
}) => {
    const amountOfRowsPerColumn = Math.ceil(data.length / amountOfColumns);
    const [informationTableData, setInformationTableData] = useState<InformationTableData[]>(data);

    useEffect(() => {
        if (isLoading || isEmpty(data)) {
            setInformationTableData(
                Array(amountOfColumns * amountOfRows).fill({
                    label: <Skeleton width="60%" />,
                    value: <Skeleton width="90%" />,
                })
            );
        } else {
            setInformationTableData(data);
        }
    }, [data, isLoading]);

    const columnArray = useMemo(
        () =>
            Array.from(Array(amountOfColumns).keys()).map((key) => (
                <Column amountOfColumns={amountOfColumns} key={key}>
                    {informationTableData
                        .slice(key * amountOfRowsPerColumn, (key + 1) * amountOfRowsPerColumn)
                        .map((element, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Row key={index}>
                                <Label isDisabled={isDisabled} isTextArea={isTextArea || element.isTextArea || false}>
                                    {element.label}
                                </Label>
                                <Value
                                    isDisabled={isDisabled || element.isDisabled || false}
                                    isTextArea={isTextArea || element.isTextArea || false}
                                >
                                    {element.value}
                                </Value>
                            </Row>
                        ))}
                </Column>
            )),
        [informationTableData]
    );

    return (
        <>
            <StyledInformationTable isSidePanel={isSidePanel}>
                {columnArray}
                {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
            </StyledInformationTable>
            {errors && InformationErrors(errors)}
            {warnings && InformationWarnings(warnings)}
        </>
    );
};

export default InformationTable;
