import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import { CARD_ELEVATIONS } from '../../atoms/Card/Card.consts';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';

export const StyledCardStatusWrapper = styled.div`
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
