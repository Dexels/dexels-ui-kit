import { Elevation, IconType } from '../../../types';
import {
    Header,
    IconWrapper,
    Item,
    Left,
    Right,
    StyledCardNoResults,
    Title,
} from './CardNoResults.sc';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';

export interface CardNoResultsProps {
    className?: string;
    elevation?: Elevation;
    header: React.ReactNode;
    iconType: IconType;
    itemPrefix?: string;
    items?: React.ReactNode[];
    title: React.ReactNode;
}

export const CardNoResults: React.FunctionComponent<CardNoResultsProps> = ({
    className,
    elevation,
    header,
    iconType,
    itemPrefix,
    items,
    title,
}) => (
    <StyledCardNoResults className={className} elevation={elevation}>
        <Left>
            <IconWrapper>
                <Icon type={iconType} />
            </IconWrapper>
        </Left>
        <Right>
            <Header>
                {header}
            </Header>
            <Title>
                {title}
            </Title>
            {items.length > 0 && items.map((item) => (
                <Item key={item as any}>
                    {`${itemPrefix} ${item}`}
                </Item>
            ))}
        </Right>
    </StyledCardNoResults>
);

CardNoResults.defaultProps = {
    className: '',
    elevation: Elevation.LEVEL_1,
    itemPrefix: '-',
    items: null,
};

export default CardNoResults;
