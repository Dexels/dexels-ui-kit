import { ChildrenWrapper, Column, Label, Row, StyledInformationTable, Value } from './InformationTable.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { AmountOfColumns } from './types';
import InformationErrors from './components/InformationErrors';

export interface InformationTableData {
    isDisabled?: boolean;
    label: ReactNode;
    value: ReactNode;
}

export interface InformationTableProps {
    amountOfColumns?: AmountOfColumns;
    children?: ReactNode;
    data?: InformationTableData[];
    errors?: string[];
    isDisabled?: boolean;
    isSidePanel?: boolean;
}

export const InformationTable: FunctionComponent<InformationTableProps> = ({
    amountOfColumns = 2,
    children,
    data = [],
    errors,
    isDisabled = false,
    isSidePanel = false,
}) => {
    const amountOfRowsPerColumn = Math.ceil(data.length / amountOfColumns);

    const columnArray =
        data.length > 0
            ? Array.from(Array(amountOfColumns).keys()).map((key) => (
                  <Column amountOfColumns={amountOfColumns} key={key}>
                      {data
                          .slice(key * amountOfRowsPerColumn, (key + 1) * amountOfRowsPerColumn)
                          .map((element, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <Row key={index}>
                                  <Label isDisabled={isDisabled}>{element.label}</Label>
                                  <Value isDisabled={isDisabled || element.isDisabled || false}>{element.value}</Value>
                              </Row>
                          ))}
                  </Column>
              ))
            : [];

    return (
        <>
            <StyledInformationTable isSidePanel={isSidePanel}>
                {columnArray}
                {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
            </StyledInformationTable>
            {errors && InformationErrors(errors)}
        </>
    );
};

export default InformationTable;
