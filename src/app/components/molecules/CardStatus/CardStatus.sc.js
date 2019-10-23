import styled, { css } from 'styled-components';
import { borderRadius } from '../../../styles/theme/layout';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';

export const StyledCardStatusWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)};

    ${({ hasBorderRadius }) => hasBorderRadius && css`
        border-radius: calc(${borderRadius} / 2);
    `};
`;

StyledCardStatusWrapper.propTypes = {
    hasBorderRadius: PropTypes.bool.isRequired,
};

export default StyledCardStatusWrapper;
