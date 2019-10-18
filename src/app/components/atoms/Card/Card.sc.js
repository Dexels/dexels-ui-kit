import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { backgroundColorPrimary, colorPrimary } from '../../../styles/theme/theme';
import { borderRadius, spacingUnit } from '../../../styles/theme/layout';
import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledCard = styled.div`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body1)};
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    ${({ hasBorderRadius }) => hasBorderRadius && css`
        border-radius: calc(${borderRadius} / 2);
    `}
    display: flex;
    background-color: ${backgroundColorPrimary};
    padding: ${spacingUnit};
    word-break: break-word;
    color: ${colorPrimary};
`;

StyledCard.propTypes = {
    hasBorderRadius: PropTypes.bool.isRequired,
};

export default StyledCard;
