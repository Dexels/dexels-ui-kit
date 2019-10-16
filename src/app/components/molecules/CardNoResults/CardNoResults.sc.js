import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    colorBodyDark,
    colorPrimary,
    colorSecondary,
} from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';
import styled from 'styled-components';

export const StyledCardNoResults = styled.div`
    ${setBoxSizing()};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    background-color: 'transparent';
    padding: calc(${spacingUnit} * 3);
`;

export const Header = styled.div`
    ${textStyling(availableTextStyles().h1)};
    margin: 0 0 16px;
    color: ${colorPrimary};
`;

export const Title = styled.p`
    ${textStyling(availableTextStyles().h3)};
    margin: 4px 4px 4px 0;
    color: ${colorSecondary};
`;

export const Item = styled.p`
    ${textStyling(availableTextStyles().body1)};
    margin: 0 0 4px;
    color: ${colorBodyDark};
`;

export const Left = styled.div`
    flex: 0 0 auto;
    margin-top: 4px; /* Correction for line-height Title element */
    width: 48px;
`;

export const Right = styled.div`
    flex: 1 1 auto;
`;
