import Card from '../../molecules/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledContentContainer } from './ContentContainer.sc';

const ContentContainer = ({
    children,
    elevation,
    height,
    padding,
    position,
    width,
}) => (
    <StyledContentContainer
        elevation={elevation}
        height={height}
        padding={padding}
        position={position}
        width={width}
    >
        {children}
    </StyledContentContainer>
);

ContentContainer.elevations = Card.elevations;
ContentContainer.positions = Card.positions;

ContentContainer.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(ContentContainer.elevations)),
    height: PropTypes.string,
    padding: PropTypes.string,
    position: PropTypes.oneOf(Object.values(ContentContainer.positions)),
    width: PropTypes.string,
};

ContentContainer.defaultProps = {
    elevation: ContentContainer.elevations.LEVEL_0,
    height: '100%',
    padding: '8px',
    position: ContentContainer.positions.TOP_LEFT,
    width: '100%',
};

export default ContentContainer;
