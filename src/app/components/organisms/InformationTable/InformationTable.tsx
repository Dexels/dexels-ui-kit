import { ChildrenWrapper, Column, Label, Row, StyledInformationTable, Value } from './InformationTable.sc';
import React, { FunctionComponent, ReactNode, useEffect, useMemo, useState } from 'react';
import { AmountOfColumns } from './types';
import InformationErrors from './components/InformationErrors';
import { InformationWarnings } from './components/InformationWarnings';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import { Skeleton } from '../../molecules/Skeleton/Skeleton';

export interface InformationTableData {
    isDisabled?: boolean;
    isRequired?: boolean;
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
    const [informationTableData, setInformationTableData] = useState<InformationTableData[]>([]);

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
    }, [amountOfColumns, amountOfRows, data, isLoading]);

    const columnArray = useMemo(() => {
        const amountOfRowsPerColumn = Math.ceil(informationTableData.length / amountOfColumns);

        return Array.from(Array(amountOfColumns).keys()).map((key) => (
            <Column amountOfColumns={amountOfColumns} key={key}>
                {informationTableData
                    .slice(key * amountOfRowsPerColumn, (key + 1) * amountOfRowsPerColumn)
                    .map((element, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Row key={index}>
                            <Label isDisabled={isDisabled} isTextArea={isTextArea || element.isTextArea || false}>
                                {element.label}
                                {/* EV 2021-12-20: by request of Marrick, the required indicator is not visible in non edit mode */}
                                {/* I have the feeling this might change, hence this comment and the commented code */}
                                {/* {element.isRequired && <RequiredIndicator isDisabled={isDisabled} />} */}
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
        ));
    }, [amountOfColumns, informationTableData]);

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
