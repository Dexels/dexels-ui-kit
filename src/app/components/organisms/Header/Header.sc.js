import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorTertiary,
    colorHeadingLight,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import { spacingUnit } from '../../../styles/theme/layout';

export const StyledHeader = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: row;
    background: ${backgroundColorTertiary};
    width: 100%;
    height: calc(${spacingUnit} * 6.5);
    color: ${colorHeadingLight};

    ${({ isInverted }) => isInverted && css`
        background-color: ${colorHeadingLight};
        color: ${backgroundColorTertiary};
    `};
`;

StyledHeader.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
    isInverted: PropTypes.bool.isRequired,
};

export const NavigationWrapper = styled.div`
    display: flex;
    flex-grow: 2;
    flex-wrap: nowrap;
`;

export const Title = styled.div`
    ${textStyling(availableTextStyles().body1)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 calc(${spacingUnit} * 2);
`;

export const FunctionalWrapper = styled.div`
    align-self: center;
    padding: 0 ${spacingUnit} 0 ${spacingUnit};
`;
