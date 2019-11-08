import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import Card from '../../atoms/Card/Card';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

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
    elevation: PropTypes.oneOf(Object.values(Card.elevations)).isRequired,
    position: PropTypes.oneOf(Object.values(Card.positions)).isRequired,
    theme: themePropTypes,
};

StyledContainerContent.defaultProps = {
    theme: themeBasic,
};

export default StyledContainerContent;
