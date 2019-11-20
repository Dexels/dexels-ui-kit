import { CONTENT_CONTAINER_ELEVATIONS, CONTENT_CONTAINER_POSITIONS } from './ContainerContent.consts';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/themePropTypes';

export const StyledContainerContent = styled.div`
    ${setBoxSizing()}
    ${({ position }) => getPosition(position)}
    ${({ elevation }) => getElevation(elevation)}
    display: flex;
    border: 0;
    background-color: transparent;
    padding: ${({ theme }) => theme.spacing(1)};
`;

StyledContainerContent.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CONTENT_CONTAINER_ELEVATIONS)).isRequired,
    position: PropTypes.oneOf(Object.values(CONTENT_CONTAINER_POSITIONS)).isRequired,
    theme: themePropTypes,
};

StyledContainerContent.defaultProps = {
    theme: themeBasic,
};

export default StyledContainerContent;
