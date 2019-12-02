import styled, { css } from 'styled-components';
import { CARD_ELEVATIONS } from '../../atoms/Card/Card.consts';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledCardStatusWrapper = styled.div`
    ${setBoxSizing()}
    ${({ elevation }) => getElevation(elevation)}

    ${({ hasBorderRadius, theme }) => hasBorderRadius && css`
        border-radius: ${theme.spacing(0.5)};
    `}
`;

StyledCardStatusWrapper.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)).isRequired,
    hasBorderRadius: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledCardStatusWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledCardStatusWrapper;
