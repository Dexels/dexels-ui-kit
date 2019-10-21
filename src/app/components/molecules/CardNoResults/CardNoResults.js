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
import Colors from '../../atoms/Colors/Colors';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const CardNoResults = ({
    elevation,
    header,
    iconType,
    itemPrefix,
    items,
    title,
}) => (
    <StyledCardNoResults elevation={elevation}>
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
                <Item key={item}>
                    {`${itemPrefix} ${item}`}
                </Item>
            ))}
        </Right>
    </StyledCardNoResults>
);

CardNoResults.elevations = Card.elevations;
CardNoResults.iconColors = Colors.colors;
CardNoResults.iconTypes = Icon.types;

CardNoResults.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CardNoResults.elevations)),
    header: PropTypes.string.isRequired,
    iconType: PropTypes.oneOf(Object.values(CardNoResults.iconTypes)),
    itemPrefix: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.node),
    title: PropTypes.string.isRequired,
};

CardNoResults.defaultProps = {
    elevation: CardNoResults.elevations.LEVEL_1,
    iconType: CardNoResults.iconTypes.SEARCH,
    itemPrefix: '-',
    items: null,
};

export default CardNoResults;
