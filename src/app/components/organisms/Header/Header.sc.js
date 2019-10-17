import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorTertiary,
    colorHeadingLight,
} from '../../../styles/theme/theme';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-self: center;
    margin-right: 16px;
`;

export const Title = styled.div`
    ${textStyling(availableTextStyles().body1)};
    margin:auto;
    padding-left:16px;
    color: ${colorHeadingLight};
`;

export const RightContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-self: center;
    color: ${colorHeadingLight};
    margin-inline-start: auto;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-self: center;
    color: ${colorHeadingLight};
`;

export const StyledHeader = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction:row;
    background: ${backgroundColorTertiary};
    height: 52px;
    color: ${colorHeadingLight};
`;

StyledHeader.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
};
