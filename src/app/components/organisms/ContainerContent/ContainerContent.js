import { CONTENT_CONTAINER_ELEVATIONS, CONTENT_CONTAINER_POSITIONS } from './ContainerContent.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledContainerContent } from './ContainerContent.sc';

const ContainerContent = ({ children, elevation, position }) => (
    <StyledContainerContent elevation={elevation} position={position}>
        {children}
    </StyledContainerContent>
);

ContainerContent.elevations = CONTENT_CONTAINER_ELEVATIONS;
ContainerContent.positions = CONTENT_CONTAINER_POSITIONS;

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
