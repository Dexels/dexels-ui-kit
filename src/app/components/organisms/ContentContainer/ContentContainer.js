import Card from '../../molecules/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledContentContainer } from './ContentContainer.sc';

const ContentContainer = ({
    children,
    elevation,
    position,
}) => (
    <StyledContentContainer
        elevation={elevation}
        position={position}
    >
        {children}
    </StyledContentContainer>
);

ContentContainer.elevations = Card.elevations;
ContentContainer.positions = Card.positions;

ContentContainer.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(ContentContainer.elevations)),
    position: PropTypes.oneOf(Object.values(ContentContainer.positions)),
};

ContentContainer.defaultProps = {
    elevation: ContentContainer.elevations.LEVEL_0,
    position: ContentContainer.positions.TOP_LEFT,
};

export default ContentContainer;
