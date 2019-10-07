import {
    Header,
    Item,
    Left,
    Right,
    StyledNoResultsCard,
    Title,
} from './NoResultsCard.sc';
import Card from '../../molecules/Card/Card';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const NoResultsCard = ({
    elevation,
    header,
    height,
    iconType,
    itemPrefix,
    items,
    title,
    width,
}) => (
    <StyledNoResultsCard
        elevation={elevation}
        height={height}
        width={width}
    >
        <Left>
            <Icon type={iconType} />
        </Left>
        <Right>
            <Header>
                {header}
            </Header>
            <Title>
                {title}
            </Title>
<<<<<<< HEAD
            {items && items.length !== 0 && items.map((item) => (
                <Item>
                    {itemPrefix.concat(' ').concat(item)}
=======
            {items.length > 0 && items.map((item) => (
                <Item key={item}>
                    {`${itemPrefix} ${item}`}
>>>>>>> test
                </Item>
            ))}
        </Right>
    </StyledNoResultsCard>
);

NoResultsCard.elevations = Card.elevations;
NoResultsCard.iconTypes = Icon.types;

NoResultsCard.propTypes = {
    elevation: PropTypes.oneOf(Object.values(NoResultsCard.elevations)),
    header: PropTypes.string.isRequired,
    height: PropTypes.string,
    iconType: PropTypes.oneOf(Object.values(NoResultsCard.iconTypes)),
    itemPrefix: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
        }),
    ),
    title: PropTypes.string.isRequired,
    width: PropTypes.string,
};

NoResultsCard.defaultProps = {
    elevation: NoResultsCard.elevations.LEVEL_1,
    height: '100%',
    iconType: NoResultsCard.iconTypes.SEARCH,
    itemPrefix: '-',
    items: null,
    width: '100%',
};

export default NoResultsCard;
