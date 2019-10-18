import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorTertiary,
    colorHeadingLight,
} from '../../../styles/theme/theme';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import { spacingUnit } from '../../../styles/theme/layout';
import styled from 'styled-components';

export const StyledHeader = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${backgroundColorTertiary};
    min-height: calc(${spacingUnit} * 6);
    color: ${colorHeadingLight};
`;

StyledHeader.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
};

export const NavigationWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    /* align-self: center; */
    color: ${colorHeadingLight};
`;

export const Title = styled.div`
    ${textStyling(availableTextStyles().body1)};
    margin: 0 16px 0 0;
    color: ${colorHeadingLight};
    /* align-self: center; */
`;

export const FunctionalWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    /* align-self: center; */
    color: ${colorHeadingLight};
    margin-inline-start: auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* align-self: center; */
    margin: 0 16px 0 0;
`;
