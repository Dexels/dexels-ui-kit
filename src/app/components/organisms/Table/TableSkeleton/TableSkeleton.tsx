import { Circle, Header, Indicator, Item, ItemWrapper, Row, StyledTableSkeleton, SubHeader } from './TableSkeleton.sc';
import React, { FunctionComponent } from 'react';
import Skeleton from '../../../molecules/Skeleton/Skeleton';

export interface TableSkeletonProps {
    isHeaderVisible?: boolean;
    numberOfRowsPerTable?: number;
    numberOfTables?: number;
    showRowsInCard?: boolean;
}

export const TableSkeleton: FunctionComponent<TableSkeletonProps> = ({
    isHeaderVisible = false,
    numberOfRowsPerTable = 5,
    numberOfTables = 1,
    showRowsInCard = false,
}) => (
    <>
        {Array.from(Array(numberOfTables).keys()).map((keyTable) => (
            <StyledTableSkeleton key={keyTable}>
                {isHeaderVisible && (
                    <>
                        <Header>
                            <Skeleton />
                        </Header>
                        <SubHeader>
                            <Skeleton />
                        </SubHeader>
                    </>
                )}
                <ItemWrapper showRowsInCard={showRowsInCard}>
                    {Array.from(Array(numberOfRowsPerTable).keys()).map((keyRow) => (
                        <Item key={keyRow}>
                            <Indicator>
                                <Skeleton height="100%" />
                            </Indicator>
                            <Circle>
                                <Skeleton height="100%" />
                            </Circle>
                            <Row>
                                <Skeleton height="100%" />
                            </Row>
                        </Item>
                    ))}
                </ItemWrapper>
            </StyledTableSkeleton>
        ))}
    </>
);
