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
    iconSize,
    iconType,
    itemPrefix,
    items,
    title,
}) => (
    <StyledNoResultsCard elevation={elevation}>
        <Left>
            <Icon size={iconSize} type={iconType} />
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
    </StyledNoResultsCard>
);

NoResultsCard.elevations = Card.elevations;
NoResultsCard.iconTypes = Icon.types;

NoResultsCard.propTypes = {
    elevation: PropTypes.oneOf(Object.values(NoResultsCard.elevations)),
    header: PropTypes.string.isRequired,
    iconSize: PropTypes.string,
    iconType: PropTypes.oneOf(Object.values(NoResultsCard.iconTypes)),
    itemPrefix: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
        }),
    ),
    title: PropTypes.string.isRequired,
};

NoResultsCard.defaultProps = {
    elevation: NoResultsCard.elevations.LEVEL_1,
    iconSize: '32px',
    iconType: NoResultsCard.iconTypes.SEARCH,
    itemPrefix: '-',
    items: null,
};

export default NoResultsCard;
