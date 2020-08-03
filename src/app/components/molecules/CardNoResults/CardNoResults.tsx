import { Elevation, IconType } from '../../../types';
import { Header, IconWrapper, Item, Left, Right, StyledCardNoResults, Title } from './CardNoResults.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import IconCustomizable from '../IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../IconCustomizable/types';

export interface CardNoResultsProps {
    children?: never;
    className?: string;
    elevation?: Elevation;
    header: ReactNode;
    iconType: IconType;
    itemPrefix?: string;
    items?: ReactNode[];
    title: ReactNode;
}

export const CardNoResults: FunctionComponent<CardNoResultsProps> = ({
    className,
    elevation = Elevation.LEVEL_1,
    header,
    iconType,
    itemPrefix = '-',
    items = [],
    title,
}) => (
    <StyledCardNoResults className={className} elevation={elevation}>
        <Left>
            <IconWrapper>
                <IconCustomizable iconSize={IconCustomizableSize.SIZE30} iconType={iconType} />
            </IconWrapper>
        </Left>
        <Right>
            <Header>{header}</Header>
            <Title>{title}</Title>
            {items.length > 0 &&
                items.map((item) => (
                    <Item key={item?.toString()}>
                        {`${itemPrefix} `}
                        {item}
                    </Item>
                ))}
        </Right>
    </StyledCardNoResults>
);

export default CardNoResults;
