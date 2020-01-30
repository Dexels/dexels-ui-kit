import {
    Elevations,
    ElevationsMap,
    IconTypes,
    IconTypesMap,
} from '../../../types';
import {
    Header,
    IconWrapper,
    Item,
    Left,
    Right,
    StyledCardNoResults,
    Title,
} from './CardNoResults.sc';
import Card from '../../atoms/Card/Card';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';

export interface CardNoResultsProps {
    className?: string;
    elevation?: Elevations;
    header: React.ReactNode;
    iconType: IconTypes;
    itemPrefix?: string;
    items?: React.ReactNode[];
    title: React.ReactNode;
}

interface CardNoResultsComponent extends React.FunctionComponent<CardNoResultsProps> {
    elevations: ElevationsMap;
    iconTypes: IconTypesMap;
}

export const CardNoResults: CardNoResultsComponent = ({
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

CardNoResults.elevations = Card.elevations;
CardNoResults.iconTypes = Icon.types;

CardNoResults.defaultProps = {
    className: '',
    elevation: CardNoResults.elevations.LEVEL_1,
    itemPrefix: '-',
    items: null,
};

export default CardNoResults;
