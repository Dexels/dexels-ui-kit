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
    background: ${backgroundColorTertiary};
    height: calc(${spacingUnit} * 6.5);
    color: ${colorHeadingLight};
`;

StyledHeader.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
};

export const NavigationWrapper = styled.div`
    display: flex;
    flex-grow: 2;
    flex-wrap: nowrap;
    align-self: center;
    color: ${colorHeadingLight};
`;

export const Title = styled.div`
    ${textStyling(availableTextStyles().body1)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 calc(${spacingUnit} * 2);
    color: ${colorHeadingLight};
`;

export const FunctionalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: nowrap;
    align-self: center;
    justify-content: flex-end;
    color: ${colorHeadingLight};
`;

export const FunctionalContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    margin: 0 calc(${spacingUnit} * 2) 0 0;
`;
