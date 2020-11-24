import { ChildrenWrapper, Column, Label, Row, StyledInformationTable, Value } from './InformationTable.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { AmountOfColumns } from './types';

export interface InformationTableData {
    isDisabled?: boolean;
    label: ReactNode;
    value: ReactNode;
}

export interface InformationTableProps {
    amountOfColumns?: AmountOfColumns;
    children?: ReactNode;
    data?: InformationTableData[];
    isSidePanel?: boolean;
}

export const InformationTable: FunctionComponent<InformationTableProps> = ({
    amountOfColumns = 2,
    children,
    data = [],
    isSidePanel = false,
}) => {
    const amountOfRowsPerColumn = Math.ceil(data.length / amountOfColumns);

    // eslint-disable-next-line no-console
    console.log('[amountOfRowsPerColumn]', amountOfRowsPerColumn);

    const columnArray =
        data.length > 0
            ? Array.from(Array(amountOfColumns).keys()).map((key) => (
                  <Column amountOfColumns={amountOfColumns} key={key}>
                      {data
                          .slice(key * amountOfRowsPerColumn, (key + 1) * amountOfRowsPerColumn)
                          .map(({ isDisabled = false, label, value }, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <Row key={index}>
                                  <Label>{label}</Label>
                                  <Value isDisabled={isDisabled}>{value}</Value>
                              </Row>
                          ))}
                  </Column>
              ))
            : [];

    // eslint-disable-next-line no-console
    console.log('[columnArray length]', columnArray.length);

    return (
        <StyledInformationTable isSidePanel={isSidePanel}>
            {columnArray}
            {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
        </StyledInformationTable>
    );
};

export default InformationTable;
