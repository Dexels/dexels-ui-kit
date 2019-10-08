import {
    Header,
    Item,
    Left,
    Right,
    StyledCardNoResults,
    Title,
} from './CardNoResults.sc';
import Card from '../../atoms/Card/Card';
import Icon from '../../atoms/Icon/Icon';
import { IconWrapper } from '../../molecules/TextWithOptionalIcon/TextWithOptionalIcon.sc';
import PropTypes from 'prop-types';
import React from 'react';

const CardNoResults = ({
    elevation,
    header,
    iconSize,
    iconType,
    itemPrefix,
    items,
    title,
}) => (
    <StyledCardNoResults elevation={elevation}>
        <Left>
            <IconWrapper iconSize={iconSize}>
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
CardNoResults.iconTypes = Icon.types;

CardNoResults.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CardNoResults.elevations)),
    header: PropTypes.string.isRequired,
    iconSize: PropTypes.string,
    iconType: PropTypes.oneOf(Object.values(CardNoResults.iconTypes)),
    itemPrefix: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
        }),
    ),
    title: PropTypes.string.isRequired,
};

CardNoResults.defaultProps = {
    elevation: CardNoResults.elevations.LEVEL_1,
    iconSize: '32px',
    iconType: CardNoResults.iconTypes.SEARCH,
    itemPrefix: '-',
    items: null,
};

export default CardNoResults;
