import Card from '../../molecules/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledContainerContent } from './ContainerContent.sc';

const ContainerContent = ({ children, elevation, position }) => (
    <StyledContainerContent elevation={elevation} position={position}>
        {children}
    </StyledContainerContent>
);

ContainerContent.elevations = Card.elevations;
ContainerContent.positions = Card.positions;

ContainerContent.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(ContainerContent.elevations)),
    position: PropTypes.oneOf(Object.values(ContainerContent.positions)),
};

ContainerContent.defaultProps = {
    elevation: ContainerContent.elevations.LEVEL_0,
    position: ContainerContent.positions.TOP_LEFT,
};

export default ContainerContent;
